## 單元測試
**單元測試應該是隨時隨地都要能正確執行，只要它本身的邏輯是正確的**
### 先寫測試的理由
  * 這裡提的「測試」，指的是 TDD（Test-Driven Development），中文翻譯做「測試驅動開發」。
  * 很多人會把重點放在 Test 上，但事實上 TDD 是一種 Development（開發）的方法，並不是一種「測試方法」。
### 測試的重要性
  * 測試確保了整個程式碼的穩定性與安全
  * 能在寫程式之前，重新審視程式要達成的預期
### 基本觀念
  * 單元測試標題: 受測方法＿傳入參數意義＿期望得到的結果
  * 最小單位是一個 function
  * 先寫測試，再寫程式
  * 不能測試的程式不是好程式，因為回傳結果無法被預期，此時應修改它
  * 一個測試只應該關注一件事情，如果受測目標有多種狀況，應該分成好幾個測試去涵蓋所有邏輯
### 優點 
  * 測試檔可以先寫好一堆斷言式，即便要被測的程式根本還沒寫。
  * 主程式寫好直接看所有的斷言式是否為綠燈。
  * 主程式未來有修改，測試應該也要過，如果不過，代表主程式可能寫錯。但如果是主程式需求改了，那要改的反而是測試檔。
***

## 實作
#### 第一步 : 安裝測試框架 mocha 和斷言式 chai
  * 建立 project 新增 index.js
  * yarn init 加入 package.json
  * 寫程式
  ```
  function add (x, y, z) {
    return (x+(y-1))/z;
  }
  // 代表如果有其他檔案引入 index.js 這隻檔案，就等同給它 add 方法使用
  module.exports = add
  ```
  * 安裝 mocha 
  ```
  // -D 代表 安裝的是 開發用套件，程式上線時不會用到的套件
  yarn add mocha -D
  ```
  * 然後你可看到你的 package.json 多了一些東西， devDependencies 裡多了 mocha 這個套件。
  * 在 package.json 加入一段程式碼
  ```
  // 意思是稍後我們可以透過 yarn test / npm test 去執行mocha測試
  "scripts": {
    "test": "mocha"
  }
  ```
#### 第二步 : 建立測試
  * 建立測試檔
    * 它會掃描有 test 的資料夾與檔案，所以可以建一個 test 資料夾，並在其中加入 add.test.js 
  * 輸入 `yarn test` 來測試
  * 安裝斷言式 chai
    * mocha 只是只是個測試框架，它可以幫我們建立測試環境，但測試的判定工具，我們之後就簡稱斷言式
  ```
  yarn add chai -D
  ```
  * 到 add.test.js 寫一段測試看看
  ```
  // 我們載入的斷言式expect，等下會由它來判定。
  const expect = require('chai').expect;

  // 測試的程式
  const add = require('../index');

  // describe 就寫你想測試什麼東西
  describe('測試 add', () => {

    // it 適合寫測試實例，這邊可以寫你拿什麼去測試
    it('預期是 1', () => {
      expect(add(2, 3, 2+2)).to.equal(1);
      expect(add(3, 4, 4+3)).to.equal(1);
      expect(add(5, 100, 5+99)).to.equal(1);
    });

  });
  ```
***
### 重點整理
  * 安裝 mocha 與 chai
  * mocha 只是測試框架，判定測試要使用斷言式 chai
  * expect 可以放主程式，它預期要 equal 一個結果。
  * 先寫測試再寫程式，可以先從需求面得知結果，之後寫主程式也有綠字打勾作為通關依據。
### 參考資料
https://medium.com/html-test/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B-%E6%B8%AC%E8%A9%A6%E5%90%A7-%E5%89%8D%E7%AB%AF-c32c29df875d
https://railsbook.tw/chapters/23-testing-with-rspec-part-1.html
https://progressbar.tw/posts/12