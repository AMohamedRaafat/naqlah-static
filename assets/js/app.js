// App core functionality
$(document).ready(function () {
  // Initialize locale
  window.currentLocale = localStorage.getItem('locale') || 'ar';

  // Set initial direction (skip reload on initial page load)
  setLanguage(window.currentLocale, true);

  // Initialize auth state
  window.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  window.isCompany = localStorage.getItem('isCompany') === 'true';
  window.userData = JSON.parse(localStorage.getItem('userData') || '{}');

  // Update UI based on auth state
  updateAuthUI();

  // Align modal close buttons based on language
  updateModalCloseAlignment(window.currentLocale);
  
  // Initialize phone validation for all phone inputs
  initPhoneValidation();
});

// Language switching
function setLanguage(locale, skipReload = false) {
  window.currentLocale = locale;
  localStorage.setItem('locale', locale);

  // Set HTML attributes
  $('html').attr('lang', locale);
  $('html').attr('dir', locale === 'ar' ? 'rtl' : 'ltr');

  // Update all translatable elements
  $('[data-i18n]').each(function () {
    const key = $(this).data('i18n');
    $(this).text(t(key));
  });

  // Update placeholders
  $('[data-i18n-placeholder]').each(function () {
    const key = $(this).data('i18n-placeholder');
    $(this).attr('placeholder', t(key));
  });

  // Update language switcher button
  $('#language-switcher-btn').text(locale === 'ar' ? 'English' : 'العربية');

  // Trigger language changed event
  $(document).trigger('languageChanged', [locale]);

  // Only reload if explicitly changing language (not on initial load)
  if (!skipReload) {
    location.reload();
  }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Auth functions
function login(userData, isCompany = false) {
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('isCompany', isCompany ? 'true' : 'false');
  localStorage.setItem('userData', JSON.stringify(userData));
  window.isLoggedIn = true;
  window.isCompany = isCompany;
  window.userData = userData;
  updateAuthUI();
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('isCompany');
  localStorage.removeItem('userData');
  window.isLoggedIn = false;
  window.isCompany = false;
  window.userData = {};
  updateAuthUI();
  window.location.href = '/';
}

function updateAuthUI() {
  if (window.isLoggedIn) {
    $('.auth-required').show();
    $('.auth-hidden').hide();
  } else {
    $('.auth-required').hide();
    $('.auth-hidden').show();
  }
}

// Form validation helpers
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  // Remove any non-numeric characters
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Saudi phone validation: 9 digits starting with 5
  const re = /^5\d{8}$/;
  return re.test(cleanPhone);
}

// Phone validation with error message
function validatePhoneWithError(phoneInput, errorElement) {
  const $input = $(phoneInput);
  const phone = $input.val() || phoneInput.value || '';
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Clear previous errors
  if (errorElement) {
    $(errorElement).addClass('hidden');
    $input.removeClass('border-red-500');
    $input.parent().removeClass('border-red-500');
  }
  
  // Check if empty
  if (!cleanPhone) {
    if (errorElement) {
      $(errorElement).text(t('requestMove.phoneIncomplete') || 'رقم الهاتف مطلوب').removeClass('hidden');
      $input.addClass('border-red-500');
    }
    return false;
  }
  
  // Check if not all numbers (this shouldn't happen due to input restriction, but check anyway)
  if (phone !== cleanPhone) {
    if (errorElement) {
      $(errorElement).text('يجب أن يحتوي رقم الهاتف على أرقام فقط').removeClass('hidden');
      $input.addClass('border-red-500');
    }
    return false;
  }
  
  // Check length
  if (cleanPhone.length !== 9) {
    if (errorElement) {
      $(errorElement).text(t('requestMove.phoneIncomplete') || 'رقم الهاتف يجب أن يكون 9 أرقام').removeClass('hidden');
      $input.addClass('border-red-500');
    }
    return false;
  }
  
  // Check if starts with 1 (invalid)
  if (cleanPhone.startsWith('1')) {
    if (errorElement) {
      $(errorElement).text('رقم الهاتف يجب ان يبدأ ب 5').removeClass('hidden');
      $input.addClass('border-red-500');
    }
    return false;
  }
  
  // Check if starts with 5
  if (!cleanPhone.startsWith('5')) {
    if (errorElement) {
      $(errorElement).text(t('requestMove.phoneInvalidStart') || 'رقم الهاتف السعودي يجب أن يبدأ بـ 5').removeClass('hidden');
      $input.addClass('border-red-500');
    }
    return false;
  }
  
  return true;
}

