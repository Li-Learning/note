## pug 和 sass 設定
for copy
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['html-loader','pug-html-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename:'./index.html'
    }),   
    new HtmlWebpackPlugin({
      template: './src/main.pug',
      filename:'./main.html'
    }),
    new MiniCssExtractPlugin({
      filename: "all.css",
      chunkFilename: "style.css"
    }),
 ],
};
```