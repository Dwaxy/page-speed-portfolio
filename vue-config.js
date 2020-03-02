module.exports = {
  module: {
    rules: [
      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  chainWebpack: config => {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: 'Source Sans Pro' },
          { family: 'Open Sans' },
          { family: 'Bitter' }
        ]
      })
    ];
  }
};