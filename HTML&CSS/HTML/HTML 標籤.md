# HTML 標籤
### input 的 type 整理:
1. text : 輸入框
2. submit : 傳送資料
3. button : 按鈕 (和 submit 一樣，但點選不會送出，要另外設定)
4. radio : 單選
5. checkbox : 多選
### 其他 form 表單的標籤整理: 
1. label : 標籤
2. input : 輸入的資料，搭配 type
3. select : 下拉式選單
4. textarea : 多行文字欄位
### form 表單範例
```
<form action="輸入要送去的資料庫網址">
	<!-- 標籤，for 的地方填指定的 id ，點擊文字的部分後會跳到該 id 的輸入框 -->
	<label for="mail">電子郵件 :</label>
	<!-- 輸入框， placeholder 是提示訊息，name 是系統用來傳送資料的 -->
	<input type="text" id="mail" name="mail" placeholder="請輸入電子郵件">
	<h2>性別</h2>
	<!-- 選項，如果 name 一樣，則只能單選 -->
	<input type="radio" name="sex" value="man">男生
	<input type="radio" name="sex" value="woman">女生
	<!-- 同上，但能多選 -->
	<input type="checkbox" name="hobby" value="movie">電影
	<input type="checkbox" name="hobby" value="music">音樂
	<input type="checkbox" name="hobby" value="dance">跳舞
	<!-- select 下拉式選單， option 選項 -->
	<select name="birth" id="birth">
		<option value="1990">1990</option>
		<option value="1991">1991</option>
		<option value="1992">1992</option>
		<option value="1993">1993</option>
		<option value="1994">1994</option>
		<option value="1995">1995</option>
		<option value="1996">1996</option>
	</select>
	<!-- 多行文字欄位， cols 可以填入的字元數， rows 可以填入的行數 -->
	<textarea name="content" id="content" cols="30" rows="10"></textarea>
	<!-- 傳送資料到資料庫 -->
	<input type="submit" value="送出">
</form>
```
* input 的 type 不只有 text 屬性，還有 email 、 tel 、number 等設定，差異在於在使用手機瀏覽網頁時，點選不同的 type 會呈現不同的鍵盤。 