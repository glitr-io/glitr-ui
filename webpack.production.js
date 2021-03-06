const path = require('path');
const webpackConfig = require('./webpack.config');

module.exports = {
  mode: 'production',
  entry: webpackConfig.entry,
  output: webpackConfig.output,
  module: webpackConfig.module,
  resolve: webpackConfig.resolve,
  plugins: [
    ...webpackConfig.plugins,
  ]
};