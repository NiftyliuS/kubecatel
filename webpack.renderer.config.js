const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require("path");


rules.push({
  test: /\.(sa|sc|c)ss$/,
  use: ["style-loader", "css-loader", "sass-loader"]
});

rules.push({
  test: /\.(png|svg|jpe?g|gif)$/,
  include: /images/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
        publicPath: 'images/'
      }
    }
  ]
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      'src': path.join(__dirname, './src')
    },
  },
};
