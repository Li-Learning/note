## 組織 css
1. 加入註解，必要時也可以再加入第二層註解來組織
  ``` 
  /*---GLOBAL---*/
    /*--Structure--*/
    /*--Typographic--*/
    /*--Forms--*/
    /*--Tables--*/
  /*---HEADER---*/
  /*---NAV---*/
    /*--Primary--*/       
    /*--Secondary--*/  
    /*---CONTENT---*/  
  /*---SIDEBAR---*/  
  /*---FOOTER---*/
  ```
2. 寫網站前先將會用到的顏色整理起來
  ```
  /*---COLORS      
  Green #b3d88c      
  Blue #0075b2      
  Light Gray #eee      
  Dark Gray #9b9e9e      
  Orange #f26522      
  Teal #00a99d      
  Yellow #fbc112 
  ---*/
  ```
## function CSS
  ### 優點
  1. 不必一直寫 css ，一直想命名。  
  2. 幫你的 project 產生出一套規範，例如顏色統整， padding 寬度固定
  3. 檔案大小驟減，因為 padding: 4px 只會在 CSS 檔案裡面出現唯一一次，color: red 也只會出現唯一一次。
  * 如果想提高辨識度，一樣可以命名寫在所有 class 最前方，其功能就單純拿來方便閱讀或是讓 JavaScript 方便抓取
  
  ### 缺點
  1. html 可能相對會比較髒亂
  ***
  ### Function CSS 實戰經驗
  1. 第一步大概是先把一些常用的 class 定出來，例如說顏色：
  ```
  .c-red { color: $color-red; }
  .c-yellow { color: $color-yellow; }
  .c-white { color: white; }
  .c-green { color: $color-green; }
  .c-grey-83 { color: $color-grey-83; }
  .c-grey-4a { color: $color-grey-4a; }
  .c-grey-bb { color: $color-grey-bb; }
  .c-grey-f8 { color: $color-grey-f8; }
  ```
  2. 必備的 flex 排版：
  ```
  .flex { display: flex; }
  .inline-flex { display: inline-flex; }
  .flex-auto { flex: 1 1 auto; }
  .flex-column  { flex-direction: column; }
  .flex-row     { flex-direction: row; }
  .flex-wrap    { flex-wrap: wrap; }
  .flex-nowrap    { flex-wrap: nowrap; }
  .items-start    { align-items: flex-start; }
  .items-end      { align-items: flex-end; }
  .items-center   { align-items: center; }
  .items-baseline { align-items: baseline; }
  .items-stretch  { align-items: stretch; }
  .justify-start   { justify-content: flex-start; }
  .justify-end     { justify-content: flex-end; }
  .justify-center  { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .justify-around  { justify-content: space-around; }
  ```
  3. 自己寫一些 utility class：
  ```
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
  }
    
  .limit-line {
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
    
  .pointer:hover { cursor: pointer; }
  ```
  4. 重構時的流程其實很固定，基本上就是這幾步：
     * 選定要重構的 component
     * 先從最裡層開始，右鍵檢查，確定這個 class name 沒有其他副作用
     * 把原本的 style 換成 functional CSS
     * 把原本的 class name 移除