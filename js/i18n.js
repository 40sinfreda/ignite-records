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
      streamLine: "Stream the full catalog and latest release on Spotify. Open the artist page for every album.",
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
      switchTo: "Switch to Hebrew"
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
      streamLine: "\u05de\u05e7\u05e9\u05d9\u05d1\u05d9\u05dd \u05d0\u05ea \u05d4\u05e7\u05d8\u05dc\u05d5\u05d2 \u05d4\u05de\u05dc\u05d0 \u05d5\u05d0\u05ea \u05d4\u05d4\u05d5\u05e6\u05d0\u05d4 \u05d4\u05d7\u05d3\u05e9\u05d4 \u05d1\u05e1\u05e4\u05d5\u05d8\u05d9\u05e4\u05d9\u05d9. \u05d1\u05d3\u05e3 \u05d4\u05d0\u05de\u05df \u05ea\u05de\u05e6\u05d0\u05d5 \u05db\u05dc \u05d4\u05d0\u05dc\u05d1\u05d5\u05de\u05d9\u05dd.",
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
      switchTo: "\u05de\u05e2\u05d1\u05e8 \u05dc\u05d0\u05e0\u05d2\u05dc\u05d9\u05ea"
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
    try { localStorage.setItem(KEY, next === "he" ? "he" : "en"); } catch (e) {}
    location.reload();
  }

  function toggle() {
    setLang(lang() === "he" ? "en" : "he");
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

  function visiblePlaylists() {
    var list = (window.IGNITE && window.IGNITE.playlists) || [];
    var he = lang() === "he";
    return list.filter(function (p) { return he || !p.heOnly; });
  }

  function textOf(item, field) {
    if (!item) return "";
    if (lang() === "he" && item[field + "He"]) return item[field + "He"];
    return item[field] || "";
  }

  var UK = '<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="30" fill="#012169"/><path d="M0 10L60 50M60 10L0 50" stroke="#fff" stroke-width="10"/><path d="M0 10L60 50M60 10L0 50" stroke="#C8102E" stroke-width="6"/><path d="M30 0v60M0 30h60" stroke="#fff" stroke-width="16"/><path d="M30 0v60M0 30h60" stroke="#C8102E" stroke-width="10"/></svg>';
  var IL = '<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="30" fill="#fff"/><path d="M0 16h60M0 44h60" stroke="#0038b8" stroke-width="8"/><path d="M30 21l8.7 15H21.3z" fill="none" stroke="#0038b8" stroke-width="2.2"/><path d="M30 39l8.7-15H21.3z" fill="none" stroke="#0038b8" stroke-width="2.2"/></svg>';

  function mountButton() {
    if (document.getElementById("langBtn")) return;
    var btn = document.createElement("button");
    btn.id = "langBtn";
    btn.type = "button";
    btn.className = "lang-btn";
    btn.setAttribute("aria-label", t("switchTo"));
    btn.title = t("switchTo");
    btn.innerHTML = lang() === "he" ? IL : UK;
    btn.addEventListener("click", toggle);
    var links = document.getElementById("navLinks");
    var inner = document.querySelector("nav .inner") || document.querySelector("nav");
    if (links) links.appendChild(btn);
    else if (inner) inner.appendChild(btn);
  }

  return {
    lang: lang,
    t: t,
    setLang: setLang,
    toggle: toggle,
    applyDoc: applyDoc,
    visiblePlaylists: visiblePlaylists,
    textOf: textOf,
    mountButton: mountButton
  };
})();
