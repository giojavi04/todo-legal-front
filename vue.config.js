module.exports = {
  publicPath: './',

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },

  configureWebpack: {
    devtool: 'source-map'
  },

  lintOnSave: undefined,
}
