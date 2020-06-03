if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        c[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const c = document.createElement('script');
              (c.src = e), document.head.appendChild(c), (c.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!c[e]) throw new Error(`Module ${e} didn’t register its module`);
          return c[e];
        })
      );
    },
    s = (s, c) => {
      Promise.all(s.map(e)).then((e) => c(1 === e.length ? e[0] : e));
    },
    c = { require: Promise.resolve(s) };
  self.define = (s, r, n) => {
    c[s] ||
      (c[s] = Promise.resolve().then(() => {
        let c = {};
        const a = { uri: location.origin + s.slice(1) };
        return Promise.all(
          r.map((s) => {
            switch (s) {
              case 'exports':
                return c;
              case 'module':
                return a;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = n(...e);
          return c.default || (c.default = s), c;
        });
      }));
  };
}
define('./sw.js', ['./workbox-e032be30'], function (e) {
  'use strict';
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/', revision: 'v5-MlrbyZnZtOVJRyrdkd' },
        {
          url:
            '/_next/static/chunks/503517357ffa78c1874d858633cd1256ec7e5c53.871c46e263a226b1a89d.js',
          revision: '045df059221694f8075148aaae03b9ad',
        },
        {
          url: '/_next/static/chunks/9.49588bce5246d982080d.js',
          revision: 'fc03a2de5f45e3c1857ef7b5b8129605',
        },
        {
          url: '/_next/static/chunks/commons.921b3da692da0b8e589d.js',
          revision: 'b4051411678d9e0cec8a57973cc0ee53',
        },
        {
          url: '/_next/static/chunks/framework.42ad63201e0238e8f241.js',
          revision: 'ff174a627fd207ab034db22e2bd96c46',
        },
        {
          url: '/_next/static/css/ef04c68f5aa2984f57da.css',
          revision: '925e74e6f196bbfb1f279e5309fc69ea',
        },
        {
          url: '/_next/static/runtime/main-7c4fa5c8fa2cdd9d7cff.js',
          revision: '2d0a239372c1641005d28d6b3a55815a',
        },
        {
          url: '/_next/static/runtime/polyfills-0dc18eca57569c2cfd1d.js',
          revision: 'fd009b0316d2bdb505c57eaad1b5e082',
        },
        {
          url: '/_next/static/runtime/webpack-6f07f063ccc5c56be502.js',
          revision: 'f7f3c3915a12c0f3cf9dab655b756233',
        },
        {
          url: '/_next/static/v5-MlrbyZnZtOVJRyrdkd/_buildManifest.js',
          revision: 'fb96ae7926f5104f50f0cf1b3a23a9b5',
        },
        {
          url: '/_next/static/v5-MlrbyZnZtOVJRyrdkd/_ssgManifest.js',
          revision: 'abee47769bf307639ace4945f9cfd4ff',
        },
        {
          url: '/_next/static/v5-MlrbyZnZtOVJRyrdkd/pages/_app.js',
          revision: 'cd08f9727d39d40c8dad0521ee25bc09',
        },
        {
          url: '/_next/static/v5-MlrbyZnZtOVJRyrdkd/pages/_error.js',
          revision: '90b049a0f28caf770d7edf66dae6e3fc',
        },
        {
          url: '/_next/static/v5-MlrbyZnZtOVJRyrdkd/pages/index.js',
          revision: '0e00b4058b259809067e03863f3d38cd',
        },
        {
          url: '/icons/android-chrome-192x192.png',
          revision: '8c30caf2937dad4e4181e2cc7c3d3c8f',
        },
        {
          url: '/icons/apple-touch-icon.png',
          revision: 'aa84b3913187950cf4e4079e5a5a2f78',
        },
        {
          url: '/icons/favicon.ico',
          revision: '940cc6bd3bb401fc3be83df3dfd09488',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: '837ab4469c705c188326cec571ecb227',
        },
        {
          url: '/images/placeholder.jpg',
          revision: '069c7191a3551e5d2ac8624444fac3ad',
        },
        { url: '/manifest.json', revision: '688128be216cc2f753fe641590f2fcd3' },
        { url: '/svgs/line.svg', revision: '036d7b42635b06648b26167c09680e2a' },
        { url: '/svgs/zeit.svg', revision: 'ad44f077699772c99dd99678980a2908' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/use\.fontawesome\.com\/releases\/.*/i,
      new e.CacheFirst({
        cacheName: 'font-awesome',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'others',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    );
});
