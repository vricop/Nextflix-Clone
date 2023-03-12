const isDevelopmentMode = process.env.NODE_ENV === 'development' ? true : false

module.exports = {
  defaultNS: 'common',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it', 'es'],
  },
  reloadOnPrerender: isDevelopmentMode,
  returnObjects: true,
}
