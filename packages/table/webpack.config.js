// TODO es6 imports

const { baseConfig } = require('@ui/tools');
const path = require('path');

module.exports = Object.assign({}, baseConfig, {
    entry: {
        core: [
            './src/index.js'
        ],
    },

    // externals: COMMON_EXTERNALS,

    output: {
        filename: '[name].bundle.js',
        library: ['JincorUI', 'Table'],
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './dist')
    },
});
