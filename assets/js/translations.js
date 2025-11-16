// Translation system
const translations = {
  en: {
    "common": {
      "all": "All",
      "filter": "Filter",
      "30seconds": "30 seconds",
      "welcome": "Welcome",
      "next": "Next",
      "back": "Back",
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
      "confirmLogout": "Yes, Logout",
      "confirm": "Confirm",
      "and": "and",
      "showMore": "Show More"
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
      "contactUs": "Contact Us",
      "messageSentSuccess": "Message sent successfully"
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
      "requestMove": "Request a Move",
      "notifications": "Notifications",
      "quotes": "Price Quotes",
      "orders": "Current and completed orders",
      "contact": "Contact",
      "accountInfo": "Account Info",
      "ratings": "Ratings"
    },
    "dashboard": {
      "welcome": "Welcome",
      "noOrders": "No order to track",
      "familyHome": "Family Home",
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
      "location": "Location",
      "goToDeliveryLocation": "Go to delivery location",
      "orderTabs": {
        "executed": "Executed Orders",
        "quotes": "Price Quotes"
      }
    },
    "companyProfile": {
      "title": "Company Profile",
      "companyName": "Company Name",
      "companyServices": "Company Services",
      "serviceAC": "AC Disassembly or Furniture Assembly"
    },
    "profilePage": {
      "title": "Profile",
      "tellUsAboutYou": "Tell us about yourself"
    },
    "sendOffer": {
      "title": "Submit Price Offer"
    },
    "viewOffer": {
      "title": "View Price Offer"
    },
    "viewOrder": {
      "title": "View Order Details"
    },
    "orderCompleted": {
      "title": "Order Management"
    },
    "footer": {
      "companyName": "Naqlah",
      "siteLinks": "On the Site",
      "aboutUs": "About Us",
      "login": "Login",
      "joinAsServiceProvider": "Join as Service Provider",
      "otherLinks": "Other Links",
      "privacyPolicy": "Privacy Policy",
      "termsConditions": "Terms & Conditions",
      "faq": "FAQ",
      "copyright": "All rights reserved to Naqlah Company",
      "contactUs": "Contact Us"
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
      "back": "Back",
      "completed": "Order Completed",
      "downloadInvoice": "Download invoice"
    },
    "companyNavigation": {
      "manageOrders": "Manage Transport Orders",
      "manageQuotes": "Price Requests"
    },
    "companyDashboard": {
      "title": "Dashboard",
      "transportOrders": "Manage Transport Orders",
      "quotesRequests": "Price Quote Requests",
      "filtered": "Filtered Results",
      "tabs": {
        "all": "All",
        "running": "Running",
        "completed": "Completed",
        "submitted": "Submitted",
        "notSubmitted": "Not submitted"
      },
      "columns": {
        "customer": "Customer",
        "status": "Status",
        "details": "Details"
      },
      "badges": {
        "journeyStarted": "Journey started",
        "completed": "Order completed",
        "loading": "Loading",
        "furnitureCheck": "Checking furniture"
      },
      "labels": {
        "from": "From",
        "to": "To",
        "services": {
          "cleaning": "Cleaning after move",
          "insurance": "Insurance against loss",
          "disassembly": "Disassembly & Assembly"
        }
      }
    },
    "orderDetails": {
      "title": "Order Details",
      "companyName": "Company Name",
      "financialStatus": "Financial status",
      "depositPaid": "deposit paid of",
      "payRemaining": "Pay remaining amount",
      "company": "Moving company",
      "contactNumber": "Contact Number",
      "currentAddress": "Current address",
      "destinationAddress": "Destination address",
      "reportProblem": "Report Problem",
      "selectProblemType": "Select problem type",
      "problemTypes": {
        "delay": "Delay in arrival",
        "noCommitment": "Moving company non-compliance",
        "damage": "Furniture damage or breakage",
        "badBehavior": "Poor crew behavior",
        "other": "Other"
      },
      "reportDetails": "Report Details",
      "reportDetailsPlaceholder": "Write problem details",
      "attachPhotoInstructions": "Attach PNG, JPG files without editing",
      "submitReport": "Submit Report",
      "reportSubmitted": "Report Submitted Successfully",
      "reportSubmittedMessage": "Your report has been sent to the Naqlah team and will be followed up. We will contact you soon."
    },
    "login": {
      "title": "Login",
      "subtitle": "Please enter your phone number",
      "customerTab": "Service Seeker",
      "companyTab": "Moving Company",
      "noAccount": "Don't have an account?",
      "registerNow": "Create Account"
    },
    "requestMove": {
      "firstStepTitle": "Request a move",
      "secondStepTitle": "Login",
      "orderTitle": "Order Name",
      "orderTitlePlaceholder": "Move to New home",
      "pickupTitle": "What is the pickup location",
      "pickupSubtitle": "Please enter the location details on the map",
      "searchPlaceholder": "Search for address",
      "searchResults": "Results",
      "mapInstructions": "Please enter location details on the map",
      "destinationTitle": "What is the destination location",
      "destinationSubtitle": "Please enter the location details on the map",
      "pickupDetails": {
        "title": "Please complete the details of the current address to be moved from",
        "city": "City",
        "address": "Address",
        "buildingName": "Building Name",
        "buildingNamePlaceholder": "Enter building name",
        "floorNumber": "Floor Number",
        "floorNumberPlaceholder": "Enter floor number",
        "hasElevator": "Is there an elevator?",
        "selectYesNo": "Select Yes or No",
        "yes": "Yes",
        "no": "No",
        "elevatorSize": "Approximate elevator size",
        "selectSize": "Select size",
        "small": "Small",
        "medium": "Medium",
        "large": "Large",
        "additionalNotes": "Additional notes (optional)",
        "notesPlaceholder": "Leave any notes about the address"
      },
      "furnitureDetails": {
        "title": "Furniture Details",
        "subtitle": "Please enter all required information",
        "rooms": {
          "label": "Number of Rooms",
          "placeholder": "Select number of rooms",
          "options": {
            "1": "1 Room",
            "2": "2 Rooms",
            "3": "3 Rooms",
            "4": "4 Rooms",
            "5": "5+ Rooms"
          }
        },
        "items": {
          "label": "Items and Furniture",
          "placeholder": "Select items and furniture",
          "options": {
            "bed": "Bed",
            "wardrobe": "Wardrobe",
            "ac": "AC",
            "sofa": "Sofa",
            "carpet": "Carpet",
            "desk": "Desk",
            "table": "Table",
            "chair": "Chair",
            "tv": "TV",
            "fridge": "Fridge",
            "washing-machine": "Washing Machine"
          },
          "quantity": "Quantity",
          "add": "Add"
        },
        "valuables": {
          "label": "Are there valuable items to move?",
          "placeholder": "Select Yes or No",
          "yes": "Yes",
          "no": "No",
          "attachPhotos": "Attach photos of valuable items",
          "uploadInstructions": "Attach PNG, JPG, MP4"
        },
        "furniture": {
          "attachPhotos": "Attach furniture photos",
          "uploadInstructions": "Attach PNG, JPG, MP4"
        }
      },
      "subtitle": "Please enter your phone number to start the move request",
      "phoneLabel": "Phone Number",
      "phonePlaceholder": "Enter phone number",
      "phoneIncomplete": "Phone number must be 9 digits",
      "phoneInvalidStart": "Saudi phone number must start with 5",
      "saveDataLabel": "Save my data to login again",
      "submitButton": "Login",
      "continue": "Continue",
      "otpSubtitle": "Please enter the verification code sent to",
      "otpLabel": "Verification Code",
      "otpIncomplete": "Please enter the complete verification code",
      "otpInvalid": "The verification code entered is incorrect, try again",
      "didNotReceive": "Didn't receive the code?",
      "resendOtp": "Resend",
      "verifying": "Verifying...",
      "loginViaNafath": "Login via Nafath",
      "remaining": "Remaining"
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
      "verificationPendingTitle": "Your account is being reviewed 🎯",
      "verificationPendingDescription": "Your account creation request has been sent successfully. We are reviewing and verifying the information you provided about your company. You will be notified via email and phone number once the company account is verified.",
      "goToHome": "Go to Home",
      "opreationalAreas": "Operational Areas",
      "opreationalAreasSelect": "Select Operational Areas",
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
    },
    'privacyTerms': {
      'title': 'Privacy Policy and Terms of Use',
      'lastUpdated': 'Last updated: 05.02.2025',
    },
    'privacyPage': {
      'title': 'Privacy Policy',
      'intro': 'We value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, share, and protect your information.',
      'infoCollectTitle': 'Information We Collect',
      'infoCollectItems': [
        'Account information: Name, phone number.',
        'Location information to facilitate transport operations.',
        'Order details and transport operations.'
      ],
      'dataUseTitle': 'How We Use Your Data',
      'dataUseItems': [
        'Providing effective service.',
        'Improving quality and user experience.',
        'For security and legal purposes.'
      ]
    },
    'termsPage': {
      'title': 'Terms and Conditions',
      'intro': 'By using our services, you agree to comply with these terms.',
      'ordersPaymentTitle': 'Orders and Payment',
      'ordersPaymentItems': [
        'Deposit must be paid electronically.',
        'Cash payment is not allowed unless agreed upon.'
      ],
      'cancellationTitle': 'Order Cancellation',
      'cancellationText': 'Orders can be cancelled before company confirmation without fees. Fees may apply after confirmation.'
    },
    'companyDashboard': {
      'title': 'Company Dashboard',
      'transportOrders': 'Transport Orders',
      'quotesRequests': 'Quote Requests',
      'tabs': {
        'all': 'All',
        'running': 'Running',
        'completed': 'Completed',
        'submitted': 'Submitted',
        'notSubmitted': 'Not Submitted'
      },
      'columns': {
        'customer': 'Customer',
        'status': 'Status',
        'details': 'Details'
      },
      'badges': {
        'journeyStarted': 'Journey Started',
        'loading': 'Loading',
        'furnitureCheck': 'Checking furniture',
        'completed': 'Order completed'
      },
      'labels': {
        'from': 'From',
        'to': 'To',
        'services': {
          'insurance': 'Insurance against loss and breakage',
          'disassembly': 'Disassembly and assembly',
          'cleaning': 'Post-move cleaning'
        }
      },
      'addresses': {
        'address1': 'Al Malqa District, Anas Bin Malik St., 3679',
        'address2': 'Al Malqa District, Palestine St., 5843'
      },
      'time': {
        'morning': 'AM',
        'evening': 'PM'
      }
    },
    'account': {
      'personalInfo': 'Personal Information',
      'companyInfo': 'Company Information',
      'updateInfo': 'Update Information',
      'changePassword': 'Change Password',
      'currentPassword': 'Current Password',
      'newPassword': 'New Password',
      'confirmNewPassword': 'Confirm New Password',
      'save': 'Save Changes',
      'cancel': 'Cancel',
      'firstName': 'First Name',
      'lastName': 'Last Name',
      'email': 'Email',
      'password': 'Password',
      'phoneNumber': 'Phone Number',
      'city': 'City',
      'expectedServices': 'Expected Services',
      'about': 'Brief About',
      'aboutPlaceholder': 'Write a brief about yourself',
      'profileImage': 'Profile Image',
      'changeImage': 'Change Image',
      'updateSuccess': 'Your data has been updated successfully'
    },
    'registerCompany': {
      'title': 'Join as a Moving Company',
      'companyLogo': 'Company Logo',
      'uploadLogo': 'Change Logo',
      'companyName': 'Commercial Company Name',
      'commercialRegistration': 'Commercial Registration',
      'attachFile': 'Attach commercial registration',
      'fileAttached': 'Commercial registration file',
      'city': 'City',
      'selectCity': 'Select City',
      'cities': {
        'jeddah': 'Jeddah',
        'riyadh': 'Riyadh',
        'dammam': 'Dammam',
        'mecca': 'Mecca',
        'medina': 'Medina',
        'khobar': 'Khobar',
        'tabuk': 'Tabuk',
        'abha': 'Abha'
      },
      'email': 'Email',
      'password': 'Password',
      'confirmPassword': 'Confirm Password',
      'phoneNumber': 'Phone Number',
      'featuredServices': 'Featured Services',
      'selectService': 'Select services',
      'services': {
        'disassembly': 'Disassembly and Assembly',
        'packing': 'Secure Packing',
        'insurance': 'Insurance against loss and breakage',
        'cleaning': 'Post-move Cleaning',
        'moving': 'Inter-city Moving',
        'tracking': 'Live Tracking'
      },
      'aboutCompany': 'Brief about the company',
      'agreeTerms': 'By creating an account, I agree to the',
      'termsLink': 'Terms of Use',
      'and': 'and',
      'privacyLink': 'Privacy Policy',
      'submitButton': 'Send Account Creation Request',
      'verificationPendingTitle': 'Verifying your account 🎯',
      'verificationPendingDescription': 'Account creation request sent successfully. We are reviewing and verifying the information you provided about your company. You will be notified via email and phone number when your company account is verified.',
      'goToHome': 'Go to Home',
      'selectService': 'Select service'
    },
    'manageOrders': {
      'title': 'Manage Transport Orders',
      'filter': {
        'title': 'Filter',
        'orders': 'Orders',
        'status': 'Status',
        'deliveryDate': 'Delivery Date',
        'city': 'City',
        'applyFilter': 'Save and Filter',
        'cancel': 'Cancel',
        'from': 'From',
        'to': 'To'
      },
      'all': 'All',
      'status': {
        'pending': 'Pending',
        'inProgress': 'In Progress',
        'completed': 'Completed',
        'cancelled': 'Cancelled',
        'journeyStarted': 'Journey Started',
        'loadingUnpacking': 'Loading and Unpacking',
        'furnitureCheck': 'Furniture Check',
        'unloadingAssembly': 'Unloading and Assembly',
        'arrivedFirstLocation': 'Arrived at First Location',
        'headingSecondLocation': 'Heading to Second Location',
        'orderCompleted': 'Order Completed'
      },
      'orderDetails': {
        'orderNumber': 'Order Number',
        'customer': 'Customer',
        'date': 'Date',
        'time': 'Time',
        'from': 'From',
        'to': 'To',
        'services': 'Services',
        'status': 'Status',
        'actions': 'Actions',
        'orderNumber': 'Order Number',
        'customer': 'Customer',
        'date': 'Date',
        'time': 'Time',
        'from': 'From',
        'to': 'To',
        'outOf': 'Out of',
        'depositPaid': 'Deposit Paid',
        'payRemaining': 'Pay Remaining',
        'reportProblem': "Report Problem",
        "reportProblemPlaceholder": "Write problem details",
        'reportProblemSubmit': "Submit Report",
        'reportProblemSuccess': "Report Submitted Successfully",
        'reportProblemSuccessMessage': "Your report has been sent to the Naqlah team and will be followed up. We will contact you soon.",
        'selectProblemType': "Select problem type",
        'problemTypes': {
          'delay': 'Delay in arrival',
          'noCommitment': 'Moving company non-compliance',
          'damage': 'Furniture damage or breakage',
          'badBehavior': 'Poor crew behavior',
          'other': 'Other'
        },
        'attachPhotoInstructions': "Attach PNG, JPG files without editing",
      }
    },
    'manageQuotes': {
      'title': 'Quote Requests',
      'filter': 'Filter',
      'all': 'All',
      'status': {
        'pending': 'Pending',
        'submitted': 'Submitted',
        'accepted': 'Accepted',
        'rejected': 'Rejected'
      },
      'quoteDetails': {
        'quoteNumber': 'Quote Number',
        'customer': 'Customer',
        'date': 'Date',
        'time': 'Time',
        'from': 'From',
        'to': 'To',
        'services': 'Services',
        'status': 'Status',
        'actions': 'Actions'
      }
    },
    'payment': {
      'title': 'Payment',
      'details': 'Payment Details',
      'amount': 'Amount',
      'method': 'Payment Method',
      'cardNumber': 'Card Number',
      'expiryDate': 'Expiry Date',
      'cvv': 'CVV',
      'cardHolder': 'Card Holder Name',
      'payNow': 'Pay Now',
      'success': 'Payment Successful',
      'failed': 'Payment Failed'
    },
    'rate': {
      'title': 'Rate',
      'company': 'Rate Company',
      'customer': 'Rate Customer',
      'service': 'Service Rating',
      'communication': 'Communication',
      'punctuality': 'Punctuality',
      'professionalism': 'Professionalism',
      'comment': 'Add Comment',
      'submit': 'Submit Rating',
      'rateTitle': 'Rate your experience with the moving company',
      'rateDescription': 'Your feedback is important to us and helps us improve our services',
      'experiencePlaceholder': 'How was your experience?',
      'submitRating': 'Submit Rating',
      'ratings': 'ratings',
      'filter': 'Filter',
      'monthAgo': 'شهر 1',
      'from': 'From',
      'to': 'To',
      'overall': 'Overall Rating',
      'excellent': 'ممتاز',
      'good': 'جيد',
      'average': 'متوسط',
      'poor': 'سيء',
      'noRatings': 'لا توجد تقييمات بعد',
      'example': 'طلبنا خدمة تنظيف وفك وتركيب وكانت التجربة ممتازة. السيارة وصلت في الوقت المحدد'
    },
    'customerDashboard': {
      'title': 'Customer Dashboard',
      'noOrders': 'No orders to track',
      'requestMove': 'Request a move',
      'waitingForQuote': 'Waiting for quote selection',
      'goToDeliveryLocation': 'Go to delivery location',
      'personalData': 'Personal Data',
      'dateAndTime': 'Date and Time',
      'currentAddress': 'Current Address',
      'destinationAddress': 'Destination Address',
      'additionalServices': 'Additional Services',
      'furnitureDetails': 'Furniture Details',
      'location': 'Location',
      'reviewOrderDetails': 'Review order details',
      'readMore': 'Read more',
      'accept': 'Accept',
      'showMore': 'Show more',
      'companyOffers': 'Moving Company Offers'
    },
    'dashboard': {
      'welcome': 'Welcome',
      'title': 'Dashboard'
    },
    'settingsPage': {
      'title': 'Settings',
      'appLanguages': 'App Languages',
      'notifications': 'Notifications',
      'notificationSettings': {
        'priceQuoteAvailable': 'When price quotes are available',
        'statusUpdates': 'When status updates',
        'priceQuoteAccepted': 'When price quotes are accepted',
        'moveCompleted': 'When move is completed'
      },
      'saveSettings': 'Save Settings',
      'settingsSaved': 'Settings saved successfully'
    },
    'notificationsPage': {
      'title': 'Notifications',
      'reportReceived': 'Your Report Has Been Received',
      'reportDesc': 'Your report regarding the issue has been received, and we will contact you to resolve it as soon as possible',
      'timeAgo': {
        'minutes': 'm'
      }
    },
    'contactPage': {
      'welcome': 'Welcome',
      'welcomeDesc': 'We are happy to hear from you. Please fill out the form below and we will contact you as soon as possible.',
      'phone': 'Phone',
      'address': 'Western Al Naseem District',
      'selectMessageType': 'Select Message Type',
      'messageTypes': {
        'inquiry': 'Inquiry',
        'complaint': 'Complaint',
        'suggestion': 'Suggestion'
      }
    },
    'faqPage': {
      'title': 'FAQ',
      'questions': [
        {
          'question': 'Can I choose my preferred moving date?',
          'answer': 'Yes, you can select the date through the scheduling page before confirming the order.'
        },
        {
          'question': 'What payment methods are available?',
          'answer': 'We offer electronic payment and deposit payment with completion of the remaining amount as indicated.'
        },
        {
          'question': 'How is furniture moving cost calculated?',
          'answer': 'The cost depends on distance, number of items, and additional services like disassembly, assembly, and packaging.'
        }
      ]
    },
    'postpone': {
      'breadcrumb': 'Postpone Order',
      'title': 'Postpone Order #ORD321564',
      'selectNewDateTime': 'Please select the new date and time',
      'time': {
        'label': 'Time',
        'note': 'Minor time changes may occur due to traffic or operational schedule adjustments'
      },
      'date': {
        'label': 'Date'
      },
      'buttons': {
        'save': 'Save',
        'back': 'Back'
      },
      'success': {
        'title': 'Order Postponed Successfully',
        'message': 'The moving date has been updated to',
        'ok': 'OK'
      }
    },
    'calendar': {
      'days': {
        'sun': 'SUN',
        'mon': 'MON',
        'tue': 'TUE',
        'wed': 'WED',
        'thu': 'THU',
        'fri': 'FRI',
        'sat': 'SAT'
      }
    },
    'orders': {
      'waitingForStart': 'Waiting to Start',
      'waitingForDelivery': 'Heading to Delivery Location',
      'completed': 'Delivered'
    }
  },
  ar: {
    "common": {
      "all": "الكل",
      "filter": "الفلتر",
      "30seconds": "30 ثانية",
      "welcome": "مرحباً بك",
      "next": "التالي",
      "back": "تراجع",
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
      "confirmLogout": "نعم الخروج",
      "confirm": "تأكيد",
      "and": "و",
      "showMore": "اظهر المزيد"
    },
    "examples": {
      "customerName1": "منصور الفهماني"
    },
    'account': {
      'personalInfo': 'معلومات شخصية',
      'companyInfo': 'معلومات الشركة',
      'updateInfo': 'تحديث المعلومات الشخصية',
      'changePassword': 'تغيير كلمة المرور',
      'currentPassword': 'كلمة المرور الحالية',
      'newPassword': 'كلمة المرور الجديدة',
      'confirmNewPassword': 'تأكيد كلمة المرور الجديدة',
      'save': 'حفظ التغييرات',
      'cancel': 'إلغاء',
      'firstName': 'الإسم الأول',
      'lastName': 'الإسم الأخير',
      'email': 'البريد الإلكتروني',
      'password': 'الرمز السري',
      'phoneNumber': 'رقم الهاتف',
      'city': 'المدينة',
      'expectedServices': 'الخدمات المتوقعة',
      'about': 'نبذة قصيرة',
      'aboutPlaceholder': 'أكتب نبذة عنك',
      'profileImage': 'صورة العرض',
      'changeImage': 'تغيير الصورة',
      'updateSuccess': 'تم تحديث بياناتك بنجاح'
    },

    "userMenu": {
      "username": "اسم المستخدم"
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
      "contactUs": "اتصل بنا",
      "messageSentSuccess": "تم ارسال الرسالة بنجاح"
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
      "requestMove": "اطلب نقلة",
      "notifications": "التنبيهات",
      "quotes": "عروض الأسعار",
      "orders": "الطلبات الجارية والمنتهية",
      "contact": "تواصل معنا",
      "accountInfo": "معلومات الحساب",
      "ratings": "التقييمات"
    },
    "dashboard": {
      "welcome": "مرحبًا",
      "noOrders": "لا يوجد طلب لتتبعه",
      "familyHome": "منزل العائلة",
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
      "location": "الموقع",
      "goToDeliveryLocation": "التوجه إلى موقع التسليم",
      "cancelOrder": "إلغاء الطلب",
      "cancelOrderConfirmation": "لقد انتهى الوقت اللازم لاخذ قرار لذلك سيتم الغاء طلبك",
      "orderCancelledSuccessfully": "تم إلفاء طلبك بنجاح",
      "orderCancelledMessage": "نأمل أن نخدمك في وقتٍ لاحق, سيتم إسترجاع رسوم النقل حسب سياسة الشركة.",
      "postponeOrder": "تأجيل الطلب؟",
      "postponeOrderMessage": "يمكنك تأجيل الطلب قبل 48 ساعة من موعد النقل المحدد، وسيتم توجيهك لتعديل تاريخ النقل الجديد",
      "postponeOrderButton": "تأجيل الطلب",
      "cancel": "تراجع",
      "ok": "حسناً",
      "acceptCompany": "قبول الشركة؟",
      "acceptCompanyMessage": "بمجرد اعتماد العرض، سيتم الغاء العروض الاخرى ونقلك الى شاشة دفع العربون لتثبيت طلبك، هل انت متأكد؟",
      "yes": "نعم",
      "timeRemaining": "متبقي للانتهاء",
      "hours": "س",
      "minutes": "د",
      "days": "ي",
      "orderTabs": {
        "executed": "الطلبات المنفذة",
        "quotes": "عروض الأسعار"
      },
      "loadingMore": "جاري التحميل..."
    },
    "footer": {
      "companyName": "نقلة",
      "siteLinks": "في الموقع",
      "aboutUs": "من نحن",
      "login": "تسجيل الدخول",
      "joinAsServiceProvider": "إنضم كمزود خدمة",
      "otherLinks": "روابط أخرى",
      "privacyPolicy": "سياسة الخصوصية",
      "termsConditions": "الشروط والأحكام",
      "faq": "الأسئلة والإستفسارات",
      "copyright": "جميع الحقوق محفوظة لدى شركة نقلة",
      "contactUs": "تواصل معنا"
    },
    "payments": {
      "mastercard": "ماستر كارد",
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
      "back": "تراجع",
      "completed": "تم إكتمال الطلب",
      "downloadInvoice": "تحميل الفاتورة"
    },
    "companyNavigation": {
      "manageOrders": "إدارة طلبات النقل",
      "manageQuotes": "طلبات الأسعار"
    },
    "companyDashboard": {
      "title": "لوحة التحكم",
      "transportOrders": "إدارة طلبات النقل",
      "quotesRequests": "طلبات الأسعار",
      "filtered": "نتائج الفلترة",
      "tabs": {
        "all": "الكل",
        "running": "الجارية",
        "completed": "المنتهية",
        "submitted": "مقدمة",
        "notSubmitted": "غير مقدمة"
      },
      "columns": {
        "customer": "العميل",
        "status": "الحالة",
        "details": "التفاصيل"
      },
      "badges": {
        "journeyStarted": "بدء رحلة النقل",
        "completed": "تم إكتمال الطلب",
        "loading": "تم التحميل",
        "furnitureCheck": "التحقق من الأثاث",
        "waiting": "بانتظار البدء"
      },
      "labels": {
        "from": "من",
        "to": "إلى",
        "services": {
          "cleaning": "تنظيف بعد النقل",
          "insurance": "تأمين ضد الفقد والكسر",
          "disassembly": "تفكيك وتركيب"
        }
      },
      "addresses": {
        "address1": "حي الملقا شارع أنس بن مالك، 3679",
        "address2": "حي الملقا شارع فلسطين، 5843"
      },
      "time": {
        "morning": "ص",
        "evening": "م"
      }
    },
    "orderDetails": {
      "title": "تفاصيل الطلب",
      "financialStatus": "الحالة المالية",
      "depositPaid": "دُفع عربون",
      "payRemaining": "أكمل دفع المبلغ المتبقي",
      "company": "شركة النقل",
      "contactNumber": "رقم التواصل",
      "currentAddress": "عنوان النقل الحالي",
      "destinationAddress": "العنوان المراد النقل إليه",
      "outOf": "من أصل",
      "orderNumber": "رقم الطلب",
      "orderType": "نوع الطلب",
      "orderStatus": "حالة الطلب",
      "orderDate": "تاريخ الطلب",
      "orderTime": "وقت الطلب",
      "orderLocation": "موقع الطلب",
      "orderContact": "رقم التواصل",
      "reportProblem": "إبلاغ عن مشكلة",
      "reportDetailsPlaceholder": "أكتب تفاصيل المشكلة",
      'reportDetails': "تفاصيل الإبلاغ",
      'selectProblemType': "حدد نوع المشكلة",
      'problemTypes': {
        'delay': 'تأخير في الوصول',
        'noCommitment': 'عدم التزام شركة النقل',
        'damage': 'تلف   أو كسر في الأثاث',
        'badBehavior': 'سوء تعامل من الطاقم',
        'other': 'أخرى'
      },
      'attachPhotoInstructions': "أرفق بصيغة PNG, JPG, MP4",
      'submitReport': "إبلاغ",
      'reportSubmitted': "تم إرسال الإبلاغ بنجاح",
      'reportSubmittedMessage': "تم إرسال الإبلاغ تم إرسال الإبلاغ إلى فريق نقلة وسيتم متابعته والتواصل معكم",
    },
    "login": {
      "title": "تسجيل الدخول",
      "subtitle": "يرجى إدخال رقم الهاتف",
      "customerTab": "طالب خدمة",
      "companyTab": "شركة نقل",
      "noAccount": "ليس لديك حساب؟",
      "registerNow": "أنشئ حساب"
    },
    "requestMove": {
      "firstStepTitle": "أطلب نقلة",
      "secondStepTitle": "تسجيل الدخول",
      "orderTitle": "مسمى الطلب",
      "orderTitlePlaceholder": "نقل إلى منزل جديد",
      "pickupTitle": "ماهو الموقع المراد النقل منه",
      "pickupSubtitle": "من فضلك أدخل علي الخريطة تفاصيل الموقع",
      "searchPlaceholder": "إبحث عن العنوان",
      "searchResults": "النتائج",
      "mapInstructions": "من فضلك أدخل علي الخريطة تفاصيل الموقع",
      "destinationTitle": "ماهو الموقع المراد النقل إليه",
      "destinationSubtitle": "من فضلك أدخل علي الخريطة تفاصيل الموقع",
      "pickupDetails": {
        "title": "من فضلك أكمل تفاصيل عنوان النقل الحالي المراد النقل منه",
        "city": "المدينة",
        "address": "العنوان",
        "buildingName": "إسم المبنى",
        "buildingNamePlaceholder": "أدخل إسم المبنى",
        "floorNumber": "رقم الطابق",
        "floorNumberPlaceholder": "أدخل رقم الطابق",
        "hasElevator": "يوجد مصعد؟",
        "selectYesNo": "حدد نعم أو لا",
        "yes": "نعم",
        "no": "لا",
        "elevatorSize": "حجم المصعد التقريبي",
        "selectSize": "اختر الحجم",
        "small": "صغير",
        "medium": "متوسط",
        "large": "كبير",
        "additionalNotes": "معلومات إضافية (اختياري)",
        "notesPlaceholder": "أترك أي ملاحظة خاصة بالعنوان"
      },
      "furnitureDetails": {
        "title": "تفاصيل الأثاث",
        "subtitle": "يرجي إدخال كافة المعلومات المطلوبة",
        "rooms": {
          "label": "عدد الغرف",
          "placeholder": "اختر عدد الغرف",
          "options": {
            "1": "1 غرفة",
            "2": "2 غرفة",
            "3": "3 غرف",
            "4": "4 غرف",
            "5": "5+ غرف"
          }
        },
        "items": {
          "label": "القطع والأثاث",
          "placeholder": "حدد القطع والأثاث",
          "options": {
            "bed": "سرير",
            "wardrobe": "دولاب",
            "ac": "مكيف",
            "sofa": "صوفا",
            "carpet": "سجاد",
            "desk": "مكتب",
            "table": "طاولة",
            "chair": "كرسي",
            "tv": "تلفزيون",
            "fridge": "ثلاجة",
            "washing-machine": "غسالة"
          },
          "quantity": "العدد",
          "add": "إضافة"
        },
        "valuables": {
          "label": "هل يوجد قطع ثمينة للنقل؟",
          "placeholder": "أختر نعم او لا",
          "yes": "نعم",
          "no": "لا",
          "attachPhotos": "أرفق صور القطع الثمينة",
          "uploadInstructions": "أرفق بصيغة PNG, JPG, MP4"
        },
        "furniture": {
          "attachPhotos": "أرفق صور الأثاث",
          "uploadInstructions": "أرفق بصيغة PNG, JPG, MP4"
        }
      },
      "subtitle": "يرجى إدخال رقم الهاتف لبدء طلب النقل",
      "phoneLabel": "رقم الهاتف",
      "phonePlaceholder": "أدخل رقم الهاتف",
      "phoneIncomplete": "رقم الهاتف يجب أن يكون 9 أرقام",
      "phoneInvalidStart": "رقم الهاتف السعودي يجب أن يبدأ بـ 5",
      "saveDataLabel": "احفظ بياناتي للدخول مرة أخرى",
      "submitButton": "تسجيل الدخول",
      "continue": "أكمل",
      "otpSubtitle": "يرجى إدخال رقم التحقق المرسل إلى",
      "otpLabel": "رمز التحقق",
      "otpIncomplete": "يرجى إدخال رمز التحقق كاملاً",
      "otpInvalid": "رمز التحقق المدخل غير صحيح، حاول مرة أخرى",
      "didNotReceive": "لم يصلك الرمز بعد؟",
      "resendOtp": "إعادة الإرسال",
      "verifying": "جاري التحقق...",
      "loginViaNafath": "تسجيل الدخول عبر نفاذ",
      "remaining": "متبقي"
    },
    "registerCompany": {
      "pageTitle": "الإنضمام كشركة نقل",
      "companyLogo": "صورة الشركة",
      "uploadLogo": "تغيير الصورة",
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
      "verificationPendingTitle": "جارٍ التحقق من حسابك 🎯",
      "verificationPendingDescription": "تم إرسال طلب إنشاء الحساب بنجاح. يتم المراجعة والتحقق من البيانات التي قدمتها عن شركتك. سيتم إشعارك عبر البريد الإلكتروني ورقم الهاتف في حال توثيق حساب الشركة.",
      "goToHome": "التوجّه إلى الرئيسية",
      "opreationalAreas": "المناطق التشغيلية",
      "opreationalAreasSelect": "حدد المناطق التشغيلية",
      'selectService': 'حدد الخدمات المقدمة',
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
    },
    'privacyTerms': {
      'title': 'شروط الإستخدام وسياسة الخصوصية',
      'lastUpdated': 'آخر تحديث 05.02.2025',
    },
    'privacyPage': {
      'title': 'سياسة الخصوصية',
      'intro': 'نحن نحرص على خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيف نقوم بجمع واستخدام ومشاركة وحماية معلوماتك.',
      'infoCollectTitle': 'المعلومات التي نجمعها',
      'infoCollectItems': [
        'معلومات الحساب: الاسم، رقم الهاتف.',
        'معلومات الموقع لتسهيل عمليات النقل.',
        'تفاصيل الطلب وعمليات النقل.'
      ],
      'dataUseTitle': 'كيف نستخدم بياناتك',
      'dataUseItems': [
        'تقديم الخدمة بشكل فعّال.',
        'تحسين الجودة وتجربة المستخدم.',
        'لأغراض أمنية وقانونية.'
      ]
    },
    'termsPage': {
      'title': 'الشروط والأحكام',
      'intro': 'باستخدامك لخدماتنا فأنت توافق على الإلتزام بهذه الشروط.',
      'ordersPaymentTitle': 'الطلبات والدفع',
      'ordersPaymentItems': [
        'يتم دفع العربون إلكترونياً.',
        'لا يسمح بالدفع النقدي إلا إذا تم الاتفاق.'
      ],
      'cancellationTitle': 'إلغاء الطلبات',
      'cancellationText': 'يمكن إلغاء الطلب قبل تأكيد الشركة بدون رسوم، وقد تُخصم رسوم بعد التأكيد.'
    },
    'notificationsPage': {
      'title': 'الإشعارات',
      'reportReceived': 'تم استلام بلاغك',
      'reportDesc': 'تم استلام بلاغك بشأن المشكلة، وسيتم التواصل معك لحلها في أقرب وقت ممكن',
      'timeAgo': {
        'minutes': 'د'
      }
    },
    'contactPage': {
      'welcome': 'مرحباً بك',
      'welcomeDesc': 'نسعد بتواصلك معنا، يُرجى ملء النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن.',
      'phone': 'الهاتف',
      'address': 'حي النسيم الغربي',
      'selectMessageType': 'اختر عنوان الرسالة',
      'messageTypes': {
        'inquiry': 'استفسار',
        'complaint': 'شكوى',
        'suggestion': 'اقتراح'
      }
    },
    'quotes': {
      'title': 'عروض الأسعار',
      'pageTitle': 'عروض الأسعار - نقلة',
      'priceQuotes': 'طلبات عروض الأسعار',
      'companyOffers': 'عروض شركات النقل',
      'readMore': 'إقرأ المزيد',
      'accept': 'قبول',
      'showMore': 'أظهر المزيد',
      'acceptConfirmation': {
        'title': 'قبول الشركة؟',
        'message': 'بمجرد اعتماد العرض، سيتم إلغاء العروض الأخرى والانتقال لإتمام الدفع. هل أنت متأكد؟',
        'confirmButton': 'نعم',
        'cancelButton': 'تراجع'
      },
      'services': {
        'wardrobe': 'تركيب دواليب',
        'moving': 'نقل أثاث',
        'kitchen': 'تركيب مطبخ',
        'insurance': 'تأمين ضد الفقد والكسر',
        'packing': 'تغليف محكم',
        'ac': 'تركيب مكيفات'
      },
      'company': {
        'sample': {
          'description': 'مرحبًا نشكرك على اهتمامك بخدماتنا تميز بإحترافية عالية في نقل الأثاث دون خدوش أو تلف، مع توفير تغليف آمن لحماية ممتلكاتك والتزام بالمواعيد بدقة لضمان راحتك. أسعارنا شفافة بدون رسوم مخفية. بالإضافة إلى تأمين لحماية الأثاث أثناء النقل. نحن مستعدون لنقل أثاثك بكل سهولة اضغط على "قبول" للبدء الآن!'
        }
      }
    },
    'manageQuotes': {
      'title': 'إدارة طلبات الأسعار',
      'filter': {
        'title': 'فلترة',
        'quotesRequests': 'طلبات عروض الأسعار',
        'status': 'الحالة',
        'deliveryDate': 'تاريخ التسليم',
        'city': 'المدينة',
        'applyFilter': 'حفظ وفلترة',
        'cancel': 'إلغاء',
        'from': 'من',
        'to': 'إلى'
      },
      'tabs': {
        'all': 'الكل',
        'submitted': 'مقدمة',
        'notSubmitted': 'غير مقدمة'
      },
      'quoteDetails': {
        'quoteNumber': 'رقم الطلب',
        'customer': 'العميل',
        'date': 'التاريخ',
        'time': 'الوقت',
        'from': 'من',
        'to': 'إلى',
        'services': 'الخدمات',
        'status': 'الحالة',
        'actions': 'الإجراءات'
      }
    },
    'faqPage': {
      'title': 'الأسئلة والإستفسارات',
      'questions': [
        {
          'question': 'هل يمكنني اختيار موعد النقل الذي يناسبني؟',
          'answer': 'نعم، يمكنك اختيار الموعد من خلال صفحة الموعد والمرونة قبل تأكيد الطلب.'
        },
        {
          'question': 'ما هي طرق الدفع المتاحة؟',
          'answer': 'نوفر الدفع الإلكتروني، والدفع بالعربون مع استكمال باقي المبلغ حسب ما هو موضح.'
        },
        {
          'question': 'كيف يتم حساب تكلفة نقل الأثاث؟',
          'answer': 'تعتمد التكلفة على المسافة، وعدد القطع، والخدمات الإضافية مثل التفكيك والتركيب والتغليف.'
        }
      ]
    },
    'postpone': {
      'breadcrumb': 'تأجيل الطلب',
      'title': 'تأجيل الطلب #ORD321564',
      'selectNewDateTime': 'يرجى تحديد الوقت والتاريخ الجديد',
      'time': {
        'label': 'الساعة',
        'note': 'قد تحدث تغيرات بسيطة في التوقيت بسبب الازدحام أو إعادة تنسيق الجداول التشغيلية'
      },
      'date': {
        'label': 'التاريخ'
      },
      'buttons': {
        'save': 'حفظ',
        'back': 'تراجع'
      },
      'success': {
        'title': 'تم تأجيل الطلب بنجاح',
        'message': 'تم تحديث موقع النقل الى',
        'ok': 'حسناً'
      }
    },
    'calendar': {
      'days': {
        'sun': 'أحد',
        'mon': 'إثنين',
        'tue': 'ثلاثاء',
        'wed': 'أربعاء',
        'thu': 'خميس',
        'fri': 'جمعة',
        'sat': 'سبت'
      }
    },
    'orders': {
      'waitingForStart': 'بإنتظار البدء',
      'waitingForDelivery': 'التوجة الى موقع التسليم',
      'completed': 'تم التسليم'
    },
    'settingsPage': {
      'title': 'الإعدادات',
      'appLanguages': 'لغات التطبيق',
      'notifications': 'الإشعارات',
      'notificationSettings': {
        'priceQuoteAvailable': 'عند توفر عروض الأسعار',
        'statusUpdates': 'عند تحديث الحالة',
        'priceQuoteAccepted': 'عند قبول عرض السعر',
        'moveCompleted': 'عند إنهاء النقل'
      },
      'saveSettings': 'حفظ الإعدادات',
      'settingsSaved': 'تم حفظ الاعدادات'
    },
    'companyProfile': {
      'title': 'ملف الشركة',
      'companyName': 'الميثاق',
      'companyServices': 'خدمات شركة النقل',
      'serviceAC': 'تفكيك مكيف أو تركيب اثاث'
    },
    'profilePage': {
      'title': 'الملف الشخصي',
      'tellUsAboutYou': 'أخبرنا عن نفسك'
    },
    'sendOffer': {
      'title': 'تقديم عرض السعر'
    },
    'viewOffer': {
      'title': 'عرض سعر الطلب'
    },
    'viewOrder': {
      'title': 'عرض تفاصيل الطلب'
    },
    'orderCompleted': {
      'title': 'إدارة الطلب'
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

