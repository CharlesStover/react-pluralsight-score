const path = require('path');

const NODE_ENV =
  process.env.NODE_ENV ?
    process.env.NODE_ENV.trim() :
    'production';

module.exports = {
  entry: './src/pluralsight-score.js',
  externals: {
    'react': {
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    }
  },
  mode: NODE_ENV,
  module: {
    rules: [

      // JavaScript
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },

      // SASS
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: false,
              singleton: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]-[local]-[hash]',
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: 'index.js',
    library: 'pluralsight-score',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react')
    }
  },
  watch: NODE_ENV === 'development'
};
