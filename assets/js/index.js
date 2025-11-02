// Index Page JavaScript

// Initialize carousel
$(document).ready(function () {
    initCarousel('partners-carousel', { autoplay: true, autoplayDelay: 3000 });

    // Set current year
    $('#current-year').text(new Date().getFullYear());

    // Contact form submission
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        const formData = {
            name: $(this).find('[name="name"]').val(),
            email: $(this).find('[name="email"]').val(),
            messageTitle: $(this).find('[name="messageTitle"]').val(),
            message: $(this).find('[name="message"]').val(),
        };

        console.log('Contact form submitted:', formData);

        // Show success message
        $('#contact-success-message').removeClass('hidden');
        this.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
            $('#contact-success-message').addClass('hidden');
        }, 3000);
    });

    // Close modals when clicking on backdrop
    $('.modal-backdrop').on('click', function (e) {
        if (e.target === this) {
            $(this).removeClass('flex').addClass('hidden');
            $('body').css('overflow', 'auto');
        }
    });
});

// Tab switching for login modal
let currentLoginTab = 'customer';
let currentPhone = '';

function switchLoginTab(tab) {
    currentLoginTab = tab;

    if (tab === 'customer') {
        $('#customer-tab')
            .removeClass('border-transparent text-gray-400')
            .addClass('border-[#00B8A9] text-[#00B8A9]');
        $('#company-tab')
            .removeClass('border-[#00B8A9] text-[#00B8A9]')
            .addClass('border-transparent text-gray-400');
        $('#customer-tab-content').removeClass('hidden');
        $('#company-tab-content').addClass('hidden');
    } else {
        $('#company-tab')
            .removeClass('border-transparent text-gray-400')
            .addClass('border-[#00B8A9] text-[#00B8A9]');
        $('#customer-tab')
            .removeClass('border-[#00B8A9] text-[#00B8A9]')
            .addClass('border-transparent text-gray-400');
        $('#company-tab-content').removeClass('hidden');
        $('#customer-tab-content').addClass('hidden');
    }
}

// Toggle password visibility
function togglePassword(inputId) {
    const input = $('#' + inputId);
    const icon = input.siblings('button').find('i');

    if (input.attr('type') === 'password') {
        input.attr('type', 'text');
        icon.removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
        input.attr('type', 'password');
        icon.removeClass('fa-eye-slash').addClass('fa-eye');
    }
}

// Handle customer login (phone -> OTP)
function handleCustomerLogin(e) {
    e.preventDefault();
    const phone = $('#customer-phone').val();

    // Validate phone
    if (!phone || phone.length !== 9) {
        $('#customer-phone-error').text(t('requestMove.phoneIncomplete')).removeClass('hidden');
        return;
    }

    if (!phone.startsWith('5')) {
        $('#customer-phone-error').text(t('requestMove.phoneInvalidStart')).removeClass('hidden');
        return;
    }

    // Clear error
    $('#customer-phone-error').addClass('hidden');

    // Store phone for OTP
    currentPhone = phone;

    // Close login modal and open OTP modal
    hideModal('login-modal');
    $('#otp-phone-display').text(' +966' + phone);
    showModal('otp-modal');

    // Start countdown
    startOTPCountdown();

    // Focus first OTP input
    setTimeout(() => {
        $('.otp-input').first().focus();
    }, 100);

    console.log('OTP sent to:', '+966' + phone);
}

// Handle company login (email + password)
function handleCompanyLogin(e) {
    e.preventDefault();
    const email = $('#company-email').val();
    const password = $('#company-password').val();
    let isValid = true;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        $('#company-email-error').text('البريد الإلكتروني غير صحيح').removeClass('hidden');
        isValid = false;
    } else {
        $('#company-email-error').addClass('hidden');
    }

    // Validate password
    if (!password || password.length < 6) {
        $('#company-password-error')
            .text('كلمة المرور يجب أن تكون 6 أحرف على الأقل')
            .removeClass('hidden');
        isValid = false;
    } else {
        $('#company-password-error').addClass('hidden');
    }

    if (!isValid) return;

    // Simulate company login
    const userData = {
        email: email,
        name: 'شركة النقل',
        isCompany: true,
    };

    login(userData, true);
    hideModal('login-modal');
    showNotification(t('common.welcome') + ', ' + userData.name, 'success');

    // Redirect to dashboard
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1000);
}

