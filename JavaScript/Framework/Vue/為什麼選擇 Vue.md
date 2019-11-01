### 為什麼選擇 Vue.js
* vue.js 是什麼？
  * 目前主流三大 JavaScript 框架之一。
  * 是一套用於構建用戶界面的漸進式框架。
  * vue 被設計為可以自底向上逐層應用。Vue的核心庫只關注視圖層。
  * 以資料狀態操作畫面(傳統像是 jQuery 則是直接操作畫面上的 DOM 元素)
* 優勢？
  * 容易導入
  * 完整的擴展工具(漸進式框架)，可以使用 Vue CLI 創建整合 Vue Core 、 Vue Router 、 Vuex 的完整前端解決方案，不用任何的設置就可以開始開發
  * 易學好上手
* 基本概念
  * MVVM 的概念設計
  * 雙向綁定
  * this 指向 data
* 前置作業
  * 建立一個 new Vue ({}) 物件
  * 在裡面建立 el 成員(代表 element )來綁定元素
  * 建立 data 來操作資料 
  ```
  var app = new Vue({
  	el: '#app',
  	data: {
  			text: '這是一段文字'
  	},
  	methods: {
  			reverseText : function() {
  					console.log(this.text)
  			}
  	}
  })
  ``` 
* 重要觀念
    * 預先定義資料狀態
* 生命週期
  * 如果想使用 AJAX ，至少要到 Created (數據建立後) 才能用
  * 想維持資料狀態的話，可以使用 `<keep-alive>`
  * 有四大步驟 
    1. 建立 Created
    2. 安裝 Mounted
    3. 更新 Updated
    4. 銷毀 Destroyed
  - 完整過程
    1. 初始化 ( new Vue / 元件 )
    2. 開始創建
        - beforeCreate
    3. 數據建立
        - created
    4. 編譯模板( el 的 template / render function )
        - beforeMount
    5. 模板建立完成，取代原有 HTML DOM
        - mounted
    6. Mounted (安裝完)
        - 當資料變動時
            1. beforeUpdate
            2. 重新繪製
            3. updated (回到 Mounted)
        - beforeDestroy
    7. 移除元件，事件監聽等
    8. Destroyed (銷毀)
        - destroyed