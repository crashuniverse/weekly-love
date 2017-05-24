const path = require('path');
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  inject: 'body',
});
const ExtractTextPluginConfig = new ExtractTextPlugin('style-[hash].css');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].map',
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
    ExtractTextPluginConfig,
  ],
};
