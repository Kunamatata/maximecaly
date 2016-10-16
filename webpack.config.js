var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    'main': "./scripts/main.js",
    'weather': "./scripts/weather.js",
    'countdown': "./scripts/countdown.js",
    'animations': "./scripts/animations.js"
  },
  output: {
    path: __dirname + "\\dist",
    filename: "./scripts/[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      excludeChunks: ['countdown']
    }),
    new HtmlWebpackPlugin({
      filename: 'surprise.html',
      template: 'surprise.html',
      excludeChunks: ['animations', 'main']
    }),
    new CopyWebpackPlugin([{
      from: 'styles/',
      to: 'styles/'
    }, {
      from: 'img/',
      to: 'img/'
    },
    {
      from: 'font/',
      to: 'font/'
    }]),
    new webpack.ProvidePlugin({
      "window.jQuery": "jquery"
    })
  ],
  watch: true,
}