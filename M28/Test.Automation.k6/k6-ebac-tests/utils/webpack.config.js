
require('dotenv').config()

const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    user: './k6-ebac-tests/simulations/user.test.js'
  },
  resolve: {
    extensions: ['.ts', '.js','.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].test.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
};

