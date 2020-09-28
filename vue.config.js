module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/simple-syntax-highlighter' : '',
  outputDir: 'docs',
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'preserve'
        return options
      })
  }
}
