const isDev = process.env.NODE_ENV === 'development'
//update

module.exports = {
  entry: './client/index.js',
  mode: isDev ? 'development' : 'production',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
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
