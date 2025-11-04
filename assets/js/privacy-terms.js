function scrollToBottom() {
  const scrollableDiv = $('#privacy_terms');
  scrollableDiv.scrollTop(scrollableDiv[0].scrollHeight);
}
function scrollToTop() {
  const scrollableDiv = $('#privacy_terms');
  scrollableDiv.scrollTop(0);
}
$(document).ready(function () {
  function showActions() {
    $('#actions').removeClass('hidden');
    $('#scroll-top').addClass('hidden');
  }
  function hideActions() {
    $('#actions').addClass('hidden');
    $('#scroll-top').removeClass('hidden');
  }
  $('#privacy_terms').on('scroll', function () {
    var scrollHeight = $(this)[0].scrollHeight;
    var scrollTop = $(this).scrollTop();
    var clientHeight = $(this).innerHeight();

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      // Reached bottom
      showActions();
    } else {
      hideActions();
    }
  });

  // Load privacy terms content
  var privacyContent = `
          <h1 style="font-weight: bold;">مقدمة</h1>
          <p>مرحبًا بكم في نقلة. نحن ملتزمون بحماية خصوصيتكم وضمان التعامل مع معلوماتكم الشخصية بطريقة آمنة ومسؤولة.</p>
          <h1 style="font-weight: bold;">المعلومات التي نجمعها</h1>
          <p>قد نجمع معلومات شخصية مثل اسمك، عنوان بريدك الإلكتروني، رقم هاتفك، وتفاصيل الشركة عند التسجيل على منصتنا.</p>
          <h1 style="font-weight: bold;">كيف نستخدم معلوماتك</h1>
          <p>تُستخدم معلوماتك لتقديم خدماتنا وتحسينها، والتواصل معك، وضمان الامتثال للالتزامات القانونية.</p>
          <h1 style="font-weight: bold;">حقوقك</h1>
          <p>لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها. يمكنك أيضًا إلغاء الاشتراك في الاتصالات التسويقية في أي وقت.</p>
          <h1 style="font-weight: bold;">اتصل بنا</h1>
          <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية الخاصة بنا، يرجى الاتصال بنا على info@naqlah.com</p>
          <p>مرحبًا بكم في نقلة. نحن ملتزمون بحماية خصوصيتكم وضمان التعامل مع معلوماتكم الشخصية بطريقة آمنة ومسؤولة.</p>
          <h1 style="font-weight: bold;">المعلومات التي نجمعها</h1>
          <p>قد نجمع معلومات شخصية مثل اسمك، عنوان بريدك الإلكتروني، رقم هاتفك، وتفاصيل الشركة عند التسجيل على منصتنا.</p>
          <h1 style="font-weight: bold;">كيف نستخدم معلوماتك</h1>
          <p>تُستخدم معلوماتك لتقديم خدماتنا وتحسينها، والتواصل معك، وضمان الامتثال للالتزامات القانونية.</p>
          <h1 style="font-weight: bold;">حقوقك</h1>
          <p>لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها. يمكنك أيضًا إلغاء الاشتراك في الاتصالات التسويقية في أي وقت.</p>
          <h1 style="font-weight: bold;">اتصل بنا</h1>
          <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية الخاصة بنا، يرجى الاتصال بنا على info@naqlah.com</p>
          <p>مرحبًا بكم في نقلة. نحن ملتزمون بحماية خصوصيتكم وضمان التعامل مع معلوماتكم الشخصية بطريقة آمنة ومسؤولة.</p>
          <h1 style="font-weight: bold;">المعلومات التي نجمعها</h1>
          <p>قد نجمع معلومات شخصية مثل اسمك، عنوان بريدك الإلكتروني، رقم هاتفك، وتفاصيل الشركة عند التسجيل على منصتنا.</p>
          <h1 style="font-weight: bold;">كيف نستخدم معلوماتك</h1>
          <p>تُستخدم معلوماتك لتقديم خدماتنا وتحسينها، والتواصل معك، وضمان الامتثال للالتزامات القانونية.</p>
          <h1 style="font-weight: bold;">حقوقك</h1>
          <p>لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها. يمكنك أيضًا إلغاء الاشتراك في الاتصالات التسويقية في أي وقت.</p>
          <h1 style="font-weight: bold;">اتصل بنا</h1>
          <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية الخاصة بنا، يرجى الاتصال بنا على info@naqlah.com</p>
          `;
  $('#privacy_terms').html(privacyContent);
});
function acceptTerms() {
  hideModal('privacy-terms-modal');
  document.getElementById('agreeTerms').checked = true;
}
