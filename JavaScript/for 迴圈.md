## for 迴圈
### for 迴圈寫法
* 當有龐大的數量或是龐大的計算，就可以用 for 迴圈來計算。
```
for ( _初始值_ ; _條件_ ; _運算_ ) {
	_程式碼_ ;
};  
```

ex :
```
// 初始值 i 為 0，i 不超過 3 ，i +1
for ( var i =0 ; i < 3 ; i++ ) {
	console.log ( i ) ;
} 
// 得到 : 0 1 2
```
***
### for + array 用法

* 命名一個陣列物件，找出陣列長度去代入迴圈的條件，再利用迴圈把陣列中的值給找出來。
```
// array + object
var farms=[
	{
		farmer : "Bill",
		dogs : 5,
		chick : 10,
	},	
	{
		farmer : "Danny",
		dogs : 10,
		chick : 500,
	},
	{
		farmer : "Mary",
		dogs : 5,
		chick : 504,
	},
];

// 找出 array 的長度，代入 for 迴圈當條件
var farmsTotal = farms.length;

for(i=0;i<farmsTotal;i++) {
	console.log (farms [i].farmer) ;
};
// 得到 : Bill Danny Mary 
```
***
### for + if else 

* for + if 和 break  
```
var farms=[
	{
		farmer : "Bill",
		dogs : 5,
		chick : 10,
	},	
	{
		farmer : "Danny",
		dogs : 10,
		chick : 500,
	},
	{
		farmer : "Mary",
		dogs : 5,
		chick : 504,
	},

];
var farmsTotal = farms.length;

// 假設某大嬸要去買 50 隻雞，如果買到就不用再繼續買了，所以這裡利用 if 和 break
for(i=0;i<farmsTotal;i++){
	if(farms[i].chick>50){
		console.log(farms[i].farmer+"的雞夠");
		farms[i].chick -= 50;
		console.log(farms[i].farmer+"的雞剩"+farms[i].chick+"隻");
 		break;
	}
};
```
***
### for 加總

* 把每個農場的雞數量加起來，所以可以利用 for 迴圈來加總資料的值
```
var farms=[
	{
		farmer : "Bill",
		dogs : 5,
		chick : 10,
	},	
	{
		farmer : "Danny",
		dogs : 10,
		chick : 500,
	},
	{
		farmer : "Mary",
		dogs : 5,
		chick : 504,
	},

];

var farmsTotal = farms.length;
// 建立變數 chickTotal 為 0 ，等等再加總
var chickTotal = 0;

// 依序加上每個農場 chick 的值
for(i=0;i<farmsTotal;i++){
	chickTotal += farms[i].chick ;
};
console.log("雞總共有: "+ chickTotal +" 隻");
```





