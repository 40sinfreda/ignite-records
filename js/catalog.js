window.IGNITE = {
  artists: [
    {
      slug: "sean-levine",
      name: "Sean Levine",
      genre: "Singer / Songwriter",
      photo: "artists/sean-levine.jpg",
      youtube: "https://www.youtube.com/@SEAN_LEVINE",
      spotifyArtistId: "6wKZVhE7JPFgDdHonDuWiJ",
      spotifyArtistUrl: "https://open.spotify.com/artist/6wKZVhE7JPFgDdHonDuWiJ",
      ai: true,
      bio: ["Welcome to the official channel of Sean Levine.", "Original rock catalog on Spotify and YouTube."],
      albums: [
        { title: "BEAUTIFUL DISASTER", id: "5KhQQ68HQwAva4oaizWKQ5" },
        { title: "Happy Days", id: "1VKxMF9LDjn9fFZ6SXQ1EQ" },
        { title: "CAN YOU HEAR ME?", id: "5cJ9rVCakOabCrVg4gzw1K" }
      ]
    },
    {
      slug: "marli-west",
      name: "Marli West",
      genre: "Singer / Songwriter",
      photo: "artists/marli-west.jpg",
      youtube: "https://www.youtube.com/@MARLI_WEST",
      spotifyArtistId: "1YYhdcqL8v4RBGWUD2XwNX",
      spotifyArtistUrl: "https://open.spotify.com/artist/1YYhdcqL8v4RBGWUD2XwNX",
      ai: true,
      bio: ["Marli West is a singer-songwriter with a modern-rock voice."],
      albums: [
        { title: "WHAT DID YOU DO?", id: "5xkKPkkgkDH2NACvH8pZC2" },
        { title: "I'M ON MY WAY", id: "0ViDyHnGKRm2wimwVPXUIG" },
        { title: "WE ARE LIGHT", id: "5BOfdDEGNX6Rshq3R4AIAE" }
      ]
    },
    {
      slug: "teomic-fire",
      name: "Teomic Fire",
      genre: "Electronic / High Energy",
      photo: "artists/teomic-fire.jpg",
      youtube: "https://www.youtube.com/@TEOMICFIRE",
      spotifyArtistId: "1q4AeO5g6ahHV5GxbBYoEt",
      spotifyArtistUrl: "https://open.spotify.com/artist/1q4AeO5g6ahHV5GxbBYoEt",
      ai: true,
      gallery: ["artists/teomic-1.jpg","artists/teomic-2.jpg","artists/teomic-3.jpg"],
      bio: ["TEOMIC FIRE is a Dutch electronic duo."],
      albums: [
        { title: "HIGH ENERGY", id: "4RikPOmKaec4BVtPx7fGhi" },
        { title: "WE ARE LIGHT", id: "5BOfdDEGNX6Rshq3R4AIAE" }
      ]
    },
    {
      slug: "nixie-row",
      name: "Nixie Row",
      genre: "Singer / Songwriter / Indie-Soul",
      photo: "artists/nixie-row.jpg",
      youtube: "https://www.youtube.com/@nixierow",
      instagram: "https://www.instagram.com/nixierow/",
      facebook: "https://www.facebook.com/NIXIEROW",
      spotifyArtistId: "577132Wt0yU5yE7cJw2l5d",
      spotifyArtistUrl: "https://open.spotify.com/artist/577132Wt0yU5yE7cJw2l5d",
      ai: true,
      bio: ["Nixie Row, East London vintage-modern fusion."],
      albums: [{ title: "MY TIME", id: "1YlgXuafFIqVQetPn1OKTE" }]
    }
  ],
  playlists: [
    {
      id: "global-trance",
      title: "Global Trance Hits",
      label: "Curated playlist",
      desc: "The hub for high-energy tech, psy, and uplifting trance. Handpicked underground cuts and global anthems, updated every Tuesday.",
      cover: "brand/global-trance-hits.png",
      spotifyId: "6LVMs3vAwFV0gkwrCxLN8P",
      submit: "playlist-trance.html"
    },
    {
      id: "top100",
      title: "TOP 100 US",
      label: "Weekly chart",
      desc: "The best songs in America, updated every Thursday. 100 tracks featuring the biggest hits alongside selected Ignite Records artists.",
      cover: "brand/top100.jpg",
      spotifyId: "1X6UzSIauC4xc061NcFL2w",
      submit: "playlist-top100-us.html"
    },
    {
      id: "gym-hits",
      title: "IGNITE GYM HITS",
      label: "Weekly workout",
      desc: "High-energy workout mix scanned each week from leading music sites. Approved independent tracks every 5 songs. Updated every Wednesday.",
      cover: "brand/image.jpg",
      spotifyId: "61zQs4WdaOjzkXC3ctR4ZU",
      submit: "playlist-gym-hits.html"
    },
    {
      id: "rock-hits",
      title: "IGNITE ROCK HITS",
      label: "Weekly rock",
      desc: "Billboard rock and alternative charts, plus approved independent tracks every 5 songs. Updated weekly.",
      cover: "brand/ignite-rock-hits.svg?v=2",
      spotifyId: "3s5MZEfHafUQAqFSnZIDpM",
      submit: "playlist-rock-hits.html"
    }
  ]
};
window.IGNITE.getArtist = function (slug) {
  return window.IGNITE.artists.find(function (a) { return a.slug === slug; });
};
