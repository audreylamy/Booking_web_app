module.exports = {
  presets: [
    '@vue/app'
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
}