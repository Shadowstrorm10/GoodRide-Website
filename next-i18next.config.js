const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    localePath: path.resolve('./app/locales')
  },
};
