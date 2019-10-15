# BEM
  BEM (Block Element Modifier) 是一種 CSS class 命名的設計模式，將介面切割成許多獨立的區塊，以區塊（Block）、元素（Element）和修飾子（Modifier）來命名，優點是以元件觀念進行開發，具有重用性。 
***
### 使用
  **BEM 是根據 Block__Element--Modifier 來命名**
  * Element 使用雙底線做分隔
  * Modifier 使用雙 dash 做分隔
  ```
  <div class="product">
      <div class="menu">
          <li class="menu__item menu__item--active"><a href="#"></a></li>
          <li class="menu__item"><a href="#"></a></li>
      </div>
  </div>
  ```
### 介紹
  1. **區塊 (Block)**
    我們在設計網站時，一定會設計幾個區塊(Block)出來，裡面有LOGO、選單、搜尋框、登入視窗等等，例如 `.menu`、`.logo`、`.search`、`.auth`。

  2. **元素 (Element)**
    如果這些元素設定是會綁定在這個區塊上時，就可以在區塊的class後面加上雙下底線__來辨識他是該區塊底下的元素，Class就會設計為 `.menu__item{}`。 
    
  3. **修飾符（Modifier）**
    當區塊或元素因為狀態而改變時，就在後面加上雙中線--來辨識它是修飾符，所以就會用javascript動態加入class為 `.menu__item--active`，所以如果我們要判斷這個class是屬於元素還是修飾符的設定，就只要看class最後面是雙中線--還是雙下底線__就知道他是屬於哪一種了。
