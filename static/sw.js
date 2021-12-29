importScripts('/_nuxt/workbox.6041bd81.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/115eba2.js",
    "revision": "0940adbafbd767f3488311052145e933"
  },
  {
    "url": "/_nuxt/1d59dce.js",
    "revision": "cc1a88fb80f94194abcb19108c214b19"
  },
  {
    "url": "/_nuxt/2cc7508.js",
    "revision": "a0befb5c756b92b9877ae1b469c60cd9"
  },
  {
    "url": "/_nuxt/5e0676b.js",
    "revision": "e460045d20d774f9dc38548bcb03b282"
  },
  {
    "url": "/_nuxt/6433f91.js",
    "revision": "f8b6bcf9286e24543d32734fdf8f4ec0"
  },
  {
    "url": "/_nuxt/6af40c4.js",
    "revision": "0c639029d97443432c1188c5736f43cc"
  },
  {
    "url": "/_nuxt/6e29f7b.js",
    "revision": "4fe798f0c987b388093b483b30ea5b3f"
  },
  {
    "url": "/_nuxt/78aa2b2.js",
    "revision": "836330204fd2ec7083c3437050088e8d"
  },
  {
    "url": "/_nuxt/7ad9b0c.js",
    "revision": "ae1299d7d13475b0584ff6d09f0afbfd"
  },
  {
    "url": "/_nuxt/7bc4838.js",
    "revision": "6e7d65c363dbf8c7ca4c1a380cae93c0"
  },
  {
    "url": "/_nuxt/8a49b29.js",
    "revision": "58099aa3d6e36fcb62d1fb0348c15c05"
  },
  {
    "url": "/_nuxt/8b9d521.js",
    "revision": "5af07122d87aa36e5aefe2286fa74f0e"
  },
  {
    "url": "/_nuxt/986602b.js",
    "revision": "92e3bd22c3d0fa61d4fca37ed15f0443"
  },
  {
    "url": "/_nuxt/9bb5f1c.js",
    "revision": "818f0a235d97f17afdc27e641e8002d1"
  },
  {
    "url": "/_nuxt/9e609b2.js",
    "revision": "7e9e62763dc9dc24a395b8fb40025589"
  },
  {
    "url": "/_nuxt/a355949.js",
    "revision": "9143b531a9891d58c073d1d5f716ff90"
  },
  {
    "url": "/_nuxt/cd6b564.js",
    "revision": "f75ede73d12f2fb3cb93dc4b9af9cb6e"
  },
  {
    "url": "/_nuxt/d738b76.js",
    "revision": "2e12f60a629bf4e79a87f3c712226995"
  },
  {
    "url": "/_nuxt/ddc0138.js",
    "revision": "472dfa0a1fdc1ab192cad6c7dda65e20"
  },
  {
    "url": "/_nuxt/e3ccd87.js",
    "revision": "09c2b917ddffb180f7cb1d136b411f23"
  },
  {
    "url": "/_nuxt/e67aacf.js",
    "revision": "b786113dcdfb0d5e51876f16d0b14ce2"
  },
  {
    "url": "/_nuxt/e68af4c.js",
    "revision": "1209b2b736ce5f75654600f1683c3bd4"
  },
  {
    "url": "/_nuxt/ef3e699.js",
    "revision": "ab383f595e6504fd3f8a86b4cb499374"
  },
  {
    "url": "/_nuxt/f176475.js",
    "revision": "b6e64d0d25fafbd93f84b05a5694c631"
  },
  {
    "url": "/_nuxt/f425cf9.js",
    "revision": "98979838978f88fb52f996deeaace88d"
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