// OTP Input auto-focus
$(document).ready(function () {
    $('.otp-input').on('input', function () {
        const $this = $(this);
        const value = $this.val();

        // Only allow numbers
        if (!/^[0-9]$/.test(value)) {
            $this.val('');
            return;
        }

        // Move to next input
        if (value.length === 1) {
            $this.next('.otp-input').focus();
        }
    });

    $('.otp-input').on('keydown', function (e) {
        const $this = $(this);

        // Backspace: move to previous input
        if (e.key === 'Backspace' && !$this.val()) {
            $this.prev('.otp-input').focus();
        }

        // Delete: clear and stay
        if (e.key === 'Delete') {
            $this.val('');
        }

        // Arrow keys navigation
        if (e.key === 'ArrowLeft') {
            $this.prev('.otp-input').focus();
        }
        if (e.key === 'ArrowRight') {
            $this.next('.otp-input').focus();
        }
    });

    // Paste OTP
    $('.otp-input')
        .first()
        .on('paste', function (e) {
            e.preventDefault();
            const pastedData = e.originalEvent.clipboardData.getData('text');
            const digits = pastedData.replace(/\D/g, '').slice(0, 6);

            $('.otp-input').each(function (index) {
                $(this).val(digits[index] || '');
            });

            if (digits.length === 6) {
                $('.otp-input').last().focus();
            }
        });
});

// OTP Countdown Timer
let otpCountdownInterval = null;
let requestMoveOTPCountdownInterval = null;
let otpCountdownSeconds = 30;
let requestMoveOTPCountdownSeconds = 30;

function startOTPCountdown() {
    // Clear any existing countdown
    if (otpCountdownInterval) {
        clearInterval(otpCountdownInterval);
    }

    otpCountdownSeconds = 30;
    updateOTPCountdown();

    otpCountdownInterval = setInterval(function () {
        otpCountdownSeconds--;
        updateOTPCountdown();

        if (otpCountdownSeconds <= 0) {
            clearInterval(otpCountdownInterval);
            otpCountdownInterval = null;
            $('#estimated-time-container').addClass('hidden');
            $('#resend-otp-container').removeClass('hidden');
        }
    }, 1000);
}

function updateOTPCountdown() {
    const minutes = Math.floor(otpCountdownSeconds / 60);
    const seconds = otpCountdownSeconds % 60;

    let timeDisplay = '';
    if (minutes > 0) {
        timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    } else {
        timeDisplay = `${seconds} ثانية`;
    }

    $('#estimated-time').text(timeDisplay);
}

function startRequestMoveOTPCountdown() {
    // Clear any existing countdown
    if (requestMoveOTPCountdownInterval) {
        clearInterval(requestMoveOTPCountdownInterval);
    }

    requestMoveOTPCountdownSeconds = 30;
    updateRequestMoveOTPCountdown();

    requestMoveOTPCountdownInterval = setInterval(function () {
        requestMoveOTPCountdownSeconds--;
        updateRequestMoveOTPCountdown();

        if (requestMoveOTPCountdownSeconds <= 0) {
            clearInterval(requestMoveOTPCountdownInterval);
            requestMoveOTPCountdownInterval = null;
            $('#request-move-estimated-time-container').addClass('hidden');
            $('#request-move-resend-otp-container').removeClass('hidden');
        }
    }, 1000);
}

function updateRequestMoveOTPCountdown() {
    const minutes = Math.floor(requestMoveOTPCountdownSeconds / 60);
    const seconds = requestMoveOTPCountdownSeconds % 60;

    let timeDisplay = '';
    if (minutes > 0) {
        timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    } else {
        timeDisplay = `${seconds} ثانية`;
    }

    $('#request-move-estimated-time').text(timeDisplay);
}

// Resend OTP
function resendOTP() {
    console.log('Resending OTP to:', '+966' + currentPhone);
    showNotification('تم إعادة إرسال رمز التحقق', 'success');

    // Clear OTP inputs
    $('.otp-input').val('');
    $('.otp-input').first().focus();
    $('#otp-error').addClass('hidden');

    // Reset countdown
    $('#estimated-time-container').removeClass('hidden');
    $('#resend-otp-container').addClass('hidden');
    startOTPCountdown();
}

