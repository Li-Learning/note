### sass / scss / css
* style-loader : 讓 js 能可看懂 css
* css-loader : 讀取 css 檔案
* sass-loader : 讀取 sass 檔案
* node-sass : 解決相依性問題，都和 sass-loader 一起安裝
* autoprefixer-loader : 自動產生各種瀏覽器專用的語法
* file-loader : 用來讀取字型檔、圖片檔
* url-loader : 偵測如果 woff (2) 這些來源如果在多少大小以內，就幫轉成 base64（減少 request）

一鍵安裝 : `npm i --save-dev style-loader css-loader node-sass sass-loader autoprefixer-loader file-loader url-loader`

### js

* babel-loader : 用來告訴 babel 如何和 webpack 合作。
* babel-core : 知道如何載入程式碼、解析和輸出檔案（但不包含編譯）。
* babel-preset-env : 讓 babel 知道如何將不同版本的 ES 語法進行轉譯。
* https://segmentfault.com/a/1190000017898866
```
module: {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }
  ]
}
```
* 在跟目錄建立 .babelrc 文件
```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```
一鍵安裝 : `npm install -D babel-loader @babel/core @babel/preset-env webpack`
### 轉出相關檔案 .css .js 等
* webpack ^4
  * MiniCssExtractPlugin
  * https://webpack.docschina.org/plugins/mini-css-extract-plugin/
    * 安裝 `npm install --save-dev mini-css-extract-plugin`
    * 基本寫法
    ```
    const Path = require('path');
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    module.exports = {
      entry: './src/index.js', 

      output: {
        filename: 'index.bundle.js', 
        path: Path.resolve(__dirname, 'dist')
      }, 
      
      plugins: [
        new MiniCssExtractPlugin({
          // 檔案名稱
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
      ],
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
              "css-loader"
            ]
          }
        ]
      }
    }
    ```