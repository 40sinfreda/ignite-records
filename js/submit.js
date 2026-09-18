window.igniteSubmit = function (opts) {
  var ADMIN = "https://script.google.com/macros/s/AKfycbx4j9AMYhINghxk5U28Zf4lAkkOQygcHWwAdZ2Lk30-2kKdonkm217T7YTcsGQsdLJytA/exec";
  return new Promise(function (resolve, reject) {
    var name = "igniteSub" + Date.now();
    var t = setTimeout(function () { cleanup(); reject(new Error("timeout")); }, 28000);
    function cleanup() {
      clearTimeout(t);
      delete window[name];
      if (s && s.parentNode) s.parentNode.removeChild(s);
    }
    window[name] = function (data) { cleanup(); resolve(data || {}); };
    var q = [
      "action=submit",
      "id=" + encodeURIComponent(opts.id || ""),
      "fullname=" + encodeURIComponent(opts.fullname || ""),
      "stagename=" + encodeURIComponent(opts.stagename || ""),
      "email=" + encodeURIComponent(opts.email || ""),
      "trackId=" + encodeURIComponent(opts.trackId || ""),
      "videoId=" + encodeURIComponent(opts.videoId || ""),
      "trackurl=" + encodeURIComponent(opts.trackurl || ""),
      "youtube=" + encodeURIComponent(opts.youtube || ""),
      "marketing=" + encodeURIComponent(opts.marketing ? "true" : "false"),
      "callback=" + name,
      "_=" + Date.now()
    ].join("&");
    var s = document.createElement("script");
    s.referrerPolicy = "no-referrer";
    s.onerror = function () { cleanup(); reject(new Error("blocked")); };
    s.src = ADMIN + "?" + q;
    document.body.appendChild(s);
  });
};
