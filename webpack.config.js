const isDev = process.env.NODE_ENV === 'development'
//update

module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
