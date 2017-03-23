'use strict';

const webpack = require('webpack');

module.exports = {
  entry: './src/joi-browser.js',
  output: {
    library: 'Joi',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: 'joi-browser.js'
  },
  node: {
    global: false,
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  }
};
