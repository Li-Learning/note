## 前端模組化 commonJS 同步
#### 重點
  * 使用 node 實作
  * 在瀏覽器無法執行
  * 模組使用這種標準時，通常使用在 server 端
#### 用意
  * 避免汙染程式碼
  * 可以重複使用模組
#### 用法
  * 利用 `module.exports.exampleFunction = exampleFunction` 匯出
  * 使用 `const sum = require('./example');` 匯入
  * `sum.exampleFunction()` 執行
  * 當匯入一個模組 `sum` ，實際上是取得一個物件
  * 可以載入多個
#### 範例
  * 建立模組 sum.js
    ```
    function add (x, y) {
      console.log(x + y);
    }
    function str (str) {
      console.log(str);
    }
    module.exports.add = add
    module.exports.str = str
    ```
  * 建立一支用來載入全部 js 的檔案 all.js
    ```
    const sum = require('./sum');
    sum.add(1, 5);
    sum.str('hello world');
    const otherSum = require('./sum')
    otherSum.add(5,90);
    ```
#### 利用 browserify 來打包
  * 讓我們可以在瀏覽器中使用 Node.js 風格的模組，不管是 AMD / CMD / ES6 ..... 風格的模塊化，它都能認識，並且編譯成瀏覽器認識的 JS
  * 運作的方式，會先在代碼中以靜態分析 (static analysis) 搜尋有調用 require () 的內容，彙整出調用依賴關係圖 (dependency graph)，並且將關鍵字解析成路徑，然後根據路徑找到檔案，接著，檔案會被打包 (bundle) 成單一獨立的 javascript 檔案，讓你可以直接在網頁中直接使用。並且，打包的檔案預設都會使用嚴格模式
  ##### 用法
  * 安裝 `npm install -g browserify`
  * 使用 commonJS 來匯入模組並寫程式
    * 可以先在 node.js 中執行 `node index.js`
  * 執行 `browserify index.js > all.js` 打包
 ##### 搭配第三方套件
 這裡僅以 jQuery 來示範，其他第三方套件則依照同樣原則來使用即可。
  * 安裝套件 `npm install jquery --save`
  * 引入 `const $ = require('jquery');`
  * 執行
    ```
    $(document).ready(function () {
      $("h1").html('456');
      console.log('h1 hided');
    });
    ```
  * 打包 `browserify index.js > all.js`