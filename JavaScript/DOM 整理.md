## DOM
*DOM 是由節點 ( node ) 組成，可以根據 JavaScript 語法來操作 DOM ，讓網頁變成動態。*
### 選擇節點的語法
* `getElementById ( "id" ) ` : 根據元素的 id 來選擇
* `querySelector ( "#id " ) ` : 同上
* `querySelector ( ".class " ) ` : 根據 class 來選擇，**如果有多個相同的 class 會選擇第一個**
* `querySelectorAll ( ".class" )` : 選擇全部相同的 class 回傳 array ，再利用 for 迴圈來操作
### 操作節點的語法
選擇你要的節點之後，可以利用其他語法來操作，下面是常用的語法 ( 陸續新增 ) 
***

* `setAttribute ( "要修改或新增的屬性名稱","要新增的值" )` : 可以修改或新增屬性
* `getAttribute ( "屬性名稱" ) ` : 取得該屬性的值
```
var getClass = document.querySelector(".title");
// 在 class 為 .title 的元素裡面新增一個屬性 id = "idName"
getClass.setAttribute("id","idName");
```
 
* `innerHTML = 要新增的內容 ` : 重新渲染 HTML 標籤上去 
```
var el = document.querySelector(".title");
var link = "https://www.facebook.com/";
var title = "fb";
// 新增一個 li 列表到 .title 裡面去，另外，這裡有用到字串串接
el.innerHTML =  " <li><a href= ' " + link + " ' > " + title + " </a></li> ";
```

* `createElement ( "要新增的元素" ) ` : 新增一個元素
* `appendChild ( ) ` : 新增一個子節點，跟 createElement 搭配
```
// 建立一個變數，來新增一個新的元素
var create = document.createElement("p");
create.textContent = "hello";
// 選擇要新增的元素位置，再用 appendChild 來新增一個子節點
document.querySelector(".content").appendChild(create);
```
***
### innerHTML 和 createElement 比較
- **innetHTML**  
方法 : 組完字串後，傳進語法進行渲染
優點 : 效能快
缺點 : 資安風險，要使用可信任的資料
- **createElement** 
方法 : 以 DOM 節點來處理
優點 : 安全性高
缺點 : 效能較差，需要寫較多行 code