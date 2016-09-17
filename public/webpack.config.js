const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/app.js',
  devtool: 'eval-source-map',
  output: {
    path: `${__dirname}/build/`,
    filename: 'bundle.js',
    publicPath: './'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.css', '.html', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      },
      {test: /\.html$/, loader: 'html-loader'},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader',
            {publicPath: './'})
      },
      {test: /\.json$/, loader: 'json'},
      {test: /\.jpg$/, loader: 'file-loader?name=img/[hash].[ext]'},
      {
        test: /\.(ttf|eot|woff2?)/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ],
  htmlLoader: {
    root: __dirname
  },
  devServer: {
    contentBase: '.',
    port: 3000
  }
};