// Handle OTP verification
function handleOTPVerification(e) {
    e.preventDefault();

    // Get OTP code
    let otp = '';
    $('.otp-input').each(function () {
        otp += $(this).val();
    });

    // Validate OTP length
    if (otp.length !== 6) {
        $('#otp-error').text(t('requestMove.otpIncomplete')).removeClass('hidden');
        $('.otp-input').addClass('border-red-500 bg-red-50');
        return;
    }

    // Clear error styling
    $('#otp-error').addClass('hidden');
    $('.otp-input').removeClass('border-red-500 bg-red-50');

    // Simulate OTP verification (accept 123456 or 000000)
    if (otp === '123456' || otp === '000000') {
        // OTP correct
        const userData = {
            phone: '+966' + currentPhone,
            name: 'محمد أحمد',
            isCompany: false,
        };

        login(userData, false);
        hideModal('otp-modal');
        showNotification(t('common.welcome') + ', ' + userData.name, 'success');

        // Clear OTP inputs
        $('.otp-input').val('');

        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        // OTP incorrect
        $('#otp-error').text(t('requestMove.otpInvalid')).removeClass('hidden');
        $('.otp-input').addClass('border-red-500 bg-red-50');
    }
}

// Handle request move form - Open OTP modal
function handleRequestMove(e) {
    e.preventDefault();
    const phone = $('#request-move-phone').val();

    // Validate phone
    if (!phone || phone.length !== 9) {
        $('#request-move-phone-error')
            .text(t('requestMove.phoneIncomplete'))
            .removeClass('hidden');
        return;
    }

    if (!phone.startsWith('5')) {
        $('#request-move-phone-error')
            .text(t('requestMove.phoneInvalidStart'))
            .removeClass('hidden');
        return;
    }

    // Clear error
    $('#request-move-phone-error').addClass('hidden');

    // Store phone for OTP
    currentPhone = phone;

    // Close request-move modal and open OTP modal
    hideModal('request-move-modal');
    $('#request-move-otp-phone-display').text(' +966' + phone);
    showModal('request-move-otp-modal');

    // Start countdown
    startRequestMoveOTPCountdown();

    // Focus first OTP input
    setTimeout(() => {
        $('#request-move-otp-modal .otp-input').first().focus();
    }, 100);

    console.log('OTP sent to:', '+966' + phone);
}

// Handle request-move OTP verification
function handleRequestMoveOTP(e) {
    e.preventDefault();

    // Get OTP code
    let otp = '';
    $('#request-move-otp-modal .otp-input').each(function () {
        otp += $(this).val();
    });

    // Validate OTP length
    if (otp.length !== 6) {
        $('#request-move-otp-error').text(t('requestMove.otpIncomplete')).removeClass('hidden');
        $('#request-move-otp-modal .otp-input').addClass('border-red-500 bg-red-50');
        return;
    }

    // Clear error styling
    $('#request-move-otp-error').addClass('hidden');
    $('#request-move-otp-modal .otp-input').removeClass('border-red-500 bg-red-50');

    // Simulate OTP verification (accept 123456 or 000000)
    if (otp === '123456' || otp === '000000') {
        // OTP correct
        const saveData = $('#request-move-save-data').is(':checked');

        // Save user data if checkbox was checked
        if (saveData) {
            const userData = {
                phone: '+966' + currentPhone,
                name: 'محمد أحمد',
                isCompany: false,
            };
            login(userData, false);
        }

        hideModal('request-move-otp-modal');
        showNotification('تم التحقق بنجاح', 'success');

        // Clear OTP inputs
        $('#request-move-otp-modal .otp-input').val('');

        // Redirect to request-move page
        setTimeout(() => {
            window.location.href = 'request-move.html';
        }, 500);
    } else {
        // OTP incorrect
        $('#request-move-otp-error').text(t('requestMove.otpInvalid')).removeClass('hidden');
        $('#request-move-otp-modal .otp-input').addClass('border-red-500 bg-red-50');
    }
}

// Resend OTP for request-move
function resendRequestMoveOTP() {
    console.log('Resending OTP to:', '+966' + currentPhone);
    showNotification('تم إعادة إرسال رمز التحقق', 'success');

    // Clear OTP inputs
    $('#request-move-otp-modal .otp-input').val('');
    $('#request-move-otp-modal .otp-input').first().focus();
    $('#request-move-otp-error').addClass('hidden');

    // Reset countdown
    $('#request-move-estimated-time-container').removeClass('hidden');
    $('#request-move-resend-otp-container').addClass('hidden');
    startRequestMoveOTPCountdown();
}

