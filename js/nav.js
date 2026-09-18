(function () {
  var btn = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (btn && links) {
    btn.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }
  var footers = document.querySelectorAll("footer p, .footer");
  for (var i = 0; i < footers.length; i++) {
    if (footers[i].innerHTML.indexOf("admin.html") >= 0) continue;
    footers[i].innerHTML += ' · <a href="admin.html" style="opacity:.35;font-size:.75rem">admin</a>';
  }
})();
