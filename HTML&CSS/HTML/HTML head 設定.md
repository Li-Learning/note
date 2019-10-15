### HTML head 進階資訊設定
* 在網站上線前，先去針對每個社群設定，也可以去觀察其他網站，不懂的就直接複製 google。
```
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <!-- 標題旁的小 icon ，通常是 32*32-->
  <link rel="shortcut icon" href="favicon.ico"> 
  <!-- 網站描述文字 -->
  <meta name="description" content="網站描述文字" />
  <!-- 搜尋時的關鍵字，越前面的權重越高 -->
  <meta name="keywords" content="關鍵字1, 關鍵字2, 關鍵字3" /> 
  <!-- for fb 的設定，在 fb 中打入設定的網址會顯示出來-->
  <meta property="og:title" content="FB的標題" />
  <meta property="og:description" content="FB的描述" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="FB上的網址" />
  <meta property="og:image" content="FB上的圖片" />
  <!-- 針對 IE 用最新的相容性 -->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <!-- 載入 CSS -->
  <link rel="stylesheet" href="css/style.css">
  <!-- 載入 javascript -->
  <script type="text/javascript" src="/javascript/all.js"></script>
</head>
```