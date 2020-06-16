// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//   },
//   exportTrailingSlash: true,
//   exportPathMap: function () {
//     return {
//       '/': { page: '/' },
//     };
//   },
// });

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
};
