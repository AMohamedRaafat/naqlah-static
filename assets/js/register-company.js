// Register Company Page JavaScript

$(document).ready(function () {
  let logoFile = null;
  let registrationFile = null;
  let selectedServices = []; // Array to store selected services
  let selectedAreas = []; // Array to store Operational Areas

  // Service labels for translation
  const serviceLabels = {
    disassembly: 'تفكيك وتركيب',
    packing: 'تغليف محكم',
    insurance: 'تأمين ضد الفقد والكسر',
    cleaning: 'تنظيف بعد النقل',
    moving: 'نقل من بين مدن',
    tracking: 'تتبع مباشر',
  };
  // Areas labels for translation
  const areasLabels = {
    makkah: 'مكة',
    jeddah: 'جدة',
    riyadh: 'الرياض',
  };

  // Function to render selected services as chips
  function renderServices() {
    const container = $('#selected-services');
    container.empty(); // Clear existing chips

    selectedServices.forEach((service) => {
      const chip = $(`
        <div class="flex items-center gap-2 px-3 py-2 bg-white border border-[#EDEDED] rounded-lg text-sm">
        <button
        type="button"
        onclick="removeService('${service}')"
        class="text-[#00B8A9] hover:text-red-500 transition-colors"
        >
        <i class="fas fa-times"></i>
        </button>
        <span class="text-[#353535]">${serviceLabels[service]}</span>
        </div>
      `);
      container.append(chip);
    });
  }
  // Function to render selected Areas as chips
  function renderAreas() {
    const container = $('#selected-areas');
    container.empty(); // Clear existing chips

    selectedAreas.forEach((area) => {
      const chip = $(`
        <div class="flex items-center gap-2 px-3 py-2 bg-white border border-[#EDEDED] rounded-lg text-sm">
        <button
        type="button"
        onclick="removeArea('${area}')"
        class="text-[#00B8A9] hover:text-red-500 transition-colors"
        >
        <i class="fas fa-times"></i>
        </button>
        <span class="text-[#353535]">${areasLabels[area]}</span>
        </div>
      `);
      container.append(chip);
    });
  }

  // Function to remove service from array
  window.removeService = function (service) {
    selectedServices = selectedServices.filter((s) => s !== service);
    renderServices();

    // Clear error if services are now selected
    if (selectedServices.length > 0) {
      $('#services-error').addClass('hidden');
    }
  };
  // Function to remove Area from array
  window.removeArea = function (area) {
    selectedAreas = selectedAreas.filter((a) => a !== area);
    renderAreas();

    // Clear error if services are now selected
    if (selectedAreas.length > 0) {
      $('#areas-error').addClass('hidden');
    }
  };

  // Handle service selection from dropdown
  $('#services-select').on('change', function () {
    const value = $(this).val();

    // Reset dropdown to placeholder
    $(this).val('');

    // If no value or already selected, do nothing
    if (!value || selectedServices.includes(value)) {
      if (selectedServices.includes(value)) {
        showNotification('هذه الخدمة مضافة بالفعل', 'warning');
      }
      return;
    }

    // Add to array
    selectedServices.push(value);

    // Clear error
    $('#services-error').addClass('hidden');

    // Render chips
    renderServices();
  })
  // Handle Areas selection from dropdown
  $('#opreational-areas-select').on('change', function () {
    const value = $(this).val();

    // Reset dropdown to placeholder
    $(this).val('');

    // If no value or already selected, do nothing
    if (!value || selectedAreas.includes(value)) {
      if (selectedAreas.includes(value)) {
        showNotification('هذه الخدمة مضافة بالفعل', 'warning');
      }
      return;
    }

    // Add to array
    selectedAreas.push(value);

    // Clear error
    $('#areas-error').addClass('hidden');

    // Render chips
    renderAreas();
  });

  // Logo upload
  $('#logo-upload').on('change', function (e) {
    const file = e.target.files[0];
    if (file) {
      logoFile = file;
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#logo-preview').attr('src', e.target.result).removeClass('hidden');
        $('#logo-icon').addClass('hidden');
      };
      reader.readAsDataURL(file);
    }
  });

  // File upload
  $('#file-upload').on('change', function (e) {
    const file = e.target.files[0];
    if (file) {
      registrationFile = file;
      $('#file-attached').removeClass('hidden');
      $('#fileName').text(file.name);
    }
  });

  $('#remove-file').on('click', function () {
    registrationFile = null;
    $('#file-upload').val('');
    $('#file-attached').addClass('hidden');
  });

  // Form submission
  $('#register-company-form').on('submit', function (e) {
    e.preventDefault();

    // Clear previous errors
    $('.text-red-500').addClass('hidden');
    $('.border-red-500').removeClass('border-red-500');

    // Get form data
    const formData = {
      companyName: $('#companyName').val(),
      city: $('#city').val(),
      email: $('#email').val(),
      password: $('#password').val(),
      confirmPassword: $('#confirmPassword').val(),
      phoneNumber: $('#phoneNumber').val(),
      services: selectedServices,
      aboutCompany: $('#aboutCompany').val(),
      agreeTerms: $('#agreeTerms').is(':checked'),
    };

    // Validate
    let hasError = false;

    if (!formData.companyName) {
      $('#companyName-error').text('اسم الشركة مطلوب').removeClass('hidden');
      $('#companyName').addClass('border-red-500');
      hasError = true;
    }

    if (!formData.city) {
      $('#city-error').text('المدينة مطلوبة').removeClass('hidden');
      $('#city').addClass('border-red-500');
      hasError = true;
    }

    if (!validateEmail(formData.email)) {
      $('#email-error').text('البريد الإلكتروني غير صحيح').removeClass('hidden');
      $('#email').addClass('border-red-500');
      hasError = true;
    }

    if (!validatePassword(formData.password)) {
      $('#password-error')
        .text('كلمة المرور يجب أن تكون 8 أحرف على الأقل')
        .removeClass('hidden');
      $('#password').addClass('border-red-500');
      hasError = true;
    }

    if (formData.password !== formData.confirmPassword) {
      $('#confirmPassword-error').text('كلمة المرور غير متطابقة').removeClass('hidden');
      $('#confirmPassword').addClass('border-red-500');
      hasError = true;
    }

    if (!validatePhone(formData.phoneNumber)) {
      $('#phoneNumber-error').text('رقم الهاتف غير صحيح').removeClass('hidden');
      $('#phoneNumber').addClass('border-red-500');
      hasError = true;
    }

    if (formData.services.length === 0) {
      $('#services-error').text('يجب اختيار خدمة واحدة على الأقل').removeClass('hidden');
      hasError = true;
    }

    if (!formData.aboutCompany) {
      $('#aboutCompany-error').text('نبذة عن الشركة مطلوبة').removeClass('hidden');
      $('#aboutCompany').addClass('border-red-500');
      hasError = true;
    }

    if (!formData.agreeTerms) {
      $('#agreeTerms-error').text('يجب الموافقة على الشروط').removeClass('hidden');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Submit form
    console.log('Form submitted:', formData);
    showNotification('تم إرسال طلبك بنجاح', 'success');

    // Redirect after 2 seconds
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 2000);
  });
});

