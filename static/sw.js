importScripts('/_nuxt/workbox.6041bd81.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/047ecb2.js",
    "revision": "6870ea9cac8a0961c36fd6f7ab0a97d2"
  },
  {
    "url": "/_nuxt/115eba2.js",
    "revision": "0940adbafbd767f3488311052145e933"
  },
  {
    "url": "/_nuxt/2dc5c0c.js",
    "revision": "09d9178a8db454b906a89f4659492bd0"
  },
  {
    "url": "/_nuxt/3064936.js",
    "revision": "8e6c6a9fd9e7e14e27760298129bcd97"
  },
  {
    "url": "/_nuxt/4dafb82.js",
    "revision": "3f6ea5495ec676c4f80697d5c7feff51"
  },
  {
    "url": "/_nuxt/4fe71c1.js",
    "revision": "af6d59b9ac42bb088ebc57409e5f3a85"
  },
  {
    "url": "/_nuxt/5523e82.js",
    "revision": "b4c1915dac809978707648002556ec9d"
  },
  {
    "url": "/_nuxt/6282d25.js",
    "revision": "daf6c0aaa10a13c489c4a565d1e7f497"
  },
  {
    "url": "/_nuxt/658648d.js",
    "revision": "c4e46c7351616f424675be03f9a9fd32"
  },
  {
    "url": "/_nuxt/7ad7dce.js",
    "revision": "8149793046863b2d0856a3749d31824d"
  },
  {
    "url": "/_nuxt/7b0d143.js",
    "revision": "d8c7d71fd3268c52dd5b79ca9f24a180"
  },
  {
    "url": "/_nuxt/7e57603.js",
    "revision": "f64b86dfe0f53f46b58b10e6c7639332"
  },
  {
    "url": "/_nuxt/c6e373c.js",
    "revision": "c3e12594648db3a088074a0f197b6714"
  },
  {
    "url": "/_nuxt/cb8a54f.js",
    "revision": "c4a4ade996c2f71b60b712d071623428"
  },
  {
    "url": "/_nuxt/f99c68d.js",
    "revision": "b1af76662b7d30a5268a1111d82d51fb"
  },
  {
    "url": "/_nuxt/f9d3ec7.js",
    "revision": "1d1deb20ff23a09df7e4edc5c20dc177"
  }
], {
  "cacheId": "niaportal-frontend",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
