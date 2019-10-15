## 基本語法
### 將螢幕解析度變成載具的寬度
* 在 head 裡加入
`<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">`
_emmet : meta:vp_
### viewport 其他屬性
* `width` 給予寬度，可視區域寬度，有 `device-width` 這個關鍵字可用，任何非法值會轉成 1px，負數會直接失效
* `height` 給予高度，可視區域高度，有 `device-height` 這個關鍵字可用，任何非法會轉成 1px，負數會直接失效
* `initial-scale` 預設縮放等級，數值範圍從 0.1 ~ 10，若使用 `device-width` 或 `device-height` 則會等於 10，yes 會等於 1，no 或任何非法值會轉成 0.1，負數會直接失效
* `minimum-scale` 最小縮放等級，其他設定同 `initial-scale`
* `maximum-scale` 最大縮放等級，其他設定同 `initial-scale`
* user-scalable 使用者是否可以進行縮放動作，可以使用關鍵字 yes, no，數值範圍從 -1 ~ 1，若使用 `device-width` 或 `device-height` 則為 yes，其他值則為 no
* `target-densityDpi` 這只能使用在大部份的 Android 手機上，數值範圍從 70 ~ 400，單位是 dpi，有 `device-dpi`, `low-dpi`, `medium-dpi`, `high-dpi` 等關鍵字可用，其他值會直接失效
***
### media query
* 重點 : 相同的 code ，後面會覆蓋前面的。
* `max-width` 和 `min-width`分別是 "以下" 和 "以上" 的意思，max 用在 desktop first ， min 則用在 mobile first 。
* 判斷使用 desktop first 還是 moblie first ，考慮用戶哪個佔多數，哪個 first 就哪個效能較高。 
```
/*電腦*/
.title{color: red;}
/*平板，在 768px 以下的吃到此設定*/
@media(max-width: 768px){.title{color: blue;}}
/*手機，在 375px 以下的吃到此設定*/
@media(max-width: 375px){.title{color: green;}}

```
* 除了針對以上兩種設定，也可以在中間加入 `@media(max-width: 767px) and (min-width: 375px){ .title{color:yellow;}}` ，來去對其他解析度的平台做優化。

***
## 觀念
### 畫面排版
* 利用 % 數去做排版，讓元素能夠自適應大小，也可以互相搭配。
* 畫面不要太滿沒有留白，斷點時機要設定好。
* 手指的點擊範圍大約是 44px 。
* 少即是多，手機板的內容不適合放太多資訊，ex : 廣告、每個列表的內文等。
* 手機板表格因為畫面較小，可以隱藏較不重要的欄位，或是用 `overflow-x : auto ;` ，讓表格自行產生 x bar 。
* 圖片 size 規劃，電腦版的圖片可能是 300x300 ，換成平板時，可能會變成 500x500 ，換手機可能又更大，所以將圖片大小寬度設定大約為 600px 左右，讓所有平台都能看到清晰的圖片。
* banner 圖片在 moblie 中可以換一張適合其寬度的圖片。
* 利用  [https://tinypng.com/](url) 壓縮圖片大小，提升效能。
### 屬性設定
* `max-width` : 和一般 `width` 不同的是，當其寬度低於設定的大小時，其內容會去自適應寬度，不像 `width` 會固定於設定的大小。
* 在 css reset 中加入 `img { max-width: 100% ; height: auto ; }`