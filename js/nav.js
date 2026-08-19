(function () {
  var btn = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (btn && links) {
    btn.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }
})();
