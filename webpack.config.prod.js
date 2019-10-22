const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  plugins: [
    new CopyPlugin([
      {
        from: 'src/assets/fdz-paginator.css',
        to: 'dest/',
        transformPath(targetPath, absolutePath) {
          return 'fdz-paginator.css';
        }
      },
      {
        from: 'src/assets/fdzPaginatorTemplate.html',
        to: 'dest/',
        transformPath(targetPath, absolutePath) {
          return 'fdzPaginatorTemplate.html';
        }
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'fdz-paginator.js',
    path: path.resolve(__dirname, 'dest'),
  },
};
