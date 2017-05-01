var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  inject: 'body'
});
var HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin();

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
    }]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    HotModuleReplacementPluginConfig
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 9000
  }
};
