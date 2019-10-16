## Cookie、LocalStorage、SessionStorage 三種差異

||Cookie|LocalStorage|SessionStorage|
|-----|-----|-----|-----|
|生命週期|一般由 Server 端產生，可設置失效時間。如果在瀏覽器端生成，預設關閉瀏覽器失效。|除非被清除，否則永久保存|僅當下有效，關閉網頁或瀏覽器清除|
|空間大小|4 K|5 MB|5 MB|
|Server 端|會攜帶在 HTTP head 之中，如果過多數據會造成性能問題|僅在瀏覽器中保存|僅在瀏覽器中保存|
***
### 應用場景
* Cookie
  * 考慮到每個 HTTP 請求都會帶著 Cookie 的信息，所以 Cookie 能精簡就精簡
  * 比較常用的一個應用場景就是判斷用戶是否登錄。
    * 針對登錄過的用戶，服務器端會在他登錄時往Cookie 中插入一段加密過的唯一辨識單一用戶的辨識碼，下次只要讀取這個值就可以判斷當前用戶是否登錄。
* localStorage
  * 與 cookie 一樣是認 domain name
  * localStorage 接替了 Cookie 管理購物車的工作，同時也能勝任其他一些工作。
  * 用來儲存一些不重要但卻影響著效能等等的資訊。
* sessionStorage
  * 如果遇到一些內容特別多的表單，為了優化用戶體驗，我們可能要把表單頁面拆分成多個子頁面，然後按步驟引導用戶填寫。