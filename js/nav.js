(function () {
  if (window.I18N) {
    window.I18N.applyDoc();
    window.I18N.mountButton();
  }
  var ADMIN = "https://script.google.com/macros/s/AKfycbx4j9AMYhINghxk5U28Zf4lAkkOQygcHWwAdZ2Lk30-2kKdonkm217T7YTcsGQsdLJytA/exec";
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
})();
