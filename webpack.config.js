var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  inject: 'body'
});
var HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin();
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractTextPluginConfig = new ExtractTextPlugin('style.css');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    HotModuleReplacementPluginConfig,
    ExtractTextPluginConfig
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 9000
  }
};
