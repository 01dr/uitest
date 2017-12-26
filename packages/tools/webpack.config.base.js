const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const plugins = [];

if (IS_PRODUCTION) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new ExtractTextPlugin('[name].css'),
    new UglifyJsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  );
}

const cssLoaders = [
  {
    loader: require.resolve('css-loader'),
    options: {
      modules: true,
      importLoaders: 1,
      minimize: true,
      sourceMap: true,
      localIdentName: '[local]__[hash:base64:5]'
    },
  },
  {
    loader: require.resolve('postcss-loader'),
    options: {
      config: {
        path: path.resolve(__dirname, 'postcss.config.js')
      }
    }
  }
];

module.exports = {
  devtool: IS_PRODUCTION ? false : 'inline-source-map',

  devServer: {
    contentBase: './src',
    disableHostCheck: true,
    historyApiFallback: true,
    https: false,
    // TODO: enable HMR
    // hot: true,
    index: path.resolve(__dirname, 'src/index.html'),
    inline: true,
    stats: 'errors-only',
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: IS_PRODUCTION
          ? ExtractTextPlugin.extract({
            fallback: require.resolve('style-loader'),
            use: cssLoaders
          })
          : [require.resolve('style-loader'), ...cssLoaders],
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg|png|gif|jpe?g)$/,
        loader: require.resolve('file-loader')
      }
    ]
  },

  plugins,

  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
