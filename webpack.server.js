const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const webpackNodeExternals = require('webpack-node-externals')



const serverConfig = {
  // inform webpack we are building a bundle for node js
  target: 'node',
  entry: ["@babel/polyfill",'./src/server/index.js'],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, serverConfig)