window.I18N = (function () {
  var KEY = "igniteLang";
  var dict = {
    en: {
      artists: "Artists",
      music: "Music",
      playlists: "Playlists",
      contact: "Contact",
      menu: "Menu",
      back: "Back",
      home: "Home",
      roster: "Our Roster",
      theArtists: "The Artists",
      latest: "Latest Releases",
      theMusic: "The Music",
      listen: "Listen",
      getInTouch: "Get in Touch",
      name: "Name *",
      email: "Email *",
      message: "Message *",
      send: "Send Message",
      openingMail: "Opening your email app\u2026",
      tag: "Music Label",
      streamLine: "Listen to the full catalog and the latest release on Spotify. Open the artist page for every album.",
      listenSpotify: "Listen on Spotify",
      allAlbums: "All albums",
      openPage: "Open playlist page \u2192",
      footer: "\u00a9 2026 Ignite Records. All rights reserved.",
      loading: "Loading\u2026",
      notFound: "Artist not found.",
      gallery: "Gallery",
      discography: "Discography",
      allAlbumsSpotify: "All Albums on Spotify",
      fullCatalog: "Full catalog on Spotify",
      openSpotify: "Open on Spotify",
      follow: "Follow",
      switchTo: "Language",
      langEn: "English",
      langHe: "\u05e2\u05d1\u05e8\u05d9\u05ea"
    },
    he: {
      artists: "\u05d0\u05de\u05e0\u05d9\u05dd",
      music: "\u05de\u05d5\u05d6\u05d9\u05e7\u05d4",
      playlists: "\u05e4\u05dc\u05d9\u05d9\u05dc\u05d9\u05e1\u05d8\u05d9\u05dd",
      contact: "\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8",
      menu: "\u05ea\u05e4\u05e8\u05d9\u05d8",
      back: "\u05d7\u05d6\u05e8\u05d4",
      home: "\u05e8\u05d0\u05e9\u05d9",
      roster: "\u05d4\u05e8\u05d5\u05e1\u05d8\u05e8",
      theArtists: "\u05d4\u05d0\u05de\u05e0\u05d9\u05dd",
      latest: "\u05d4\u05d5\u05e6\u05d0\u05d5\u05ea \u05d7\u05d3\u05e9\u05d5\u05ea",
      theMusic: "\u05d4\u05de\u05d5\u05d6\u05d9\u05e7\u05d4",
      listen: "\u05d4\u05d0\u05d6\u05e0\u05d4",
      getInTouch: "\u05e6\u05e8\u05d5 \u05e7\u05e9\u05e8",
      name: "\u05e9\u05dd *",
      email: "\u05d0\u05d9\u05de\u05d9\u05d9\u05dc *",
      message: "\u05d4\u05d5\u05d3\u05e2\u05d4 *",
      send: "\u05e9\u05dc\u05d9\u05d7\u05ea \u05d4\u05d5\u05d3\u05e2\u05d4",
      openingMail: "\u05e4\u05d5\u05ea\u05d7 \u05d0\u05ea \u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d9\u05ea \u05d4\u05d3\u05d5\u05d0\u05e8\u2026",
      tag: "\u05dc\u05d9\u05d9\u05d1\u05dc \u05de\u05d5\u05d6\u05d9\u05e7\u05d4",
      streamLine: "\u05de\u05e7\u05e9\u05d9\u05d1\u05d9\u05dd \u05dc\u05e7\u05d8\u05dc\u05d5\u05d2 \u05d4\u05de\u05dc\u05d0 \u05d5\u05dc\u05d4\u05d5\u05e6\u05d0\u05d4 \u05d4\u05d7\u05d3\u05e9\u05d4 \u05d1\u05e1\u05e4\u05d5\u05d8\u05d9\u05e4\u05d9\u05d9. \u05d1\u05d3\u05e3 \u05d4\u05d0\u05de\u05df \u05ea\u05de\u05e6\u05d0\u05d5 \u05db\u05dc \u05d4\u05d0\u05dc\u05d1\u05d5\u05de\u05d9\u05dd.",
      listenSpotify: "\u05d4\u05d0\u05d6\u05e0\u05d4 \u05d1\u05e1\u05e4\u05d5\u05d8\u05d9\u05e4\u05d9\u05d9",
      allAlbums: "\u05db\u05dc \u05d4\u05d0\u05dc\u05d1\u05d5\u05de\u05d9\u05dd",
      openPage: "\u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05e4\u05dc\u05d9\u05d9\u05dc\u05d9\u05e1\u05d8 \u2190",
      footer: "\u00a9 2026 Ignite Records. \u05db\u05dc \u05d4\u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05e9\u05de\u05d5\u05e8\u05d5\u05ea.",
      loading: "\u05d8\u05d5\u05e2\u05df\u2026",
      notFound: "\u05d4\u05d0\u05de\u05df \u05dc\u05d0 \u05e0\u05de\u05e6\u05d0.",
      gallery: "\u05d2\u05dc\u05e8\u05d9\u05d4",
      discography: "\u05d3\u05d9\u05e1\u05e7\u05d5\u05d2\u05e8\u05e4\u05d9\u05d4",
      allAlbumsSpotify: "\u05db\u05dc \u05d4\u05d0\u05dc\u05d1\u05d5\u05de\u05d9\u05dd \u05d1\u05e1\u05e4\u05d5\u05d8\u05d9\u05e4\u05d9\u05d9",
      fullCatalog: "\u05d4\u05e7\u05d8\u05dc\u05d5\u05d2 \u05d4\u05de\u05dc\u05d0 \u05d1\u05e1\u05e4\u05d5\u05d8\u05d9\u05e4\u05d9\u05d9",
      openSpotify: "\u05e4\u05ea\u05d9\u05d7\u05d4 \u05d1\u05e1\u05e4\u05d5\u05d8\u05d9\u05e4\u05d9\u05d9",
      follow: "\u05e2\u05e7\u05d1\u05d5",
      switchTo: "\u05e9\u05e4\u05d4",
      langEn: "English",
      langHe: "\u05e2\u05d1\u05e8\u05d9\u05ea"
    }
  };

  function lang() {
    try {
      var v = localStorage.getItem(KEY);
      return v === "he" ? "he" : "en";
    } catch (e) {
      return "en";
    }
  }

  function t(key) {
    var pack = dict[lang()] || dict.en;
    return pack[key] || dict.en[key] || key;
  }

  function setLang(next) {
    if (next === lang()) return;
    try { localStorage.setItem(KEY, next === "he" ? "he" : "en"); } catch (e) {}
    location.reload();
  }

  function applyDoc() {
    var he = lang() === "he";
    document.documentElement.lang = he ? "he" : "en";
    document.documentElement.dir = he ? "rtl" : "ltr";
    document.body.classList.toggle("lang-he", he);
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
    }
    var ph = document.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < ph.length; j++) {
      ph[j].setAttribute("placeholder", t(ph[j].getAttribute("data-i18n-placeholder")));
    }
  }

  function visibleList(list) {
    var he = lang() === "he";
    return (list || []).filter(function (item) { return he || !item.heOnly; });
  }

  function visiblePlaylists() {
    return visibleList((window.IGNITE && window.IGNITE.playlists) || []);
  }

  function visibleArtists() {
    return visibleList((window.IGNITE && window.IGNITE.artists) || []);
  }

  function textOf(item, field) {
    if (!item) return "";
    if (lang() === "he" && item[field + "He"]) return item[field + "He"];
    return item[field] || "";
  }

  var UK = '<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="30" fill="#012169"/><path d="M0 10L60 50M60 10L0 50" stroke="#fff" stroke-width="10"/><path d="M0 10L60 50M60 10L0 50" stroke="#C8102E" stroke-width="6"/><path d="M30 0v60M0 30h60" stroke="#fff" stroke-width="16"/><path d="M30 0v60M0 30h60" stroke="#C8102E" stroke-width="10"/></svg>';
  var IL = '<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="30" fill="#fff"/><path d="M0 16h60M0 44h60" stroke="#0038b8" stroke-width="8"/><path d="M30 21l8.7 15H21.3z" fill="none" stroke="#0038b8" stroke-width="2.2"/><path d="M30 39l8.7-15H21.3z" fill="none" stroke="#0038b8" stroke-width="2.2"/></svg>';

  function injectCss() {
    if (document.getElementById("langMenuCss")) return;
    var css = document.createElement("style");
    css.id = "langMenuCss";
    css.textContent =
      ".lang-wrap{position:relative;display:inline-flex;align-items:center}" +
      ".lang-btn{width:34px;height:34px;padding:0;border:1px solid rgba(245,166,35,.16);border-radius:50%;overflow:hidden;background:#111;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}" +
      ".lang-btn svg{width:34px;height:34px;display:block}" +
      ".lang-btn[aria-expanded=true]{border-color:#F5A623}" +
      ".lang-menu{display:none;position:absolute;top:calc(100% + 8px);inset-inline-end:0;min-width:160px;background:#1b1b1b;border:1px solid rgba(245,166,35,.2);border-radius:10px;padding:6px;z-index:200;box-shadow:0 10px 28px rgba(0,0,0,.45)}" +
      ".lang-wrap.open .lang-menu{display:block}" +
      ".lang-opt{width:100%;display:flex;align-items:center;gap:10px;background:transparent;border:0;color:#F0EDE8;padding:8px 10px;border-radius:8px;cursor:pointer;font:600 14px Assistant,Barlow,sans-serif;text-align:start}" +
      ".lang-opt svg{width:22px;height:22px;flex:0 0 22px;border-radius:50%}" +
      ".lang-opt:hover,.lang-opt.active{background:rgba(245,166,35,.12)}";
    document.head.appendChild(css);
  }

  function closeMenus() {
    var open = document.querySelectorAll(".lang-wrap.open");
    for (var i = 0; i < open.length; i++) {
      open[i].classList.remove("open");
      var b = open[i].querySelector(".lang-btn");
      if (b) b.setAttribute("aria-expanded", "false");
    }
  }

  function mountButton() {
    if (document.getElementById("langBtn")) return;
    injectCss();
    var wrap = document.createElement("div");
    wrap.className = "lang-wrap";
    var current = lang();
    var btn = document.createElement("button");
    btn.id = "langBtn";
    btn.type = "button";
    btn.className = "lang-btn";
    btn.setAttribute("aria-label", t("switchTo"));
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = current === "he" ? IL : UK;
    var menu = document.createElement("div");
    menu.className = "lang-menu";
    menu.innerHTML =
      '<button type="button" class="lang-opt' + (current === "en" ? " active" : "") + '" data-lang="en">' + UK + '<span>' + t("langEn") + '</span></button>' +
      '<button type="button" class="lang-opt' + (current === "he" ? " active" : "") + '" data-lang="he">' + IL + '<span>' + t("langHe") + '</span></button>';
    wrap.appendChild(btn);
    wrap.appendChild(menu);
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var willOpen = !wrap.classList.contains("open");
      closeMenus();
      wrap.classList.toggle("open", willOpen);
      btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      var opt = e.target.closest("[data-lang]");
      if (!opt) return;
      e.stopPropagation();
      setLang(opt.getAttribute("data-lang"));
    });
    document.addEventListener("click", closeMenus);
    var links = document.getElementById("navLinks");
    var inner = document.querySelector("nav .inner") || document.querySelector("nav");
    if (links) links.appendChild(wrap);
    else if (inner) inner.appendChild(wrap);
  }

  return {
    lang: lang,
    t: t,
    setLang: setLang,
    applyDoc: applyDoc,
    visiblePlaylists: visiblePlaylists,
    visibleArtists: visibleArtists,
    textOf: textOf,
    mountButton: mountButton
  };
})();
