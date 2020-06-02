if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        a[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const a = document.createElement('script');
              (a.src = e), document.head.appendChild(a), (a.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
          return a[e];
        })
      );
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e));
    },
    a = { require: Promise.resolve(s) };
  self.define = (s, t, n) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {};
        const i = { uri: location.origin + s.slice(1) };
        return Promise.all(
          t.map((s) => {
            switch (s) {
              case 'exports':
                return a;
              case 'module':
                return i;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = n(...e);
          return a.default || (a.default = s), a;
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
        { url: '/', revision: '3a2w0nY5A-3vFlvAiDfoU' },
        {
          url: '/_next/static/3a2w0nY5A-3vFlvAiDfoU/_buildManifest.js',
          revision: 'fb96ae7926f5104f50f0cf1b3a23a9b5',
        },
        {
          url: '/_next/static/3a2w0nY5A-3vFlvAiDfoU/_ssgManifest.js',
          revision: 'abee47769bf307639ace4945f9cfd4ff',
        },
        {
          url: '/_next/static/3a2w0nY5A-3vFlvAiDfoU/pages/_app.js',
          revision: '38e962f82b04507c3c339fc62665b407',
        },
        {
          url: '/_next/static/3a2w0nY5A-3vFlvAiDfoU/pages/_error.js',
          revision: '3e22c9f52ac0c7784b40bd2ecc88acf1',
        },
        {
          url: '/_next/static/3a2w0nY5A-3vFlvAiDfoU/pages/index.js',
          revision: 'd7f1b7cfcdf13a6381ad219f9a9c27ab',
        },
        {
          url: '/_next/static/3a2w0nY5A-3vFlvAiDfoU/pages/project/[path].js',
          revision: '356152ec97a25fe2b04c7cae9d945cf6',
        },
        {
          url: '/_next/static/chunks/10.d8bbd2ce1130732bade4.js',
          revision: '073e3361c4df1d1dae11be287dfc15f7',
        },
        {
          url:
            '/_next/static/chunks/36719cd325c353e29d964539a2e85d5d1a18e13c.4038ad4773b90c02683a.js',
          revision: '4f4b0632416de88bbc30b2758b37c0fd',
        },
        {
          url: '/_next/static/chunks/commons.d97d161a00b380696f22.js',
          revision: 'a9b6c9e6fda1043d60458718e71c533d',
        },
        {
          url: '/_next/static/chunks/framework.42ad63201e0238e8f241.js',
          revision: 'ff174a627fd207ab034db22e2bd96c46',
        },
        {
          url: '/_next/static/css/8d9c9857ade9893c96e9.css',
          revision: '925e74e6f196bbfb1f279e5309fc69ea',
        },
        {
          url: '/_next/static/runtime/main-8b6ddcfca155cbd76f5c.js',
          revision: '709a580cdb342ef746cbf267b908fb5a',
        },
        {
          url: '/_next/static/runtime/polyfills-87b43bd434c89361559f.js',
          revision: '4f595eb110a6b527f9b3470cd188c8a5',
        },
        {
          url: '/_next/static/runtime/webpack-05b4f9dd694196e4773f.js',
          revision: 'b121beefa3d450954b6bacc363a5d281',
        },
        { url: '/favicon.ico', revision: '412192267449ea67eebabd3e62acfe51' },
        { url: '/manifest.json', revision: '688128be216cc2f753fe641590f2fcd3' },
        { url: '/zeit.svg', revision: '7b2022f3692adf56949c7019f7ebb670' },
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
