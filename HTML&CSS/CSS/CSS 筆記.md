# CSS 常用屬性
### margin 、 padding 使用時機
* margin 用在區塊與區塊之間的距離
* padding 用在區塊內部之間的距離
* **盒模型 : 會影響區塊長寬的只有 padding 和 border ， margin 影響的是區塊與區塊之間的距離。**
* `margin : 0 auto ;` 版型置中
### box-sizing 
* `box-sizing : border-box ;` : CSS3 的語法，是讓區塊自適應大小。例如，如果原本設定**寬高 150 px** ，再加上 **padding 的 10 px**，會讓整個區塊變成 **160 * 160 px** ，如果使用 `box -sizing : border-box ; `，則區塊就會自適應成原本的**寬高加上 padding** 的值等於 **150 * 150 px**。
* 另外再使用新語法時，要記得上網查個瀏覽器的兼容情況，利用 can i use 網站觀察。
* 還有在 css 設定裡加入一些前綴詞來增加瀏覽器兼容性。例如 
```
box-sizing: border-box;
// 讓舊版本的 firefox 瀏覽器去做瀏覽
-moz-box-sizing: border-box;  
// 讓舊版本的 chrome 瀏覽器去做瀏覽
-webkit-box-sizing: border-box; 
```
### border 
* `border-radius : 5 px;` 圓弧效果 也可以寫 50% 變圓形
* `border-color: transparent;` 把 border 區塊顏色變成透明。
* `border-top-color: red;` 設定上方 border 三角形區塊為紅色
* `border-left-color: red;` 同上，設定左邊。
* `border-style: solid;` 設定 border 線條為實線。
* `border-width: 25px;` 設定 border 整體正方形寬度。
### background
* `background-image: url(../img/pokemonLogo.png);` 圖片路徑
* `background-size: 200px;` 大小
* `background-repeat: no-repeat;` 預設是重複、填滿整個背景，這裡設定不重複。
* `background-position: 10px 0px;` 位置，分別是 左右 上下。
* 可以把上面整理成 :
```
background: url(../img/pokemonLogo.png) 10px 0px no-repeat;
background-size: 200px;
```
### 其他常用
* `cursor : pointer ;` 到指定位置變手圖案 
* `opacity : 0.5 ;` 透明
* `transition : width 2s ;`  要改變的屬性 時間，在時間內改變，可以搭配 hover 或是 jQuery 使用(寫上改變後的值)
* `overflow : hidden ;` 超出範圍就隱藏
* `white-space : nowrap ;` 不斷行