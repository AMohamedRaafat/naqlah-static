// Dashboard Page JavaScript

$(document).ready(function () {
  // Initialize the user menu toggle
  window.toggleUserMenu = function () {
    $('#user-menu-dropdown').toggleClass('hidden');
  };

  // Close user menu when clicking outside
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#user-menu-button, #user-menu-dropdown').length) {
      $('#user-menu-dropdown').addClass('hidden');
    }
  });

  // Toggle between empty state and orders state
  window.toggleDashboardState = function (hasOrders) {
    if (hasOrders) {
      $('#empty-state').addClass('hidden');
      $('#orders-state').removeClass('hidden');
    } else {
      $('#empty-state').removeClass('hidden');
      $('#orders-state').addClass('hidden');
    }
  };

  // Toggle order details collapsible
  window.toggleOrderDetails = function () {
    const isHidden = $('#order-details').hasClass('hidden');
    $('#order-details').toggleClass('hidden');
    $('#details-icon').toggleClass('fa-chevron-down fa-chevron-up');

    // Initialize map when opened for the first time
    if (isHidden && !window.orderDetailsMapInitialized) {
      initOrderDetailsMap();
    }
  };

  // Initialize order details map
  function initOrderDetailsMap() {
    // Check if Leaflet is available
    if (typeof L === 'undefined') {
      console.log('Leaflet not loaded, map will not be displayed');
      return;
    }

    try {
      // Sample coordinates (Riyadh area)
      const location1 = [24.7136, 46.6753]; // Al-Malqa
      const location2 = [24.6877, 46.7219]; // Al-Olaya

      const map = L.map('order-details-map', {
        center: [24.7, 46.7],
        zoom: 12,
        zoomControl: false
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
      }).addTo(map);

      // Custom marker icon using the SVG
      const customIcon = L.icon({
        iconUrl: 'assets/steps/map-marker.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      });

      // Add markers
      L.marker(location1, { icon: customIcon }).addTo(map);
      L.marker(location2, { icon: customIcon }).addTo(map);

      // Get route from OSRM
      const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${location1[1]},${location1[0]};${location2[1]},${location2[0]}?overview=full&geometries=geojson`;

      fetch(osrmUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
            const route = data.routes[0];
            const coordinates = route.geometry.coordinates;

            // Convert coordinates from [lng, lat] to [lat, lng] for Leaflet
            const latlngs = coordinates.map((coord) => [coord[1], coord[0]]);

            // Draw the actual route
            L.polyline(latlngs, {
              color: '#00B8A9',
              weight: 4,
              opacity: 0.8
            }).addTo(map);

            // Fit bounds to show the route
            map.fitBounds(latlngs, { padding: [30, 30] });
          } else {
            // Fallback to straight line if route not found
            L.polyline([location1, location2], {
              color: '#00B8A9',
              weight: 4,
              opacity: 0.8
            }).addTo(map);

            map.fitBounds([location1, location2], { padding: [30, 30] });
          }
        })
        .catch((error) => {
          console.log('Error fetching route:', error);
          // Fallback to straight line
          L.polyline([location1, location2], {
            color: '#00B8A9',
            weight: 4,
            opacity: 0.8
          }).addTo(map);

          map.fitBounds([location1, location2], { padding: [30, 30] });
        });

      window.orderDetailsMapInitialized = true;
    } catch (error) {
      console.log('Error initializing map:', error);
    }
  }

  // Toggle company offers collapsible
  window.toggleCompanyOffers = function () {
    $('#company-offers').toggleClass('hidden');
    $('#offers-icon').toggleClass('fa-chevron-up fa-chevron-down');
  };

  // After accepting a company offer, navigate to payment page
  window.confirmAccept = function () {
    window.location.href = 'payment.html';
  };

  // Ongoing details collapsible and map init
  window.toggleOngoingDetails = function (id) {
    const panel = $(`#ongoing-details-${id}`);
    const icon = $(`#ongoing-details-icon-${id}`);
    const isHidden = panel.hasClass('hidden');
    panel.toggleClass('hidden');
    icon.toggleClass('fa-chevron-down fa-chevron-up');
  };

  // Toggle company description
  window.toggleCompanyDescription = function (companyId) {
    const description = $(`#company-description-${companyId}`);
    const button = $(`#read-more-btn-${companyId} span`);
    const currentLang = localStorage.getItem('locale') || 'ar';

    if (description.hasClass('hidden')) {
      description.removeClass('hidden');
      button.text(currentLang === 'ar' ? 'إخفاء' : 'Hide');
    } else {
      description.addClass('hidden');
      button.text(currentLang === 'ar' ? 'إقرأ المزيد' : 'Read More');
    }
  };

  // Check if user has orders (This would come from API in real implementation)
  // For demo purposes, you can manually test:
  // toggleDashboardState(false); // Show empty state
  // toggleDashboardState(true);  // Show orders state

  // Initialize with empty state by default
  const hasOrders = true; // Change to false to test empty state
  toggleDashboardState(hasOrders);

  // Initialize ongoing map if element exists
  if ($('#ongoing-map-1').length) {
    try {
      if (typeof L !== 'undefined') {
        const location1 = [24.7136, 46.6753];
        const location2 = [24.6877, 46.7219];
        const map = L.map('ongoing-map-1', { center: [24.7, 46.7], zoom: 12, zoomControl: false });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '' }).addTo(map);
        const customIcon = L.icon({ iconUrl: 'assets/steps/map-marker.svg', iconSize: [36, 36], iconAnchor: [18, 36] });
        L.marker(location1, { icon: customIcon }).addTo(map);
        L.marker(location2, { icon: customIcon }).addTo(map);
        const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${location1[1]},${location1[0]};${location2[1]},${location2[0]}?overview=full&geometries=geojson`;
        fetch(osrmUrl)
          .then((r) => r.json())
          .then((data) => {
            if (data.code === 'Ok' && data.routes && data.routes.length) {
              const latlngs = data.routes[0].geometry.coordinates.map((c) => [c[1], c[0]]);
              L.polyline(latlngs, { color: '#00B8A9', weight: 4, opacity: 0.8 }).addTo(map);
              map.fitBounds(latlngs, { padding: [20, 20] });
            } else {
              L.polyline([location1, location2], { color: '#00B8A9', weight: 4, opacity: 0.8 }).addTo(map);
              map.fitBounds([location1, location2], { padding: [20, 20] });
            }
          })
          .catch(() => {
            L.polyline([location1, location2], { color: '#00B8A9', weight: 4, opacity: 0.8 }).addTo(map);
            map.fitBounds([location1, location2], { padding: [20, 20] });
          });
      }
    } catch (e) {
      console.log('Ongoing map init error', e);
    }
  }

  // Load user name from localStorage or API
  const userName = localStorage.getItem('userName') || 'منصور الفهماوي';
  $('#user-name').text(userName);

  // Update toggle button direction based on language
  function updateToggleButtonDirection() {
    const currentLang = localStorage.getItem('language') || 'ar';
    const orderDetailsToggle = $('#order-details-toggle');
    const companyOffersToggle = $('#company-offers-toggle');

    if (currentLang === 'ar') {
      orderDetailsToggle.addClass('flex-row-reverse');
      companyOffersToggle.addClass('flex-row-reverse');
    } else {
      orderDetailsToggle.removeClass('flex-row-reverse');
      companyOffersToggle.removeClass('flex-row-reverse');
    }
  }

  // Initialize button direction
  updateToggleButtonDirection();

  // Update on language change
  $(document).on('languageChanged', function () {
    updateToggleButtonDirection();
  });
});
