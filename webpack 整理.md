## 安裝 webpack 
1. 用 npm 安裝 webpack `npm install webpack -g`
   * 因為 webpack-cli 被移出來所以還需要額外安裝
2. 安裝 webpack-cli `npm install webpack-cli -g`
3. 用 webpack -v 確認版本
## 使用
1. 建立專案資料夾
2. 建立 npm 專案 `npm init`
   1. package name：專案名稱，預設資料夾名稱。  
   2. version：版本號，預設1.0.0。
   3. description：專案描述，可以空白。
   4. entry point：專案開始執行的時候，會先執行哪一個程式，進入點的意思，預設是index.js。
   5. test command：可以設定一個指令的代碼，然後執行對應的指令動作，這裡先空白個。
   6. git repository：專案的原始控管位置，這是記錄用的，也是先空白。
   7. keywords：專案的關鍵字，似乎是如果有上傳npm官網的話，可以利用關鍵字或package name找到你的專案，按Enter空白跳過。
   8. author：專案的作者名字，可以空白哦。
   9. license：專案的版權，沒有輸入會預設是ISC。豆知識，ISC是網際網路系統協會(Internet Systems Consortium)的簡稱。
      * 可以統一 yes `npm init -y` 
3. package.json
   1. devDependencies: 開發的時候會用到的套件，例如負責打包的 webpack。
   2. dependencies: 上線發佈後依然需要用到的套件。
   3. 讓npm自動幫我們做到記錄這件事情 
      1. `npm install webpack --save-dev` 
      2. `npm install webpack-cli -dev`
4. 寫網站
   1. 先建立 html 和 js 檔案
   2. 設定 webpack 檔案 
      1. 檔名 webpack.config.js
      2. code 
      ```
        //引用path模組
        const path = require('path');
        module.exports = {
            //這個webpack打包的對象，這裡面加上剛剛建立的 index.js
            entry: {
                index: './index.js'
            },
            output: {
                //這裡是打包後的檔案名稱
                filename: 'bundle.js',
                //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
                path: path.resolve('./'),
            }
        };
      ``` 
   3. 打包 `webpack -p`
   4. 就會看到資料夾輸出 bundle.js
   5. index.html 抓 bundle.js
