// TODO es6 imports

const { baseConfig } = require('@testjcrui/tools');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = Object.assign({}, baseConfig, {
  entry: {
    devenv: [
      './src/index.js'
    ],
  },

  // externals: COMMON_EXTERNALS,

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './lib')
  },

  plugins: baseConfig.plugins.concat([
    new CopyWebpackPlugin([
      {
        from: 'src/index.html', to: '.'
      },
      {
        from: 'src/assets/favicon.png', to: 'assets'
      }
    ])
  ])
});