// Initialize phone input validation for all phone inputs
function initPhoneValidation() {
  // Find all phone inputs
  $('input[type="tel"]').each(function() {
    const $input = $(this);
    const inputId = $input.attr('id');
    
    // Skip readonly inputs
    if ($input.prop('readonly')) {
      return;
    }
    
    // Find or create error element
    let $errorElement = null;
    
    // Try to find by ID pattern first
    const errorId = inputId ? inputId + '-error' : null;
    if (errorId) {
      $errorElement = $('#' + errorId);
    }
    
    // If not found, try to find sibling error element
    if ($errorElement.length === 0) {
      // Check parent container for error element
      const $parent = $input.parent();
      $errorElement = $parent.siblings('.text-red-500, .text-red-600').first();
      
      // If still not found, check next sibling
      if ($errorElement.length === 0) {
        $errorElement = $parent.next('.text-red-500, .text-red-600').first();
      }
    }
    
    // If still no error element, create one after the parent container
    if ($errorElement.length === 0) {
      const $parent = $input.parent();
      // Check if parent is a flex container (for +966 prefix)
      if ($parent.hasClass('flex') || $parent.css('display') === 'flex') {
        $errorElement = $('<p class="text-red-500 text-sm mt-1 hidden"></p>');
        $parent.after($errorElement);
      } else {
        $errorElement = $('<p class="text-red-500 text-sm mt-1 hidden"></p>');
        $input.after($errorElement);
      }
    }
    
    // Restrict input to numbers only
    $input.on('input', function() {
      const value = $(this).val();
      const numbersOnly = value.replace(/\D/g, '');
      if (value !== numbersOnly) {
        $(this).val(numbersOnly);
      }
      
      // Limit to 9 digits
      if (numbersOnly.length > 9) {
        $(this).val(numbersOnly.substring(0, 9));
      }
      
      // Validate in real-time
      const cleanValue = $(this).val();
      if (cleanValue) {
        if (cleanValue.startsWith('1')) {
          if ($errorElement) {
            $errorElement.text('رقم الهاتف يجب ان يبدأ ب 5').removeClass('hidden');
          }
          $input.addClass('border-red-500');
        } else if (cleanValue.length === 9 && !cleanValue.startsWith('5')) {
          if ($errorElement) {
            $errorElement.text(t('requestMove.phoneInvalidStart') || 'رقم الهاتف السعودي يجب أن يبدأ بـ 5').removeClass('hidden');
          }
          $input.addClass('border-red-500');
        } else if (cleanValue.length === 9 && cleanValue.startsWith('5')) {
          // Valid phone number
          if ($errorElement) {
            $errorElement.addClass('hidden');
          }
          $input.removeClass('border-red-500');
        } else {
          // Clear error while typing (not complete yet)
          if ($errorElement) {
            $errorElement.addClass('hidden');
          }
          $input.removeClass('border-red-500');
        }
      } else {
        // Clear error on input
        if ($errorElement) {
          $errorElement.addClass('hidden');
        }
        $input.removeClass('border-red-500');
      }
      // Also remove from parent flex container if exists
      $input.parent().removeClass('border-red-500');
    });
    
    // Validate on blur
    $input.on('blur', function() {
      if ($(this).val()) {
        validatePhoneWithError($input, $errorElement);
      }
    });
    
    // Validate on form submit
    const $form = $input.closest('form');
    if ($form.length > 0) {
      // Remove any existing submit handler for this input to avoid duplicates
      $form.off('submit.phoneValidation-' + inputId);
      $form.on('submit.phoneValidation-' + inputId, function(e) {
        if (!validatePhoneWithError($input, $errorElement)) {
          e.preventDefault();
          return false;
        }
      });
    }
  });
}

function validatePassword(password) {
  // At least 8 characters
  return password.length >= 8;
}

