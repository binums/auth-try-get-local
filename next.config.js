const withPWA = require('next-pwa');
const NextI18Next = require('next-i18next').default;

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
});
