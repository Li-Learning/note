### 實作步驟
* 建立專案
  * src
  * dist
* npm init 
* 安裝 webpack
  * npm i -D webpack webpack-cli
  * npm install --save-dev webpack webpack-cli
* 在 package.json 的 `script` 中加入 `"build": "webpack"`，就能在終端機輸入指令 `npm run build` 來打包
  ```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  ```
* 建立 webpack.config.js 檔案，並輸入
  ```
  const path = require('path');
  module.exports = {
    // 輸入點的 js 檔案，專門用來 import 各種檔案
    entry: './src/index.js',
    // 輸出檔案的名稱和位置
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './dist'),
    }
  };
  ```
* 打包 sass / scss / css 等檔案
  * npm i --save-dev style-loader css-loader sass-loader autoprefixer-loader file-loader url-loader 