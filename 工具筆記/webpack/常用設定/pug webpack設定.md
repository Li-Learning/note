# pug webpack4 設定
## 安裝
安裝 webpack & webpack cli
```
$ npm i -D webpack webpack-cli webpack-dev-server
```
安裝 html-webpack-plugin ，來輸出 HTML
```
$ npm i -D html-webpack-plugin
```
安裝 pug-html-loader & pug & html-loader
```
$ npm i -D pug html-loader pug-html-loader
```
## 設定
webpack.config.js
```
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js'
  },
  module: {
    rules: [{
      test: /\.pug$/,
      use: ['html-loader','pug-html-loader']
    }]
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
 ],
};
```
## 建立
index.pug
```
<!DOCTYPE html>
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible", content="ie=edge")
    title Document
  body
    h1 index
    include main.pug
```
test.pug
```
header This is HEADER
article This is MAIN
footer This is FOOTER
```
執行
```
$ webpack
```
## 輸出
index.html
```
<!DOCTYPE html>
<!DOCTYPE js>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <h1>index</h1>
    <header>This is HEADER</header>
    <article>This is MAIN</article>
    <footer>This is FOOTER</footer>
    <script type="text/javascript" src="build.js"></script>
  </body>

</html>
```

#### 參考資料
https://medium.com/@NorthBei/%E5%A6%82%E6%9E%9C%E4%BD%A0%E6%98%AF%E5%B8%B8%E5%88%87%E7%89%88%E7%9A%84%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB-%E4%BD%A0%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9F%A5%E9%81%93pug-8b2cbc0a784c