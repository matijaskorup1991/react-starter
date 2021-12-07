const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'sass-loader',
        ],
        include: /\.module\.scss$/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module\.scss$/,
      },
    ],
  },
};
