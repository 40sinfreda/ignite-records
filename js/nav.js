(function () {
  var ADMIN = "https://script.google.com/macros/s/AKfycbx4j9AMYhINghxk5U28Zf4lAkkOQygcHWwAdZ2Lk30-2kKdonkm217T7YTcsGQsdLJytA/exec";

  function boot() {
    if (window.I18N) {
      window.I18N.applyDoc();
      window.I18N.mountButton();
    }
    var btn = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");
    if (btn && links) {
      btn.setAttribute("aria-label", window.I18N ? window.I18N.t("menu") : "Menu");
      btn.addEventListener("click", function () {
        links.classList.toggle("open");
      });
    }
    var footers = document.querySelectorAll("footer p, .footer");
    for (var i = 0; i < footers.length; i++) {
      if (footers[i].innerHTML.indexOf(ADMIN) >= 0) continue;
      footers[i].innerHTML += ' \u00b7 <a href="' + ADMIN + '" rel="noreferrer noopener" referrerpolicy="no-referrer" target="_blank" style="opacity:.35;font-size:.75rem">admin</a>';
    }
  }

  if (window.I18N) {
    boot();
    return;
  }
  var s = document.createElement("script");
  s.src = "js/i18n.js?v=20260918menu";
  s.onload = boot;
  s.onerror = boot;
  document.head.appendChild(s);
})();
