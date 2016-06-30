var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/index.js',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: './.dist',
    filename: 'server.js'
  },
  module: {
    loaders: [
      {
        test : /\.js$/,
        loader : 'babel-loader',
        exclude : /node_modules/,
        query : {
          presets : [ 'es2015' ],
          cacheDirectory : true
        }
      }
    ]
  },
  externals: nodeModules
};
