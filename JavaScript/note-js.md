# 分類說明
	## 第一階段：初步了解，能稍微解釋用法，用在哪，閱讀過技術文章。
	## 第二階段：基本運用，能運用其作變化，寫出能跑的程式。
	## 第三階段：精熟。

	1. ___ 是什麼？
	2. 用在哪？
	3. 用法？
	4. 有什麼問題？/ 解決什麼問題？
	5. 思考並寫出可行的程式。
	6. 用在實際專案上。


# 原型鍊 __proto__

	1. 原型鍊是什麼？
		- js 中，每個物件都有自己的原型，像是物件原型、陣列原型、函式原型等等。
		- 上面都有能使用的方法，一般在套用方法時，都是用原型的方法，相同的物件都共用相同原型，減少記憶體的空間。
		- 原型的頂端是物件原型 window
		- 當需要使用方法時， js 在自身找不到，則一路會往上找，直到找到其方法或是找到 null 為止，而全部都用 __proto__ 串起來，就稱為"原型鍊"。 

	2. 用在哪？
		- 當使用建構式建立模板時，會分別指向不同變數，如果有使用到相同方法，則能將其方法掛載在原型上面來共用，以減少記憶體空間。

	3. 用法？
		- prototype

			///
				function Phone (name,brand,size){
					this.name = name;
					this.brand = brand;
					this.size = size;
				}

				Phone.prototype.call = function(){
					console.log(this.name + '可以打電話');
				}

				let Iphone = new Phone('iPhoneX','Apple','5.8吋');
				Iphone.call();
				console.log(Iphone);
				let Nokia = new Phone('Nokia 3310','Nokia','很小');
				Nokia.call();
				console.log(Nokia);
			/// 

	4. 思考並寫出可行的程式。
	5. 用在實際專案上。

# Scope & Closure

# class 類別


# 陣列處理方法
	1. findIndex
		- 用來找索引位置
		- items 是一個陣列
		- ES6 的語法
		- 會 return 判斷式是 true 的索引位置
		‘’‘
			let newItem = items.findIndex(tunction(item){
				return item.id === 1;
			})
		‘’‘
# 什麼是 AJAX ?


# callback function 
	
	1. callback function 是什麼？
		- 就是將 function B 用參數的方式傳入另一個 function A，讓 function B 能在 A 執行完後再去執行。
	2. 用在哪？
		- 當有 function 必須要在某件事執行過後才要去執行的時候。
	3. 用法？

		///
			function funcA (){
				console.log('我是 A');

			}

			function funcB (callback){
				console.log('我是 B');
				setTimeout(callback,1000);
			}

			funcB(funcA);
		///

	4. 有什麼問題？
		- 回呼地獄 ( 波動拳 )，可讀性和維護性很差。
		- 控制權轉交到其他 function 身上，通常在第三方函式庫或是 api 會出問題，例如無法在正確的時間點呼叫，或是呼叫正確的次數。

	5. 思考並寫出可行的程式。
	6. 用在實際專案上。

# Promise
	1. Promise 是什麼？
		- ES6 語法
		- 是一個物件。
		- Promise 顧名思義就是一個承諾，如果承諾兌現，就繼續做計畫好的下一件事；如果承諾被打破了，就不繼續做下一件事。	
	2. 用在哪？
		- 用來解決 callback function 控制權移交以及可靠性的問題。
		- 解決 callback hell 。
	3. 用法？
		- 可以一直連接。

		- 先 new 一個 Promise 物件
		- 代入參數 resolve (兌現) 、 reject (拒絕)
		- 有三個狀態：
			- pending: 等待中的初始狀態
			- fulfilled: 正確完成
			- rejected: 已拒絕，操作失敗
		- 再用 then() 及 catch()來接收

		/// 
			const ming = (timeout) => new Promise((resolve, reject) => {
			    if (timeout === 0) {
			        reject(new Error('error'));
			    }
			    setTimeout(() => {
			        resolve('success');
			    }, timeout);
			})

			ming(1000).then((value) => {
			    console.log(value);
			    return ming(1000);
			}).then((value) => {
			    console.log(value);
			    return ming(0);
			}).catch((error) => {
			    console.log(error);
			})
		///


	4. 有什麼問題？
	5. 思考並寫出可行的程式。
	6. 用在實際專案上。

