/* jshint node:true, es3:false */

module.exports = function(grunt) {
    'use strict';

    var webpack = require('webpack');

    var config = {
      target:  "web",
      cache:   false,
      devtool: '#source-map',
      entry: {
        main: "./ui/js/index.js"
      },
      output:  {
        path:          "www/js/",
        filename:      "[name].bundle.js"
      },

      plugins: [
        new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
        new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),

      ],
      module:  {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
      },
      externals: {
        jquery: "jQuery"
      },
      resolve: {
        modulesDirectories: [
          "ui/js",
          "node_modules"
        ],
        extensions: ["", ".json", ".js"]
      },
      node:    {
        __dirname: true,
        fs:        'empty'
      }
    };

    return {
        dist: config
    };

};


