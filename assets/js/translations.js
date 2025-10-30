// Translation system
const translations = {
    en: {
        "common": {
            "welcome": "Welcome",
            "home": "Home",
            "about": "About",
            "contact": "Contact",
            "language": "Language",
            "loading": "Loading...",
            "error": "An error occurred",
            "submit": "Submit",
            "cancel": "Cancel",
            "noCancel": "No, Cancel",
            "save": "Save",
            "delete": "Delete",
            "edit": "Edit",
            "search": "Search",
            "logoutTitle": "Logout",
            "logoutConfirmation": "Are you sure you want to logout from your account?",
            "confirmLogout": "Yes, Logout"
        },
        "hero": {
            "title": "Start your order now and enjoy",
            "titleLine2": "a stress-free moving experience",
            "subtitle": "Ready to move? Book an appointment, specify your needs, and let our professional team move your furniture safely and quickly",
            "certifiedBy": "Certified by",
            "ctaOrderMove": "Request a transfer",
            "ctaJoinPartner": "Join as a moving company"
        },
        "partners": {
            "title": "Success Partners"
        },
        "services": {
            "title": "Services",
            "liveTracking": "Live Tracking",
            "disassembly": "Disassembly & Assembly",
            "packing": "Secure Packing",
            "furnitureMoving": "Furniture Moving",
            "securityPacking": "Security Packing",
            "cleaning": "Cleaning"
        },
        "contact": {
            "title": "Contact Us",
            "description": "For corporate and special transportation requests, we are happy to hear from you. Please fill out the form below and we will contact you as soon as possible.",
            "fullName": "Full Name",
            "fullNamePlaceholder": "Full Name",
            "email": "Email",
            "emailPlaceholder": "Email",
            "messageTitle": "Message Title",
            "messageTitlePlaceholder": "Enter message title",
            "message": "Message",
            "messagePlaceholder": "Enter your message here...",
            "sendMessage": "Send Message",
            "ourAddress": "Our Address",
            "contactUs": "Contact Us"
        },
        "banner": {
            "description": "Now with Naqlah, moving your furniture is easier!",
            "buttonText": "Order a move"
        },
        "navigation": {
            "home": "Home",
            "dashboard": "Dashboard",
            "profile": "Profile",
            "logIn": "Login",
            "settings": "Settings",
            "partners": "Success Partners",
            "services": "Services",
            "logout": "Logout",
            "requestMove": "Request a Move"
        },
        "dashboard": {
            "welcome": "Welcome",
            "noOrders": "No order to track",
            "requestMove": "Request a move",
            "activeOrders": "Active Orders",
            "completedOrders": "Completed Orders",
            "recentOrders": "Recent Orders",
            "priceQuotes": "Price Quote Requests",
            "waitingForQuote": "Waiting to select price quote",
            "reviewOrderDetails": "Review Order Details",
            "companyOffers": "Moving Company Offers",
            "readMore": "Read More",
            "accept": "Accept",
            "showMore": "Show More",
            "personalData": "Personal Data",
            "dateAndTime": "Date and Time",
            "currentAddress": "Current Moving Address",
            "destinationAddress": "Destination Address",
            "additionalServices": "Additional Services",
            "furnitureDetails": "Furniture Details",
            "location": "Location"
        },
        "footer": {
            "companyName": "Naqlah",
            "siteLinks": "On the Site",
            "aboutUs": "About Us",
            "login": "Login",
            "otherLinks": "Other Links",
            "privacyPolicy": "Privacy Policy",
            "termsConditions": "Terms & Conditions",
            "faq": "FAQ",
            "copyright": "All rights reserved to Naqlah Company"
        },
        "payments": {
            "mastercard": "Mastercard",
            "mada": "Mada",
            "visa": "Visa Card",
            "applepay": "Apple Pay",
            "tamara": "Tamara",
            "successTitle": "Payment Successful",
            "successBody": "Please follow the moving journey with the company at the specified date and time.",
            "failureTitle": "Payment Failed",
            "failureBody": "An error occurred while attempting payment. Please verify your payment details or try again later.",
            "ok": "OK"
        },
        "paymentPage": {
            "title": "Payment",
            "breadcrumbDashboard": "Dashboard",
            "breadcrumbQuotes": "Moving Company Offers",
            "breadcrumbPayment": "Payment",
            "sectionTitle": "Payment",
            "transportPrice": "Transport price",
            "vat15": "VAT 15%",
            "total": "Total",
            "depositLabel": "20% deposit from transport fare",
            "depositNote": "The deposit will be deducted from the total amount and the remaining amount will be collected after the shipment is delivered",
            "paymentMethod": "Payment method",
            "payFullNow": "Pay full now",
            "payDepositOnly": "Pay deposit only",
            "back": "Back"
        },
        "orderDetails": {
            "title": "Order Details",
            "financialStatus": "Financial status",
            "depositPaid": "deposit paid of",
            "payRemaining": "Pay remaining amount",
            "company": "Moving company",
            "contactNumber": "Contact Number",
            "currentAddress": "Current address",
            "destinationAddress": "Destination address"
        },
        "login": {
            "title": "Login",
            "subtitle": "Please enter your phone number",
            "customerTab": "Service Seeker",
            "companyTab": "Moving Company",
            "noAccount": "Don't have an account?",
            "registerNow": "Register Now"
        },
        "requestMove": {
            "firstStepTitle": "Request a move",
            "secondStepTitle": "Login",
            "subtitle": "Please enter your phone number to start the move request",
            "phoneLabel": "Phone Number",
            "phonePlaceholder": "Enter phone number",
            "phoneIncomplete": "Phone number must be 9 digits",
            "phoneInvalidStart": "Saudi phone number must start with 5",
            "saveDataLabel": "Save my data to login again",
            "submitButton": "Login",
            "otpSubtitle": "Please enter the verification code sent to",
            "otpLabel": "Verification Code",
            "otpIncomplete": "Please enter the complete verification code",
            "otpInvalid": "The verification code entered is incorrect, try again",
            "didNotReceive": "Didn't receive the code?",
            "resendOtp": "Resend",
            "verifying": "Verifying..."
        },
        "registerCompany": {
            "pageTitle": "Join as Moving Company",
            "companyLogo": "Company Logo",
            "uploadLogo": "Upload Logo",
            "companyName": "Company Commercial Name",
            "commercialRegistration": "Commercial Registration",
            "attachFile": "Attach Commercial Registration",
            "fileAttached": "Commercial Registration File",
            "city": "City",
            "selectCity": "Select City",
            "email": "Email",
            "password": "Password",
            "confirmPassword": "Confirm Password",
            "phoneNumber": "Phone Number",
            "phoneNumberPlaceholder": "Enter phone number",
            "featuredServices": "Featured Services",
            "selectServices": "Select Featured Services",
            "aboutCompany": "Brief About Company",
            "aboutCompanyPlaceholder": "Write a brief about your company",
            "agreeTerms": "By creating an account, I agree to",
            "termsLink": "Terms of Use",
            "and": "and",
            "privacyLink": "Privacy Policy",
            "submitButton": "Submit Account Creation Request",
            "services": {
                "disassembly": "Disassembly & Assembly",
                "packing": "Secure Packing",
                "insurance": "Insurance Against Loss",
                "cleaning": "Cleaning After Moving",
                "moving": "Moving Between Cities"
            },
            "cities": {
                "jeddah": "Jeddah",
                "riyadh": "Riyadh",
                "dammam": "Dammam",
                "mecca": "Mecca",
                "medina": "Medina",
                "khobar": "Khobar",
                "tabuk": "Tabuk",
                "abha": "Abha"
            }
        }
    },
    ar: {
        "common": {
            "welcome": "مرحباً بك",
            "home": "الرئيسية",
            "about": "من نحن",
            "contact": "اتصل بنا",
            "language": "اللغة",
            "loading": "جاري التحميل...",
            "error": "حدث خطأ",
            "submit": "إرسال",
            "cancel": "إلغاء",
            "noCancel": "لا، إلغاء",
            "save": "حفظ",
            "delete": "حذف",
            "edit": "تعديل",
            "search": "بحث",
            "logoutTitle": "تسجيل الخروج",
            "logoutConfirmation": "هل أنت متأكد من أنك تريد تسجيل الخروج من حسابك؟",
            "confirmLogout": "نعم الخروج"
        },
        "hero": {
            "title": "ابدأ طلبك الآن واستمتع",
            "titleLine2": "بتجربة نقل خالية من التوتر!",
            "subtitle": "جاهز للانتقال؟ احجز موعد، حدد الاحتياجات ودلبة فريقنا المحترف بنقل أثاثك بأمانة كاملة وسرعة",
            "certifiedBy": "معتمد لدى",
            "ctaOrderMove": "اطلب نقلة",
            "ctaJoinPartner": "إنضم كشركة نقل"
        },
        "partners": {
            "title": "شركاء النجاح"
        },
        "services": {
            "title": "الخدمات",
            "liveTracking": "تتبع مباشر",
            "disassembly": "فك وتركيب",
            "packing": "تغليف محكم",
            "furnitureMoving": "نقل الأثاث",
            "securityPacking": "تأمين ضد الفقد والكسر",
            "cleaning": "تنظيف"
        },
        "contact": {
            "title": "تواصل معنا",
            "description": "للشركات وطلبات النقل الخاصة, نسعد بتواصلك معنا، يُرجى ملء النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن.",
            "fullName": "الأسم كاملا",
            "fullNamePlaceholder": "أدخل الاسم كاملاً",
            "email": "البريد الإلكتروني",
            "emailPlaceholder": "أدخل البريد الإلكتروني",
            "messageTitle": "عنوان الرسالة",
            "messageTitlePlaceholder": "أدخل عنوان الرسالة",
            "message": "الرسالة",
            "messagePlaceholder": "أدخل نص رسالتك هنا...",
            "sendMessage": "إرسال الرسالة",
            "ourAddress": "عنواننا",
            "contactUs": "اتصل بنا"
        },
        "banner": {
            "description": "الآن مع نقلة نقل عفشك صار أسهل!",
            "buttonText": "أطلب نقلة"
        },
        "navigation": {
            "home": "الرئيسية",
            "dashboard": "لوحة التحكم",
            "profile": "الملف الشخصي",
            "logIn": "تسجيل الدخول",
            "settings": "الإعدادات",
            "partners": "شركاء النجاح",
            "services": "الخدمات",
            "logout": "تسجيل الخروج",
            "requestMove": "اطلب نقلة"
        },
        "dashboard": {
            "welcome": "مرحبًا",
            "noOrders": "لا يوجد طلب لتتبعه",
            "requestMove": "أطلب نقلة",
            "activeOrders": "الطلبات النشطة",
            "completedOrders": "الطلبات المكتملة",
            "recentOrders": "الطلبات الأخيرة",
            "priceQuotes": "طلبات عروض الأسعار",
            "waitingForQuote": "بانتظار اختيار عرض السعر",
            "reviewOrderDetails": "مراجعة تفاصيل الطلب",
            "companyOffers": "عروض شركات النقل",
            "readMore": "إقرأ المزيد",
            "accept": "قبول",
            "showMore": "أظهر المزيد",
            "personalData": "البيانات الشخصية",
            "dateAndTime": "الموعد والمرونة",
            "currentAddress": "عنوان النقل الحالي",
            "destinationAddress": "العنوان المراد النقل إليه",
            "additionalServices": "الخدمات الإضافية",
            "furnitureDetails": "تفاصيل الأثاث",
            "location": "الموقع"
        },
        "footer": {
            "companyName": "نقلة",
            "siteLinks": "في الموقع",
            "aboutUs": "من نحن",
            "login": "تسجيل الدخول",
            "otherLinks": "روابط أخرى",
            "privacyPolicy": "سياسة الخصوصية",
            "termsConditions": "الشروط والأحكام",
            "faq": "الأسئلة والإستفسارات",
            "copyright": "جميع الحقوق محفوظة لدى شركة نقلة"
        },
        "payments": {
            "mastercard": "ماستركارد",
            "mada": "مدى",
            "visa": "فيزا كارد",
            "applepay": "أبل باي",
            "tamara": "تمارا",
            "successTitle": "تم الدفع بنجاح",
            "successBody": "من فضلك تابع رحلة النقل مع شركة النقل في التاريخ والساعة المحددة",
            "failureTitle": "فشل الدفع",
            "failureBody": "حدث خطأ عند محاولة الدفع، يرجى التأكد من معلومات الدفع أو المحاولة مرة أخرى لاحقاً",
            "ok": "حسناً"
        },
        "paymentPage": {
            "title": "الدفع",
            "breadcrumbDashboard": "لوحة التحكم",
            "breadcrumbQuotes": "عروض شركات النقل",
            "breadcrumbPayment": "الدفع",
            "sectionTitle": "الدفع",
            "transportPrice": "سعر النقل",
            "vat15": "%15 ضريبة القيمة المضافة",
            "total": "الإجمالي",
            "depositLabel": "%20 عربون من أجرة النقل",
            "depositNote": "سيتم خصم العربون من المبلغ الإجمالي وتحصيل المبلغ المتبقي بعد تسليم الشحنة",
            "paymentMethod": "طريقة الدفع",
            "payFullNow": "دفع كاملًا الآن",
            "payDepositOnly": "دفع عربون فقط",
            "back": "تراجع"
        },
        "orderDetails": {
            "title": "تفاصيل الطلب",
            "financialStatus": "الحالة المالية",
            "depositPaid": "عربون دُفع من أصل",
            "payRemaining": "أكمل دفع المبلغ المتبقي",
            "company": "شركة النقل",
            "contactNumber": "رقم التواصل",
            "currentAddress": "عنوان النقل الحالي",
            "destinationAddress": "العنوان المراد النقل إليه"
        },
        "login": {
            "title": "تسجيل الدخول",
            "subtitle": "يرجى إدخال رقم الهاتف",
            "customerTab": "طالب خدمة",
            "companyTab": "شركة نقل",
            "noAccount": "ليس لديك حساب؟",
            "registerNow": "سجل الآن"
        },
        "requestMove": {
            "firstStepTitle": "أطلب نقلة",
            "secondStepTitle": "تسجيل الدخول",
            "subtitle": "يرجى إدخال رقم الهاتف لبدء طلب النقل",
            "phoneLabel": "رقم الهاتف",
            "phonePlaceholder": "أدخل رقم الهاتف",
            "phoneIncomplete": "رقم الهاتف يجب أن يكون 9 أرقام",
            "phoneInvalidStart": "رقم الهاتف السعودي يجب أن يبدأ بـ 5",
            "saveDataLabel": "احفظ بياناتي للدخول مرة أخرى",
            "submitButton": "تسجيل الدخول",
            "otpSubtitle": "يرجى إدخال رقم التحقق المرسل إلى",
            "otpLabel": "رمز التحقق",
            "otpIncomplete": "يرجى إدخال رمز التحقق كاملاً",
            "otpInvalid": "رمز التحقق المدخل غير صحيح، حاول مرة أخرى",
            "didNotReceive": "لم يصلك الرمز بعد؟",
            "resendOtp": "إعادة الإرسال",
            "verifying": "جاري التحقق..."
        },
        "registerCompany": {
            "pageTitle": "الإنضمام كشركة نقل",
            "companyLogo": "صورة الشركة",
            "uploadLogo": "رفع الصورة",
            "companyName": "اسم الشركة التجاري",
            "commercialRegistration": "السجل التجاري",
            "attachFile": "أرفق السجل التجاري",
            "fileAttached": "ملف السجل التجاري",
            "city": "المدينة",
            "selectCity": "اختر المدينة",
            "email": "البريد الإلكتروني",
            "password": "الرمز السري",
            "confirmPassword": "تكرار الرمز السري",
            "phoneNumber": "رقم الهاتف",
            "phoneNumberPlaceholder": "أدخل رقم الهاتف",
            "featuredServices": "الخدمات المقدمة",
            "selectServices": "اختر الخدمات المقدمة",
            "aboutCompany": "نبذة قصيرة عن الشركة",
            "aboutCompanyPlaceholder": "أكتب نبذة عن شركتك",
            "agreeTerms": "من خلال إنشاء حساب، أوافق على",
            "termsLink": "شروط الاستخدام",
            "and": "و",
            "privacyLink": "سياسة الخصوصية",
            "submitButton": "إرسال طلب إنشاء الحساب",
            "services": {
                "disassembly": "تفكيك وتركيب",
                "packing": "تغليف محكم",
                "insurance": "تأمين ضد الفقد والكسر",
                "cleaning": "تنظيف بعد النقل",
                "moving": "نقل من بين مدن"
            },
            "cities": {
                "jeddah": "جدة",
                "riyadh": "الرياض",
                "dammam": "الدمام",
                "mecca": "مكة المكرمة",
                "medina": "المدينة المنورة",
                "khobar": "الخبر",
                "tabuk": "تبوك",
                "abha": "أبها"
            }
        }
    }
};

// Get translation
function t(key, locale = null) {
    const currentLocale = locale || window.currentLocale || 'ar';
    const keys = key.split('.');
    let value = translations[currentLocale];

    for (const k of keys) {
        value = value[k];
        if (!value) return key;
    }

    return value;
}

// Initialize translation
window.t = t;
window.currentLocale = localStorage.getItem('locale') || 'ar';
window.translations = translations;

