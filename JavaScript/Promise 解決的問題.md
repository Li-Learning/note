## Callback
  ### 解決的問題
  * 處理 ajax 、 非同步等問題
  * 需要 A function 執行完，才去執行 B function 
  ### 缺點
  * 控制權轉移
  * callback 多的時候，可讀性很低
  ***
## Promise
  ### 解決了什麼問題?
  * 解決 callback function **無法控制** 和 **callback hell** 的問題
  ### 語法
  #### 建立 `Promise`
  * 首先需先建立一個 **`new Promise` (新的承諾)**，代入 **`resolve` (兌現參數)** 和 **`reject` (拒絕參數)**
  ```
  const logAsync = new Promise(function(resolve, reject){
    // ...
  }))

  ```
  
  * 也可以用 `function return` 的方式，也可代入參數
  ```
  const logAsync = (message, time) => {
    return new Promise((resolve, reject) => {
      // ...  
    });
  }
  ```
  #### 執行
  
  * 當 **兌現** 就呼叫 `resolve()`，並用 `.then` 接續動作
  ```
  const logAsync = new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve('hello world');
    }, 1000);
  });

  logAsync.then(function(value) {
    console.log(value + '1');
  });
  ```
  * 當 **拒絕** 就呼叫 `reject()`，並用 `.catch` 接續動作
  ```
  const logAsync = new Promise(function(resolve, reject) {
    setTimeout(function(){
      reject('OOPS');
    }, 1000);
  });

  logAsync.catch(function(value) {
    console.log(value);
  });
  ```
  * 相同道理，也可以用 `function return` 的方式
  
  ```
  // 建立一個 logAsync function 帶入參數 message , time
  const logAsync = (message, time) => {
      // 回傳一個新的 Promise 帶入參數 resolve: 達成 reject: 失敗
      return new Promise((resolve, reject) => {
          // 判斷 messgage 和 time 是否都有值
          if (message && time) {
              // 設定非同步
              setTimeout(() => {
                  // message
                  console.log(message)
                  // 有值 => 呼叫承諾達成
                  resolve()
              }, time);
          } else {
              // 沒有值 => 呼叫承諾失敗
              reject();
          }
      });
  };

  // 執行 logAsync function 並帶入參數
  logAsync('這個訊息過 1 秒才會出現',1000)
  // 如果承諾達成才往下執行
  .then(() => {
    // 執行 logAsync function 並帶入新參數 
    return logAsync('這個訊息再過 1.5 秒才會出現', 1500);
  })
  // 如果承諾達成才往下執行
  .then(() => {
    // 執行 logAsync function 並帶入新參數 
    return logAsync('這個訊息再過 2 秒才會出現', 2000);
  })
  // 如果承諾失敗就呼叫以下程式碼
  .catch(() => {
    console.log('error');
  });
  ```
  #### 重要觀念

  * `Promise` 特性 : 可以把方法 `chain` 串起來。
    * 也就是當 **第一件事** 處理完"**再去**"處理 **第二件事**，可以一直串下去。
  * `.then` 會把我們的 `return` 值包裹成一個 `Promise`，並回傳回去。
    * 所以不論是同步還是非同步，`.then` 都會回傳一個 `Promise` 好讓我們繼續串接。
  * `Promise` 如果一直沒有回應，則會呈現 `pending`
    * 例如當試圖去連到一個網站，而它卻一直沒有回應時，我們的 `Promise` 就會一直處於 `pending` 狀態。
  * 另外，`Promise` 還會延伸到 `Async/await`，再找時間整理。
  #### 重點整理
  * 建立 `new Promise`，代入參數 `(resolve, reject)`
    * 承諾**兌現**呼叫 `resolve()`
    * 承諾**拒絕**呼叫 `reject()`
  * 執行 
    * `.then(function(){ ... }))` 接續承諾**兌現**執行
    * `.catch(fucntion(){ ... })` 接續承諾**拒絕**執行
    * 其中 `.then` 可以一直 `chain`，不論同步還是非同步
  ### 參考資料
  * https://marco79423.net/articles/%E6%B7%BA%E8%AB%87-javascript-%E7%9A%84-promise/
  * https://noob.tw/js-async/
  * https://ithelp.ithome.com.tw/articles/10197529