// Show/hide modals
function showModal(modalId) {
  // Close all other modals first
  $('.modal-backdrop').removeClass('flex').addClass('hidden');

  // Open the requested modal
  $(`#${modalId}`).removeClass('hidden').addClass('flex');
  $('body').css('overflow', 'hidden');

  // Initialize language modal state
  if (modalId === 'language-modal') {
    const locale = localStorage.getItem('locale') || 'ar';
    window.selectedLocale = locale;
    updateLanguageChecks(locale);
  }
}

function hideModal(modalId) {
  $(`#${modalId}`).removeClass('flex').addClass('hidden');
  $('body').css('overflow', 'auto');
}

// Language modal helpers
function updateLanguageChecks(locale) {
  $('#lang-check-ar').toggleClass('hidden', locale !== 'ar');
  $('#lang-check-en').toggleClass('hidden', locale !== 'en');
}

window.selectLocale = function (locale) {
  window.selectedLocale = locale;
  updateLanguageChecks(locale);
};

window.saveSelectedLocale = function () {
  const locale = window.selectedLocale || 'ar';
  setLanguage(locale);
  hideModal('language-modal');
};

// Toggle password visibility
function togglePasswordVisibility(inputId) {
  const input = $(`#${inputId}`);
  const icon = input.siblings('.password-toggle').find('i');

  if (input.attr('type') === 'password') {
    input.attr('type', 'text');
    icon.removeClass('fa-eye').addClass('fa-eye-slash');
  } else {
    input.attr('type', 'password');
    icon.removeClass('fa-eye-slash').addClass('fa-eye');
  }
}

// API call helper
async function apiCall(endpoint, method = 'GET', data = null) {
  const baseURL = 'https://api.naqlah.com'; // Replace with actual API URL
  const token = localStorage.getItem('token');

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  if (data && method !== 'GET') {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${baseURL}${endpoint}`, options);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'API call failed');
    }

    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Show notification
function showNotification(message, type = 'success') {
  let bgColor = 'bg-green-500'; // success
  if (type === 'error') bgColor = 'bg-red-500';
  if (type === 'warning') bgColor = 'bg-yellow-500';

  const notification = $(`
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4 rounded-lg shadow-lg ${bgColor} text-white min-w-[300px] text-center">
      ${message}
    </div>
  `);

  $('body').append(notification);

  setTimeout(() => {
    notification.fadeOut(300, function () {
      $(this).remove();
    });
  }, 3000);
}

// Initialize carousel (for partners section)
function initCarousel(carouselId, options = {}) {
  const carousel = $(`#${carouselId}`);
  const items = carousel.find('.carousel-item');
  let currentIndex = 0;
  const totalItems = items.length;
  const autoplayDelay = options.autoplayDelay || 3000;

  function showSlide(index) {
    items.removeClass('active');
    items.eq(index).addClass('active');

    // Update pagination dots
    carousel.siblings('.carousel-pagination').find('.pagination-dot').removeClass('active');
    carousel.siblings('.carousel-pagination').find('.pagination-dot').eq(index).addClass('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
  }

  // Auto play
  if (options.autoplay !== false) {
    setInterval(nextSlide, autoplayDelay);
  }

  // Pagination dots click
  carousel.siblings('.carousel-pagination').find('.pagination-dot').on('click', function () {
    currentIndex = $(this).index();
    showSlide(currentIndex);
  });

  // Initialize
  showSlide(0);
}

// Mobile menu toggle
function toggleMobileMenu() {
  $('#mobile-menu-sidebar').toggleClass('hidden');
  $('body').toggleClass('overflow-hidden');
}

// User menu toggle
function toggleUserMenu() {
  $('#user-menu-dropdown').toggleClass('hidden');
}

// Close dropdowns when clicking outside
$(document).on('click', function (e) {
  if (!$(e.target).closest('#user-menu-button').length) {
    $('#user-menu-dropdown').addClass('hidden');
  }

  if (!$(e.target).closest('#mobile-menu-button').length) {
    if (!$(e.target).closest('#mobile-menu').length) {
      $('#mobile-menu').addClass('hidden');
    }
  }
});

// Align modal close button direction (X) for RTL/LTR
function updateModalCloseAlignment(locale) {
  const isArabic = locale === 'ar';
  $('.modal-close-dir')
    .removeClass('left-3 right-3')
    .addClass(isArabic ? 'right-3' : 'left-3');
}

// React to language change
$(document).on('languageChanged', function (_e, locale) {
  updateModalCloseAlignment(locale);
});

