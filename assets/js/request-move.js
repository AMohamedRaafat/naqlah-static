// Request Move - Multi-step Form
let currentStep = 1;
const totalSteps = 8;
let disassemblyItems = [];
let selectedDate = null;
let selectedAMPM = 'AM';
let currentCalendarMonth = new Date().getMonth();
let currentCalendarYear = new Date().getFullYear();

function updateProgress() {
  const percentage = (currentStep / totalSteps) * 100;
  $('#progress-bar').css('width', percentage + '%');

  // Hide all steps
  $('.step-content').addClass('hidden');

  // Show current step
  $(`#step-${currentStep}`).removeClass('hidden');

  // Initialize destination map when reaching step 3
  if (currentStep === 3) {
    setTimeout(() => {
      initDestinationMap();
      if (destinationMap) {
        destinationMap.invalidateSize(); // Refresh map size
      }
    }, 100);
  }

  // Refresh pickup map size when going back to step 1
  if (currentStep === 1 && pickupMap) {
    setTimeout(() => {
      pickupMap.invalidateSize();
    }, 100);
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

function nextStep() {
  // Validate current step before proceeding
  if (!validateCurrentStep()) {
    return;
  }

  if (currentStep < totalSteps) {
    // Transfer data between steps
    if (currentStep === 1) {
      // Transfer pickup location to step 2
      $('#pickup-details-city').val(pickupLocation.city);
      $('#pickup-details-address').val(pickupLocation.address);
    } else if (currentStep === 3) {
      // Transfer destination location to step 4
      $('#destination-details-city').val(destinationLocation.city);
      $('#destination-details-address').val(destinationLocation.address);
    }

    currentStep++;
    updateProgress();
  }
}

// Validate current step
function validateCurrentStep() {
  let isValid = true;
  let errorMessage = '';

  switch (currentStep) {
    case 1:
      // Validate pickup location selected
      if (!pickupLocation.address || pickupLocation.address === '') {
        errorMessage = 'يرجى اختيار الموقع المراد النقل منه';
        isValid = false;
      }
      break;
    case 2:
      // Validate pickup details
      const buildingName = $('#pickup-building-name').val();
      const floor = $('#pickup-floor').val();
      const pickupElevatorVal = $('#pickup-elevator').val();
      const pickupElevatorSize = $('#pickup-elevator-size').val();
      if (!buildingName || !floor) {
        errorMessage = 'يرجى إكمال جميع الحقول المطلوبة';
        isValid = false;
      }
      if (isValid && pickupElevatorVal === 'yes' && !pickupElevatorSize) {
        errorMessage = 'يرجى إدخال حجم المصعد التقريبي';
        isValid = false;
      }
      break;
    case 3:
      // Validate destination location selected
      if (!destinationLocation.address || destinationLocation.address === '') {
        errorMessage = 'يرجى اختيار الموقع المراد النقل إليه';
        isValid = false;
      }
      break;
    case 4:
      // Validate destination details
      const destBuilding = $('#destination-building-name').val();
      const destFloor = $('#destination-floor').val();
      const destElevatorVal = $('#destination-elevator').val();
      const destElevatorSize = $('#destination-elevator-size').val();
      if (!destBuilding || !destFloor) {
        errorMessage = 'يرجى إكمال جميع الحقول المطلوبة';
        isValid = false;
      }
      if (isValid && destElevatorVal === 'yes' && !destElevatorSize) {
        errorMessage = 'يرجى إدخال حجم المصعد التقريبي';
        isValid = false;
      }
      break;
    case 5:
      // Validate rooms count
      const roomsCount = $('#rooms-count').val();
      if (!roomsCount) {
        errorMessage = 'يرجى اختيار عدد الغرف';
        isValid = false;
        break;
      }

      // Validate uploaded files
      if (preciousFiles.length === 0 && $('#precious-files-select').val() === 'yes') {
        errorMessage = 'يرجى أرفاق صور أو فيديو للقطع الثمينة';
        isValid = false;
      }
      // Validate uploaded files
      if (uploadedFiles.length === 0) {
        errorMessage = 'يرجى رفع صور أو فيديو للأثاث';
        isValid = false;
      }
      break;
  }

  if (!isValid) {
    showNotification(errorMessage, 'error');
  }

  return isValid;
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
  }
}

// Map variables
let pickupMap,
  pickupMarker,
  pickupLocation = { lat: 24.7136, lng: 46.6753, address: '', city: 'الرياض' };
let destinationMap,
  destinationMarker,
  destinationLocation = { lat: 24.7136, lng: 46.6753, address: '', city: 'الرياض' };

// Initialize maps
function initMaps() {
  try {
    // Custom marker icon with fallback
    const customIcon = L.icon({
      iconUrl: '../assets/steps/map-marker.svg',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    // Initialize pickup map
    if (!pickupMap) {
      pickupMap = L.map('pickup-map').setView([pickupLocation.lat, pickupLocation.lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(pickupMap);

      pickupMarker = L.marker([pickupLocation.lat, pickupLocation.lng], {
        icon: customIcon,
      }).addTo(pickupMap);

      pickupMap.on('click', function (e) {
        handleMapClick(e, 'pickup');
      });
    }
  } catch (error) {
    console.error('Error initializing pickup map:', error);
  }
}

// Initialize destination map when needed
function initDestinationMap() {
  try {
    if (destinationMap) return; // Already initialized

    const customIcon = L.icon({
      iconUrl: '../assets/steps/map-marker.svg',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    destinationMap = L.map('destination-map').setView(
      [destinationLocation.lat, destinationLocation.lng],
      13
    );
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(destinationMap);

    destinationMarker = L.marker([destinationLocation.lat, destinationLocation.lng], {
      icon: customIcon,
    }).addTo(destinationMap);

    destinationMap.on('click', function (e) {
      handleMapClick(e, 'destination');
    });
  } catch (error) {
    console.error('Error initializing destination map:', error);
  }
}

// Handle map click
async function handleMapClick(e, type) {
  const { lat, lng } = e.latlng;

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=ar`
    );

    if (response.ok) {
      const data = await response.json();
      const address = data.display_name || `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
      const city =
        data.address?.city || data.address?.town || data.address?.state || 'الرياض';

      updateLocation(type, lat, lng, address, city);
    }
  } catch (error) {
    console.error('Geocoding error:', error);
    const fallbackAddress = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    updateLocation(type, lat, lng, fallbackAddress, 'الرياض');
  }
}

// Update location
function updateLocation(type, lat, lng, address, city) {
  if (type === 'pickup') {
    pickupLocation = { lat, lng, address, city };
    pickupMarker.setLatLng([lat, lng]);
    pickupMap.setView([lat, lng]);
    $('#pickup-city').text(city);
    $('#pickup-address').text(address);
    $('#pickup-location-display').removeClass('hidden');
  } else {
    destinationLocation = { lat, lng, address, city };
    destinationMarker.setLatLng([lat, lng]);
    destinationMap.setView([lat, lng]);
    $('#destination-city').text(city);
    $('#destination-address').text(address);
    $('#destination-location-display').removeClass('hidden');
  }
}

// Search location
let searchTimeout;
function searchLocation(query, type) {
  clearTimeout(searchTimeout);

  if (query.length < 3) return;

  searchTimeout = setTimeout(async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )},Saudi Arabia&countrycodes=sa&limit=1&accept-language=ar`
      );

      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) {
          const { lat, lon, display_name } = data[0];
          const newLat = parseFloat(lat);
          const newLng = parseFloat(lon);
          const city =
            data[0].address?.city ||
            data[0].address?.town ||
            data[0].address?.state ||
            'الرياض';

          updateLocation(type, newLat, newLng, display_name, city);
        }
      }
    } catch (error) {
      console.error('Search error:', error);
    }
  }, 800);
}

// Furniture items management
let furnitureItems = [];
const furnitureLabels = {
  bed: 'سرير',
  wardrobe: 'دولاب',
  ac: 'مكيف',
  sofa: 'صوفا',
  carpet: 'سجاد',
  desk: 'مكتب',
  table: 'طاولة',
  chair: 'كرسي',
  tv: 'تلفزيون',
  fridge: 'ثلاجة',
  'washing-machine': 'غسالة',
};

// File management
let uploadedFiles = [];
let preciousFiles = [];
// Add furniture item
window.addFurnitureItem = function () {
  const select = $('#furniture-select');
  const quantity = parseInt($('#furniture-quantity').val()) || 1;
  const itemType = select.val();

  if (!itemType) {
    showNotification('يرجى اختيار نوع القطعة', 'warning');
    return;
  }

  // Check if item already exists
  const existingIndex = furnitureItems.findIndex((item) => item.type === itemType);

  if (existingIndex !== -1) {
    // Update quantity
    furnitureItems[existingIndex].quantity += quantity;
  } else {
    // Add new item
    furnitureItems.push({ type: itemType, quantity: quantity });
  }

  // Reset inputs
  select.val('');
  $('#furniture-quantity').val('1');

  // Render items
  renderFurnitureItems();
};

// Render furniture items
function renderFurnitureItems() {
  const container = $('#selected-furniture-items');
  container.empty();

  furnitureItems.forEach((item) => {
    const chip = $(`
      <div class="flex items-center gap-2 px-3 py-2 bg-white border border-[#EDEDED] rounded-lg text-sm">
      <button
        type="button"
        onclick="removeFurnitureItem('${item.type}')"
        class="text-[#00B8A9] hover:text-red-500 transition-colors"
      >
        <i class="fas fa-times"></i>
      </button>
        <span class="text-[#353535]">${item.quantity} ${furnitureLabels[item.type]}</span>
      </div>
    `);
    container.append(chip);
  });
}

// Remove furniture item
window.removeFurnitureItem = function (itemType) {
  furnitureItems = furnitureItems.filter((item) => item.type !== itemType);
  renderFurnitureItems();
};
// Disassembly/Assembly Functions
function togglePreciousFiles(value) {
  if (value === 'yes') {
    $('#precious-files-wrapper').removeClass('hidden');
  } else {
    $('#precious-files-wrapper').addClass('hidden');
    preciousFiles = [];
    renderPreciousFilesPreviews();
  }
}
// Handle file selection
window.handlePreciousFilesSelect = function (event) {
  const files = Array.from(event.target.files);

  files.forEach((file) => {
    // Check file type
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      showNotification('يرجى اختيار ملفات صور أو فيديو فقط', 'warning');
      return;
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      showNotification('حجم الملف يجب أن يكون أقل من 10 ميجابايت', 'warning');
      return;
    }

    // Add to uploaded files
    const fileObj = {
      id: Date.now() + Math.random(),
      file: file,
      type: isImage ? 'image' : 'video',
    };

    preciousFiles.push(fileObj);
  });

  // Render previews
  renderPreciousFilesPreviews();

  // Reset input
  event.target.value = '';
};
window.handleFileSelect = function (event) {
  const files = Array.from(event.target.files);

  files.forEach((file) => {
    // Check file type
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      showNotification('يرجى اختيار ملفات صور أو فيديو فقط', 'warning');
      return;
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      showNotification('حجم الملف يجب أن يكون أقل من 10 ميجابايت', 'warning');
      return;
    }

    // Add to uploaded files
    const fileObj = {
      id: Date.now() + Math.random(),
      file: file,
      type: isImage ? 'image' : 'video',
    };

    uploadedFiles.push(fileObj);
  });

  // Render previews
  renderFilePreviews();

  // Reset input
  event.target.value = '';
};

// Render file previews
function renderPreciousFilesPreviews() {
  const container = $('#precious-files-previews');
  container.empty();

  preciousFiles.forEach((fileObj) => {
    const fileURL = URL.createObjectURL(fileObj.file);

    const preview = $(`
      <div class="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group">
        ${fileObj.type === 'image'
        ? `<img src="${fileURL}" alt="Preview" class="w-full h-full object-cover" />`
        : `<video src="${fileURL}" class="w-full h-full object-cover"></video>
               <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                 <i class="fas fa-play text-white text-2xl"></i>
               </div>`
      }
        <button
          type="button"
          onclick="removePreciousFile('${fileObj.id}')"
          class="absolute top-2 right-2 w-6 h-6 bg-[#00B8A9] hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
        >
          <i class="fas fa-times text-xs"></i>
        </button>
      </div>
    `);

    container.append(preview);
  });
}
function renderFilePreviews() {
  const container = $('#file-previews');
  container.empty();

  uploadedFiles.forEach((fileObj) => {
    const fileURL = URL.createObjectURL(fileObj.file);

    const preview = $(`
      <div class="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group">
        ${fileObj.type === 'image'
        ? `<img src="${fileURL}" alt="Preview" class="w-full h-full object-cover" />`
        : `<video src="${fileURL}" class="w-full h-full object-cover"></video>
               <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                 <i class="fas fa-play text-white text-2xl"></i>
               </div>`
      }
        <button
          type="button"
          onclick="removeFile('${fileObj.id}')"
          class="absolute top-2 right-2 w-6 h-6 bg-[#00B8A9] hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
        >
          <i class="fas fa-times text-xs"></i>
        </button>
      </div>
    `);

    container.append(preview);
  });
}

// Remove file
window.removeFile = function (fileId) {
  uploadedFiles = uploadedFiles.filter((f) => f.id != fileId);
  renderFilePreviews();
};
window.removePreciousFile = function (fileId) {
  preciousFiles = preciousFiles.filter((f) => f.id != fileId);
  renderPreciousFilesPreviews();
};
// Services management
let selectedServices = [];
const serviceLabels = {
  packing: 'التغليف المحكم',
  'cleaning-before': 'التنظيف قبل النقل',
  'cleaning-after': 'التنظيف بعد النقل',
  insurance: 'التأمين ضد الفقد والكسر',
  disassembly: 'فك وتركيب',
};

function renderServices() {
  const container = $('#selected-services-step6');
  container.empty();

  selectedServices.forEach((service) => {
    const chip = $(`
      <div class="flex items-center gap-2 px-3 py-2 bg-white border border-[#EDEDED] rounded-lg text-sm">
        <span class="text-[#353535]">${serviceLabels[service]}</span>
        <button
          type="button"
          onclick="removeService('${service}')"
          class="text-gray-400 hover:text-red-500 transition-colors"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
    `);
    container.append(chip);
  });
}

window.removeService = function (service) {
  selectedServices = selectedServices.filter((s) => s !== service);
  renderServices();
};

// Disassembly/Assembly Functions
function toggleDisassemblyDetails(value) {
  if (value === 'yes') {
    $('#disassembly-details').removeClass('hidden');
  } else {
    $('#disassembly-details').addClass('hidden');
    disassemblyItems = [];
    renderDisassemblyItems();
  }
}

function addDisassemblyItem() {
  const typeSelect = $('#disassembly-type-select');
  const quantityInput = $('#disassembly-quantity');
  const type = typeSelect.val();
  const quantity = parseInt(quantityInput.val()) || 1;

  if (!type) {
    showNotification('يرجى اختيار نوع القطعة', 'warning');
    return;
  }

  // Check if item already exists
  const existingItem = disassemblyItems.find((item) => item.type === type);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    disassemblyItems.push({ type, quantity });
  }

  renderDisassemblyItems();
  typeSelect.val('');
  quantityInput.val(1);
}

function removeDisassemblyItem(index) {
  disassemblyItems.splice(index, 1);
  renderDisassemblyItems();
}

function renderDisassemblyItems() {
  const container = $('#disassembly-items');
  container.empty();

  disassemblyItems.forEach((item, index) => {
    const chip = $(`
      <div class="flex items-center gap-2 px-3 py-2 bg-white border border-[#EDEDED] rounded-lg text-sm">
      <button
        type="button"
        onclick="removeDisassemblyItem(${index})"
        class="text-[#00B8A9] hover:text-red-500 transition-colors"
      >
        <i class="fas fa-times"></i>
      </button>
        <span class="text-[#353535]">${item.quantity} ${item.type}</span>
      </div>
    `);
    container.append(chip);
  });
}

// Calendar Functions
function renderCalendar() {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  $('#calendar-month-year').text(
    `${monthNames[currentCalendarMonth]} ${currentCalendarYear}`
  );

  const firstDay = new Date(currentCalendarYear, currentCalendarMonth, 1);
  const lastDay = new Date(currentCalendarYear, currentCalendarMonth + 1, 0);
  const prevLastDay = new Date(currentCalendarYear, currentCalendarMonth, 0);

  const firstDayIndex = firstDay.getDay();
  const lastDate = lastDay.getDate();
  const prevLastDate = prevLastDay.getDate();

  const container = $('#calendar-days');
  container.empty();

  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === currentCalendarMonth && today.getFullYear() === currentCalendarYear;

  // Previous month days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const day = prevLastDate - i;
    const dayBtn = $(`
      <button type="button" class="py-2 text-[14px] text-[#C4C4C4] hover:bg-gray-50 rounded-lg" disabled>
        ${day}
      </button>
    `);
    container.append(dayBtn);
  }

  // Current month days
  for (let day = 1; day <= lastDate; day++) {
    const date = new Date(currentCalendarYear, currentCalendarMonth, day);
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isToday = isCurrentMonth && day === today.getDate();
    const isSelected =
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentCalendarMonth &&
      selectedDate.getFullYear() === currentCalendarYear;

    let btnClass =
      'py-2 text-[14px] font-medium hover:bg-gray-50 rounded-lg transition-colors';
    if (isPast) {
      btnClass += ' text-[#C4C4C4] cursor-not-allowed';
    } else if (isSelected) {
      btnClass += ' bg-[#00B8A9] text-white hover:bg-[#009688]';
    } else if (isToday) {
      btnClass += ' bg-[#00B8A9]/20 text-[#00B8A9] font-semibold';
    } else {
      btnClass += ' text-[#353535]';
    }

    const dayBtn = $(`
      <button type="button" class="${btnClass}" ${isPast ? 'disabled' : ''}>
        ${day}
      </button>
    `);

    if (!isPast) {
      dayBtn.on('click', function () {
        selectedDate = new Date(currentCalendarYear, currentCalendarMonth, day);
        $('#selected-date').val(selectedDate.toISOString().split('T')[0]);
        renderCalendar();
      });
    }

    container.append(dayBtn);
  }

  // Next month days
  const remainingCells = 42 - (firstDayIndex + lastDate);
  for (let day = 1; day <= remainingCells; day++) {
    const dayBtn = $(`
      <button type="button" class="py-2 text-[14px] text-[#C4C4C4] hover:bg-gray-50 rounded-lg" disabled>
        ${day}
      </button>
    `);
    container.append(dayBtn);
  }
}

function changeMonth(direction) {
  currentCalendarMonth += direction;
  if (currentCalendarMonth > 11) {
    currentCalendarMonth = 0;
    currentCalendarYear++;
  } else if (currentCalendarMonth < 0) {
    currentCalendarMonth = 11;
    currentCalendarYear--;
  }
  renderCalendar();
}

// AM/PM Toggle
function toggleAMPM(period) {
  selectedAMPM = period;
  $('#am-btn').removeClass('bg-[#00B8A9] text-white').addClass('bg-[#F5F5F5] text-[#353535]');
  $('#pm-btn').removeClass('bg-[#00B8A9] text-white').addClass('bg-[#F5F5F5] text-[#353535]');

  if (period === 'AM') {
    $('#am-btn')
      .removeClass('bg-[#F5F5F5] text-[#353535]')
      .addClass('bg-[#00B8A9] text-white');
  } else {
    $('#pm-btn')
      .removeClass('bg-[#F5F5F5] text-[#353535]')
      .addClass('bg-[#00B8A9] text-white');
  }
}

// Elevator size toggle
function toggleElevatorSize(which, value) {
  const wrapperId = which === 'pickup' ? '#pickup-elevator-size-wrapper' : '#destination-elevator-size-wrapper';
  const inputId = which === 'pickup' ? '#pickup-elevator-size' : '#destination-elevator-size';
  if (value === 'yes') {
    $(wrapperId).removeClass('hidden');
  } else {
    $(wrapperId).addClass('hidden');
    $(inputId).val(''); // Clear value when hiding
  }
}

// Preview/Summary Functions
let routeMap = null;

function updatePreview() {
  // Update date and time
  const time = $('#move-time').val();
  const dateStr = selectedDate
    ? selectedDate.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).replace(/\d+/g, num => Number(num).toString())
    : '-';

  $('#preview-time').text(`${time} ${selectedAMPM === 'AM' ? 'ص' : 'م'}`);
  $('#preview-date').text(dateStr);

  // Update pickup details
  $('#preview-pickup-city').text(pickupLocation.city || 'الرياض');
  $('#preview-pickup-address').text(pickupLocation.address || '-');
  $('#preview-pickup-floor').text(`طابق ${$('#pickup-floor').val() || '-'}`);
  const pickupElevatorSize = $('#pickup-elevator-size').val();
  const pickupSizeText = pickupElevatorSize === 'small' ? 'صغير' :
    pickupElevatorSize === 'medium' ? 'متوسط' :
      pickupElevatorSize === 'large' ? 'كبير' : '-';
  $('#preview-pickup-elevator').text(
    $('#pickup-elevator').val() === 'yes'
      ? `يوجد مصعد • الحجم: ${pickupSizeText}`
      : 'لا يوجد مصعد'
  );
  $('#preview-pickup-building').text($('#pickup-building-name').val() || '-');
  $('#preview-pickup-notes').text($('#pickup-notes').val() || '-');

  // Update destination details
  $('#preview-dest-city').text(destinationLocation.city || 'الرياض');
  $('#preview-dest-address').text(destinationLocation.address || '-');
  $('#preview-dest-floor').text(`طابق ${$('#destination-floor').val() || '-'}`);
  $('#preview-dest-notes').text($('#destination-notes').val() || '-');
  const destElevatorSize = $('#destination-elevator-size').val();
  const destSizeText = destElevatorSize === 'small' ? 'صغير' :
    destElevatorSize === 'medium' ? 'متوسط' :
      destElevatorSize === 'large' ? 'كبير' : '-';
  $('#preview-dest-elevator').text(
    $('#destination-elevator').val() === 'yes'
      ? `يوجد مصعد • الحجم: ${destSizeText}`
      : 'لا يوجد مصعد'
  );
  $('#preview-dest-building').text($('#destination-building-name').val() || '-');

  // Update services
  const servicesList = [];
  if ($('#service-packing').val() === 'yes') servicesList.push('تغليف محكم');
  if ($('#service-insurance').val() === 'yes') servicesList.push('تأمين ضد الفقد والكسر');
  if ($('#service-disassembly').val() === 'yes' && disassemblyItems.length > 0) {
    const items = disassemblyItems.map((item) => `${item.quantity} ${item.type}`).join(' - ');
    servicesList.push(`فك وتركيب - ${items}`);
  }
  $('#preview-services-list').html(servicesList.join('<br>') || '-');

  // Initialize route map
  setTimeout(() => {
    initRouteMap();
  }, 300);
}

async function initRouteMap() {
  if (routeMap) {
    routeMap.remove();
  }

  const centerLat = (pickupLocation.lat + destinationLocation.lat) / 2;
  const centerLng = (pickupLocation.lng + destinationLocation.lng) / 2;

  routeMap = L.map('route-map').setView([centerLat, centerLng], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(routeMap);

  // Add pickup marker (teal)
  const pickupIcon = L.divIcon({
    html: '<div style="background-color: #00B8A9; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">A</div>',
    className: '',
    iconSize: [30, 30],
  });

  L.marker([pickupLocation.lat, pickupLocation.lng], { icon: pickupIcon })
    .addTo(routeMap)
    .bindPopup('موقع الاستلام');

  // Add destination marker (red)
  const destIcon = L.divIcon({
    html: '<div style="background-color: #FF6B6B; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">B</div>',
    className: '',
    iconSize: [30, 30],
  });

  L.marker([destinationLocation.lat, destinationLocation.lng], { icon: destIcon })
    .addTo(routeMap)
    .bindPopup('موقع التسليم');

  // Get actual route from OSRM routing API
  try {
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${pickupLocation.lng},${pickupLocation.lat};${destinationLocation.lng},${destinationLocation.lat}?overview=full&geometries=geojson`
    );

    if (response.ok) {
      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0];
        const coordinates = route.geometry.coordinates;

        // Convert coordinates from [lng, lat] to [lat, lng] for Leaflet
        const latlngs = coordinates.map((coord) => [coord[1], coord[0]]);

        // Draw the route
        L.polyline(latlngs, {
          color: '#00B8A9',
          weight: 4,
          opacity: 0.7,
        }).addTo(routeMap);

        // Calculate distance and duration
        const distanceKm = (route.distance / 1000).toFixed(1);
        const durationMin = Math.round(route.duration / 60);

        // Update distance text
        $('.text-center.mt-3').text(
          `المسافة التقريبية: ${distanceKm} كم • الوقت المتوقع: ${durationMin} دقيقة`
        );

        // Fit bounds to show the entire route
        const bounds = L.latLngBounds(latlngs);
        routeMap.fitBounds(bounds, { padding: [50, 50] });
      } else {
        // Fallback to straight line if routing fails
        drawStraightLine();
      }
    } else {
      // Fallback to straight line if API fails
      drawStraightLine();
    }
  } catch (error) {
    console.error('Routing error:', error);
    // Fallback to straight line
    drawStraightLine();
  }

  function drawStraightLine() {
    const latlngs = [
      [pickupLocation.lat, pickupLocation.lng],
      [destinationLocation.lat, destinationLocation.lng],
    ];
    L.polyline(latlngs, { color: '#00B8A9', weight: 4, opacity: 0.7 }).addTo(routeMap);

    const bounds = L.latLngBounds(latlngs);
    routeMap.fitBounds(bounds, { padding: [50, 50] });
  }
}

