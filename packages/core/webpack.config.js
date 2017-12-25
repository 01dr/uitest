// TODO es6 imports

const { baseConfig } = require('@testjcrui/tools');
const path = require('path');

module.exports = Object.assign({}, baseConfig, {
  entry: {
    core: [
      './src/index.js'
    ],
  },

  // externals: COMMON_EXTERNALS,

  output: {
    filename: 'index.js',
    library: ['JincorUI', 'Core'],
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './lib')
  },
});
