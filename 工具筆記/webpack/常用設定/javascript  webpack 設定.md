## JavaScript 設定
## 安裝
安裝 webpack & webpack cli
```
$ npm i -D webpack webpack-cli webpack-dev-server
```
## 設定
webpack.config.js
```
const path = require('path');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'build.js'
	}
};
```
## 建立
* 使用 ES6 import export
* export default 一支檔案只會有一個，用物件包覆再*送出*，使用需用物件。
* export 可以有很多個，*引入*時用物件包覆，可以直接使用。
index.js
```
import show from '../src/show.js';
import {things} from '../src/show.js';

show.test(123);
console.log(things);
```
show.js
```
export default {
  test : (str) => console.log(str)
}
export const things = 'testtestetsff';
```
執行
```
$ webpack
```
## 輸出
build.js
```
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);(e=>console.log(e))(123),console.log("testtestetsff")}]);
```
以上看不懂，看最後輸出這段 
```
e=>console.log(e))(123),console.log("testtestetsff")
// console 輸出
// 123
// testtestetsff
```
#### 參考資料
https://blog.typeart.cc/%E6%B7%BA%E8%AB%87JavaScript%20ES6%E7%9A%84import%E8%88%87import%7B%7D%E5%8F%8Aexport%E5%8F%8Aexport%20default%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F/