function submitRequest() {
  // Show success page
  $('.step-content').addClass('hidden');
  $('#success-page').removeClass('hidden');
  $('#back-btn').hide();
  $('#progress-bar').css('width', '100%');

  showNotification('تم إرسال طلبك بنجاح', 'success');
}

// Navbar Functions
function toggleMobileMenu() {
  $('#mobile-menu-sidebar').toggleClass('hidden');
}

function toggleUserMenu() {
  $('#user-menu-dropdown').toggleClass('hidden');
}

function showModal(modalId) {
  $('#' + modalId)
    .removeClass('hidden')
    .addClass('flex');
}

function hideModal(modalId) {
  $('#' + modalId)
    .removeClass('flex')
    .addClass('hidden');
}

// Function to update button direction based on language
function updateButtonDirection() {
  const currentLang = localStorage.getItem('locale') || 'ar';
  const buttonContainers = document.querySelectorAll('.action-buttons');

  buttonContainers.forEach(container => {
    if (currentLang === 'ar') {
      container.classList.add('flex-row-reverse');
    } else {
      container.classList.remove('flex-row-reverse');
    }
  });
}

// Make it available globally so language switcher can call it
window.updateButtonDirection = updateButtonDirection;

// Initialize on DOM ready
$(document).ready(function () {
  // Initialize maps
  initMaps();

  // Update button direction based on language
  updateButtonDirection();

  // Search handlers
  $('#pickup-search').on('input', function () {
    searchLocation($(this).val(), 'pickup');
  });

  $('#destination-search').on('input', function () {
    searchLocation($(this).val(), 'destination');
  });

  // Services select handler
  $('#services-select').on('change', function () {
    const value = $(this).val();
    $(this).val(''); // Reset dropdown

    if (!value || selectedServices.includes(value)) {
      if (selectedServices.includes(value)) {
        showNotification('هذه الخدمة مضافة بالفعل', 'warning');
      }
      return;
    }

    selectedServices.push(value);
    renderServices();
  });

  // Handle form submissions
  $('#pickup-details-form').on('submit', function (e) {
    e.preventDefault();
    nextStep();
  });

  $('#destination-details-form').on('submit', function (e) {
    e.preventDefault();
    nextStep();
  });

  $('#furniture-form').on('submit', function (e) {
    e.preventDefault();
    nextStep();
  });

  $('#services-form').on('submit', function (e) {
    e.preventDefault();
    // Services are optional, so no validation
    nextStep();
  });

  $('#datetime-form').on('submit', function (e) {
    e.preventDefault();

    // Validate date is selected
    if (!selectedDate) {
      showNotification('يرجى اختيار تاريخ النقل', 'warning');
      return;
    }

    nextStep();
  });

  updateProgress();

  // Initialize calendar and AM/PM toggle
  toggleAMPM('AM');
  renderCalendar();

  // Override nextStep to add preview update
  const originalNextStep = nextStep;
  window.nextStep = function () {
    // Update preview when moving from step 7 to step 8
    if (currentStep === 7) {
      updatePreview();
    }
    originalNextStep();
  };

  // Bind elevator size visibility handlers (in case inline onchange not present)
  $('#pickup-elevator').on('change', function () { toggleElevatorSize('pickup', this.value); });
  $('#destination-elevator').on('change', function () { toggleElevatorSize('destination', this.value); });

  // Initialize visibility on load
  toggleElevatorSize('pickup', $('#pickup-elevator').val());
  toggleElevatorSize('destination', $('#destination-elevator').val());

  // Handle Furniture details preview rendering on load
  $('#preview-furniture-count').text($('#rooms-count').val() || '-');
  $('#preview-furniture-items').text(
    furnitureItems.length > 0
      ? furnitureItems.map(item => `${item.quantity} ${furnitureLabels[item.type]}`).join(' - ')
      : '-'
  );

});

