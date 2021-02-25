const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common')

const nconf = require('../src/config');

const envKeys = Object.keys(nconf).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(nconf[next]);
  return prev;
}, {});

module.exports = merge(commonConfig, {
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8000 
  },
  devtool: 'eval-source-map',
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      inject: true
    }),
    new webpack.DefinePlugin(envKeys),
    new webpack.HotModuleReplacementPlugin()
  ]
});
