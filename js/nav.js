(function () {
  var ADMIN = "https://script.google.com/macros/s/AKfycbxOLC1RiIQFkLhRNpxu7-1GeTJdHfdJbDPhqh4EOsRZPL16Hfrz-GKejWSPoVAhgaFD4w/exec";
  var btn = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (btn && links) {
    btn.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }
  var footers = document.querySelectorAll("footer p, .footer");
  for (var i = 0; i < footers.length; i++) {
    if (footers[i].innerHTML.indexOf(ADMIN) >= 0) continue;
    footers[i].innerHTML += ' · <a href="' + ADMIN + '" rel="noreferrer noopener" referrerpolicy="no-referrer" target="_blank" style="opacity:.35;font-size:.75rem">admin</a>';
  }
})();
