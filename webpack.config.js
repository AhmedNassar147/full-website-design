var path = require('path');
var DIS_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');
var config = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: DIS_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'es2015', 'react', 'stage-2']
        }
      }
    ]
  }
};

module.exports = config;