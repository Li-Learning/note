## # sass webpack4 設定
## 安裝
安裝 webpack & webpack cli
```
$ npm i -D webpack webpack-cli webpack-dev-server
```
安裝 node-sass & sass-loader & css-loader
```
$ npm i -D node-sass sass-loader css-loader
```
安裝 mini-css-extract-plugin
```
$ npm i -D mini-css-extract-plugin
```
## 設定
webpack.config.js
```
const path = require('path');
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
    new MiniCssExtractPlugin({
      filename: "all.css",
      chunkFilename: "style.css"
    }),
 ],
};
```
## 建立
all.sass
```
@import 'title'

main
  background: #000
  color: #fff 
```
_title.sass
```
h1
  color: red
```
index.js
```
// sass
import '../src/all.sass';

// ...
```
執行
```
$ webpack
```
## 輸出
all.css
```
h1{color:red}main{background:#000;color:#fff}
```
all.css 縮排
```
h1 {
    color: red
}

main {
    background: #000;
    color: #fff
}
```
#### 參考資料
https://blog.johnwu.cc/article/webpack-4-sass-to-css.html