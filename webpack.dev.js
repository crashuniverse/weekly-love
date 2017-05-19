const path = require('path');
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  inject: 'body',
});
const HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin();
const ExtractTextPluginConfig = new ExtractTextPlugin('style.css');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      }),
    }],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    HotModuleReplacementPluginConfig,
    ExtractTextPluginConfig,
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 9000,
  },
};