# async / await
	1. async / await 是什麼？
		- 會有中斷問題，通常都一起使用。
		- await: 等待
			- Promise 中完成會透過 then 來回傳，在 await 中他則是會等待這段函式完成後在往下繼續執行，這是一個卡住的概念。
			- Await 顧名思義就是等待，在這個 Promise 結束前後面的程式碼都無法被執行。

		- async: 非同步
			- 結構非常類似 Promise，只不過他能夠將 await 包在裡面，被包在裡面的 await 就如同先前的結構一樣，他會依序地執行。
			- async 本身也是類似 Promise，在正確執行的情況下 return 會傳回 resolved 的狀態，也可以使用 then 來接收正確的資料。
			- 當 async 被呼叫時他會回傳一個 Promise，如果正確的運行這個 Promise 會回傳一個 resolved (正確的運行)，如果函式無法正確地完成，則會拋出錯誤的 rejected。

	2. 用在哪？
	3. 用法？
	4. 有什麼問題？/ 解決什麼問題？
	5. 思考並寫出可行的程式。
	6. 用在實際專案上。


# Webpack
	1. Webpack 是什麼？
		- 因為現在開發有大大小小的各種檔案，sass、scss、vue.js、bs4、各種 preprocess，webpack 就是將其打包成 html、css、js、jpg、png 等檔案。
		- 幫我們編譯我們的Preprocess成瀏覽器看得懂的內容然後打包成一包的完成檔案然後拿去server 上傳上去。
		- Webpack 是一個 JavaScript 的建構工具，負責將無數的 JavaScript 檔案整合成一個檔案。
		- webpack必須在node.js的環境中使用

	2. 用在哪？
	3. 用法？
	4. 有什麼問題？/ 解決什麼問題？
	5. 思考並寫出可行的程式。
	6. 用在實際專案上。

# ES6
	- let & const
	- 展開與其餘
		- 展開 ...array : 就是將 array 裡面的值，一個一個取出來
			- 常用技巧
				1. 複製
					- 由於陣列和物件一樣都是傳參考
					‘’‘
						const aryA = [1,2,3];
						const aryB = aryA;
						aryA.push(4);
						console.log(aryB); // [1,2,3,4]
					’‘’
					- 所以要複製的話，可以用展開再放入新的陣列，這樣等於全新的一個陣列
					‘’‘
						const aryA = [1,2,3];
						const aryB = [...aryA];
						aryA.push(4);
						console.log(aryB); // [1,2,3]
					’‘’
				2. 類陣列 轉 陣列
					- 就是將其展開再放入新的陣列
					- 這樣就能使用陣列的所有 __proto__
					‘’‘
						const newAry = [...類陣列]
					’‘’
				3. 合併陣列
					’‘’
						const aryA = [1,2,3];
						const aryB = [4,5];
						const aryAll = [ ...aryA , ...aryB ];
						console.log(aryAll); // [1,2,3,4,5]
					‘’‘
		- 其餘 
			- 當 function 要傳入參數的時候，可能會有不一致的數量，如下
				‘’‘
					function allMoney ( first, ...money ){
						console.log(first, money);
					}
					allMoney(100,200,300,400); // 100 , [200,300,400]
				‘’‘ 
			- 這時就會將後面不一致(其餘)的參數用陣列的方式傳入
	- 解構賦值
		* 用陣列或物件來處理變數
		* 鏡射的概念(但順序不會改變)
		- 陣列
			1. 將陣列值一一賦予到變數上
				* 傳統寫法會一個一個取出來給值
				* 如果有不需要賦予變數的還是要留格子給那個位置
				‘’‘
					const ary = [1,2,3,4,5]
					const [a,b, ,d,e] = ary;
					console.log(a,b,d,e); // 1 2 4 5
				’‘’
			2. 交換變數
				* 傳統交換變數需要再建立一個第三方變數來存值
				* 直接利用解構交換
				‘’‘
					let a = 1;
					let b = 2;
					[a,b] = [b,a];
					console.log(a,b); // 2, 1
				‘’‘
			3. 拆解字元
				‘’‘
					let str = '你好嗎';
					let [a, b] = str;
					console.log(a,b); // 你 好
				’‘’
		- 物件 
			1. 取出物件成員的值並賦予新變數
				‘’‘
					const obj = {
						a:1,
						b:2,
						c:3,
					};
					const { a } = obj;
					console.log(a); // 1
					const { b : newB } = obj;
					console.log(b); // not defined
					console.log(newB); // 2
				’‘’
				- 進階
					‘’‘
						const {a: x, b: [ ,mom]} = {a: 123, b:['小明', '老媽', '老爸']};
						console.log(x,mom) // 123 '老媽'
					’‘’
			2. 預設值
				- 可以預先定義預設值，如果左方沒賦值，則會使用預設
				- 陣列
					‘’‘
						const [ming = '小明', jay = '杰倫'] = ['小美'];
						console.log(ming, jay); // 小美 杰倫
					’‘’
				- 物件
					‘’‘
						const { family: ming = '小明'} = {};
						console.log(ming);const { family: ming = '小明'} = {};
						console.log(ming); // 小明
					’‘’
		
