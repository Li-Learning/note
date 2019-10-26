
### 用法指令筆記
1. v-model 雙向綁定資料
    - 用在綁定表單或是自訂元件上面來實現雙向綁定
      * `message: '哈囉'`
      ```
      <div id="app">
          <input type="text" v-model="message">
      </div>
      ```
2. v-html / v-text
    - 在標籤上加入 v-text="message" / v-html="message"
    - 兩者區別在於 v-html 可以支援標籤， v-text 則會把標籤轉成字串
    * 加上 v-once 變成單次綁定(當資料再次變更時，不會跟著改變，只會呈現第一次渲染的資料)
        ```
        <p v-text="text" v-once></p>
        ```

3. v-bind 動態修改屬性
    - 在標籤上加入 v-bind:屬性＝"值"
    - 縮寫 :屬性＝"值"
        * imgSrc 是 data 裡面的變數
        ```
        <div id="app">
            <img v-bind:src="imgSrc" alt="...">
        </div>
        ``` 
    * 技巧: 在 input 上加入 :disabled="isDisabled" 來動態操作 disabled  (idDisacled: true / false)
4. v-for 產生多筆資料到畫面上
    - 像迴圈的用法
    - v-for="(item,index) in array / object / 10(數字)"
    - v-for 代入物件時，索引值就會變成成員
    - item 是自定義變數
    - index 是陣列索引值
    - item in array 用中文解釋就是將 array 一一的把值存進 item 變數
      * 在 data 中建立 list 陣列 `[{name:'小明',age:18},{name:'媽媽',age:40}]`
      ```
      <div id="app">
      	<ul v-for="(item, index) in list" v-if="item.age < 25" :key="item.age">
      		<li>
      				{{index+1}}-{{item.name}} 是 {{item.age}} 歲
      		</li>
      	</ul>
      </div>
      ```
    * 如果要額外操作沒有預先定義的資料時，需要用 Vue.set(target, key, value) 來做設定
        - target 要修改的目標(陣列) p.s.物件不知道能不能行?
        - key 索引值
        - value 要修改的資料
        ```
        cantWork: function () {
            // 情境一 : 無法運行
            // 資料會改變但畫面不會變動
            // this.arrayData.length = 0;
            // 情境二 : 無法運行
            // 資料會改變但畫面不會變動
            // this.arrayData[0] = {
            //    name: '阿強',
            //    age: 99
            // }
            // 解法
            Vue.set(this.arrayData, 0, {
                name: '阿強',
                age: 99
            })
            console.log(this.arrayData)
        }
        ```

5. v-if 在標籤加入判斷式， true 才渲染，"相鄰"的元素可以加上 v-else 或 v-else-if="判斷式" 來判斷
    * v-else 、 v-else-if="判斷式" 要相鄰才有連帶關係
    - v-if="判斷式"
    - 和 v-for 搭配一起使用
    - 範例在上面和 v-for 一起
    ```
    <div class="alert alert-success" v-if="isSuccess">成功!</div>
    <div class="alert alert-danger" v-else>失敗!</div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="isSuccess" v-model="isSuccess">
        <label class="form-check-label" for="isSuccess">啟用元素狀態</label>
    </div>
    ```

6. v-on 加入事件來操作畫面
    - v-on:click="方法(也就是function)"
    - 縮寫 ＠click="方法"
    - 在 vue 物件中加入 methods 物件，裡面加入 function 來操作
    ``` 
    <div id="app">
        <input type="text" class="form-control" v-model="text" />
        <button class="btn btn-primary mt-1" v-on:click="reverseText">反轉字串</button>
        <div class="mt-3">
            {{ newText }}
        </div>
    </div>
    ```
    * 可以代入參數 @click="reverseText(item)"
7. 事件修飾符
    - 在事件處理程序中調用event.preventDefault()或event.stopPropagation()是非常常見的需求
    - 通常都是在 methods 中加入 event.preventDefault()
    - 而修飾符提供更好的方式，只有純粹的數據邏輯，而不是去處理DOM事件細節
    - 在事件後面加上修飾符 v-on:click.prevent="method"
    - 修飾符可以串連 v-on:click.stop.prevent="method"
    - 常用整理
        1. .stop - 調用 event.stopPropagation()
        2. .prevent - 調用 event.preventDefault()
        3. .capture - 添加事件監聽器時使用 capture 模式
        4. .self - 只當事件是從監聽器綁定的元素本身觸發時才觸發回調
        5. .once - 只觸發一次回調
8. 按鍵修飾符
    - 和事件修飾符差不多
    - 只是用在鍵盤事件 `<input v-on:keyup.enter="submit">`
    - 常用整理
        - 鍵盤 keyup / keydown 事件 
            1. .13 用 keycode 來觸發 13 是 enter 的 keycode
            2. 別名修飾 - .enter, .tab, .delete, .esc, .space, .up, .down, .left, .right
            3. 修飾符來實現僅在按下相應按鍵時才觸發鼠標或鍵盤事件的監聽器 - .ctrl, .alt, .shift, .meta
            ```
             <h6 class="mt-3">keyCode</h6>
             <input type="text" class="form-control" v-model="text" @keyup.13="trigger(13)">

             <h6 class="mt-3">別名修飾</h6>
             <input type="text" class="form-control" v-model="text" @keyup.space="trigger('space')">

             <h6 class="mt-3">相應按鍵時才觸發的監聽器</h6>
             <input type="text" class="form-control" v-model="text" @keyup.shift.enter="trigger('shift + Enter')">
            ```
        - 滑鼠 click 事件
            1. .left - (2.2.0) 只當點擊鼠標左鍵時觸發
            2. .right - (2.2.0) 只當點擊鼠標右鍵時觸發
            3. .middle - (2.2.0) 只當點擊鼠標中鍵時觸發
                ```
                 <span class="box" @click.right="trigger('Right button')">
                ```
9. 表單修飾符
        - v-model.lazy="" 
            - 會當你確定輸入完成按下 enter 或是點擊到其他區塊時才呈現
            ```
            <input type="text" class="form-control" v-model.lazy="lazyMsg">
            ```
        - v-model.number=""
            - 讓輸出的資料型態由 String 轉為 Number
            ```
                <input type="number" class="form-control" v-model.number="age">
            ```
        - v-model.trim=""
            - 讓輸出的字串與原本的字串中間不要有空格
            ```
                    <input type="text" class="form-control" v-model.trim="trimMsg">
            ```
10. v-bind:class 動態切換 class name
    * vue.js 會自動加上 Prefix (前綴詞)
    - 以物件的方式加入 
        1. :class="{ '要加入的 ClassName' : 判斷式 ,'要加入的 ClassName2' : 判斷式2 }"
            ```
                <div id="app">
                    <div class="box" :class="{'rotate':isTransform, 'bg-danger':boxColor}"></div>
                    <hr>
                    <button class="btn btn-outline-primary" @click=" isTransform = !isTransform ">選轉物件</button>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="classToggle1" v-model="boxColor">
                        <label class="form-check-label" for="classToggle1">切換色彩</label>
                    </div>
                </div>
            ```
        2. :class="{ 物件 }"
            * 物件成員如果中間有 "-" ex: bg-danger ，就需要用索引的方式取得 objectClass['bg-danger']
            ``` 
                // html 
                <div class="box" :class="objectClass"></div>
                    <hr>
                    <button class="btn btn-outline-primary" @click="objectClass.rotate = !objectClass.rotate">選轉物件</button>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" v-model="objectClass['bg-danger']" id="classToggle2">
                        <label class="form-check-label" for="classToggle2">切換色彩</label>
                    </div>
                </div>
                // script
                var app = new Vue({
                    el: '#app',
                    data: {
                        objectClass: {
                            'rotate': false,
                            'bg-danger': false,
                        }
                    });
            ```
    - 以陣列的方式加入 
        1. 直接加入 :class="['btn-outline-primary', 'active' ]"
        2. 在 data 建立陣列 aryClass: ['btn-outline-primary', 'active' ]，再用 :class="aryClass"
        * 進階用法: 建立空陣列，再用 input v-model 雙向綁定加入 value
            ``` 
                // html
                <button class="btn" :class="arrayClass">操作本元件</button>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="classToggle3" v-model="arrayClass" value="btn-outline-primary">
                    <label class="form-check-label" for="classToggle3">切換樣式</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="classToggle4" v-model="arrayClass" value="active">
                    <label class="form-check-label" for="classToggle4">啟用元素狀態</label>
                </div>
                // script
                data: {
                    arrayClass: []
                }
            ```
    - 行內樣式 style 
        * 屬性用駝峰式 ex: backgroundColor
        ```
            data: {
                // 行內樣式
                // 使用駝峰式命名
                styleObject: {
                    backgroundColor: 'red',
                    borderWidth: '5px'
                },
                styleObject2: {
                    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.16)'
                }
            }
        ```
        - 以物件形式
            1. <div class="box" :style="{backgroundColor: 'red',borderWidth: '5px'}"></div>
            2. <div class="box" :style="styleObject2"></div>
        - 以陣列形式
            1. <div class="box" :style="[styleObject, styleObject2]"></div>
        

11. v-model 雙向綁定 表單整理
    - text / textarea 
        綁定空字串，單純雙向綁定資料
    - radio / checkbox 
        沒有 value 
            綁定布林值( checkbox:false )，回傳 true / false 
        有 value 
            radio 綁定空字串，回傳字串
            checkbox 綁定陣列，用陣列的方式把值加入陣列
    - select 
        v-model 綁定在 select 上，資料是 option 上的 value
        ```
            <select v-model="selected">
                <option value="" disabled>-- 選擇 --</option>
                <option value="小明">小明</option>
                <option value="小美">美麗的小美</option>
            </select>
        ```
12. 雙大括號 {{  }}
    - 用於呈現資料，以字串的形式，像 v-text=""
    - 可以直接在括號內寫語法 {{ text.split('').reverse().join('') }}
    - 資料相加(字串或計算都行) {{ text + rowHtml }}
    ```
        <p>
            {{ text }}
        </p>
    ```
13. template 標籤
    - 當有需要用到 vue 指令，但不希望輸出渲染畫面時可以使用
    - 搭配 v-for 使用
        * 一次渲染兩個 tr
        ```
            <table class="table">
                <template v-for="(item, key) in arrayData">
                    <tr>
                        <td>{{ item.age }}</td>
                    </tr>
                    <tr>
                        <td>{{ item.name }}</td>
                    </tr>
                </template>
            </table>    
        ```
    - 搭配 v-if 使用
        * 統一管理
        ```
            <table class="table">
                <thead>
                    <th>編號</th>
                    <th>姓名</th>
                </thead>
                <template v-if="showTemplate">
                    <tr>
                        <td>1</td>
                        <td>安妮</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>小明</td>
                    </tr>
                </template>
            </table>
        ```
14. :key="item.id" * 很重要
    - 很重要，因為 vue 是利用高效能的方式來切換樣版內容
    - 如果沒有加入，當兩元素很接近時就會變成局部切換
    - 值可以自訂，建議使用唯一的值來當 key 的值，例如 id 
    - 建議有使用 v-for v-if 時，都加上 :key
    - 因為會有好幾筆資料，程式會希望我們為各筆資料下 key，好讓它分辦誰是誰
    - 如果沒加入 :key 在操作 v-for 可能會有問題
15. v-show 
    - v-show="isSuccess"
    - 和 v-if 很像，但 v-if 是直接移除元素 
    - v-show 是用 display: none 來切換，所以元素還會存在
# Vue 物件中的寫法
1. el
    - element 的縮寫
    - 用來綁定元素
    - 可以用 id 或是 class 的方式取得
2. data
    - 物件
    - 用來定義資料
    - 資料要預先定義(有例外的情況)
3. methods
    - 就是互動的函式，需要觸發才會運作，會用來修改資料內容
4. computed
    - 不能傳參數
    - 和 methods 很像，不同的是其觸發條件
    - 在 computed 中，所宣告的任何屬性都是 function ，並且都會回傳一個值
    - 當 data 的值更動時，computed 的結果才會跟著更動
    - 直接將結果存到變數中，而這變數可以被使用
    - 是在監控資料更動後，重新運算結果呈現於畫面上，一般來說不會修改資料，只會回傳用於畫面呈現的資料
    ```
        var app = new Vue({
            el: '#app',
            data: {
                text: '',
                newText: ''
            },
            computed: {
                reverseText() {
                    return this.text.split('').reverse().join('');
                }
            }
        });
        // this 指向 data
        // 資料回傳存在 reverseText 變數
        // 再利用 {{ reverseText }} 或是 v-text="reverseText" 的方式渲染畫面
    ```
* Methods 與 Computed 的使用情境
    - computed 是在監控資料更動後，重新運算結果呈現於畫面上，一般來說不會修改資料，只會回傳用於畫面呈現的資料
    - methods 就是互動的函式，需要觸發才會運作，會用來修改資料內容
    效能
        如果資料量大，computed 自然會比較慢
        只要資料變動就會觸發，無形之中執行次數也會增加
        因此在大量資料時，會建議透過 methods 減少不必要的運算喔
    用法
        若希望 UI 顯示隨資料立即更新，就用 computed，若是由其他東西觸發再來更新 UI 的，則是使用 methods。
5. watch 監聽
    - 一樣是物件的形式
    - 可以監聽資料，例如監聽一個變數，使其三秒後變回 false
        ```
            watch: {
                // 這邊的 trigger 就是在 data 宣告的變數，也就是要監聽的變數，當其產生變化時就執行 function
                trigger: function() {
                    let vm = this;
                    setTimeout(()=> {
                        vm.trigger = false;
                    },3000)
                }
            }
        ```
# 使用技巧筆記
1. 計算及監聽
    - 如果太多 {{ 表達式 }} 在畫面上，會很難管理，所以利用計算後並存到一個變數裡會更為乾脆
        ```
            // 用 computed 篩選資料
            <input type="text" class="form-control" v-model="filterText">
            <ul>
                <li v-for="(item, key) in filterArray" :key="item.age">
                {{ key }} - {{ item.name }} {{ item.age }} 歲 <input type="text">
                </li>
            </ul>

            // script
            // 搭配 match 來篩選
            computed: {
                filterArray: function(){
                    let vm = this;
                    return vm.arrayData.filter(function(item){
                        return item.name.match(vm.filterText);
                    })
                }
            }
        ```
    - 利用 computed 來呈現時間，因為只要資料有變動，computed 就會重新渲染
2. 表單
    - select 利用 v-for 新增 option 
        ```
            <select name="" id="" class="form-control" v-model="selected2">
                <option disabled value="">請選擇</option>
                <option :value="item" v-for="item in selectData">{{ item }}</option>
            </select>
            <p>小明喜歡的女生是 {{ selected2 }}。</p>
        ```
        * html 屬性 select 加入 multiple 變成多選
    - 複選框 true-value / false-value
        當 sex == true 時，顯示 true-value 的值，反之
        ```
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="sex" v-model="sex" true-value="男生" false-value="女生">
                <label class="form-check-label" for="sex">{{ sex }}</label>
            </div>
        ```
    - 表單的修飾符
        - v-model.lazy="" 
            - 會當你確定輸入完成按下 enter 或是點擊到其他區塊時才呈現
            ```
                <input type="text" class="form-control" v-model.lazy="lazyMsg">
            ```
        - v-model.number=""
            - 讓輸出的資料型態由 String 轉為 Number
            ```
                <input type="number" class="form-control" v-model.number="age">
            ```
        - v-model.trim=""
            - 讓輸出的字串與原本的字串中間不要有空格
            ```
                    <input type="text" class="form-control" v-model.trim="trimMsg">
            ```

# vue component 元件
1. 基本概念
    - 一個網頁可以有很多個元件，像是 header 元件、 content 元件、 aside 元件等
    - 元件中可以再包著元件，例如 aside 元件裡面可以再包著 component 元件
    - 元件可以重複使用，資料個別獨立
    - 元件中的資料會個別儲存不受其他影響，感覺應該是閉包 closure 的概念
    - 傳遞
        - 當外層要傳遞資料到內層時，會使用一個叫 Props 的方法，是即時的傳遞
        - 當內層要往外層送時，則是使用 Emit Event ，是一個事件，必須要觸發一個事件才能傳遞
    * 元件內層的資料跟外層的資料是分開的
2. 建立方式
    - 全域
        ```
            Vue.component ('自定義標籤名稱',{
                data: function () {
                    return {
                        counter: 0
                    }
                }
            })
        ```
        - 自定義標籤名稱要用來當元件標籤
        - 帶入一個物件，寫法很像建立應用程式 new Vue，也要帶入 data 
        - 元件中的 data ，必須要帶入一個 function ，並 return 一個物件
            * 此物件中的資料跟應用程式中的 data 一樣
    - 區域
        1. 先建立一個物件
        2. 在 vue 應用程式中加入 components: { '自定義標籤名稱':物件 }
            * 區域要有宣告才能使用
            ```
                const child = {
                    props: ['person'],
                    template: '#rowComTemplate'
                }

                var app = new Vue({
                    el: '#app',
                    data: {
                        data: [
                            {
                                name: '小明',
                                cash: 100,
                                icash: 500,
                            },
                            {
                                name: '杰倫',
                                cash: 10000,
                                icash: 5000,
                            }
                        ]
                    },
                    components: {
                        'row-com': child
                    }
                });
            ```
3. 建立模版 template
    - 基本建立方式
        ```
            Vue.component ('counter-component',{
                data: function () {
                    return {
                        counter: 0
                    }
                },
                template: `
                    <div>
                        你已經點擊 <button class="btn btn-outline-secondary btn-sm" @click="counter += 1">{{ counter }}</button> 下。
                    </div>
                `
            })
        ```
    - 利用 x-template 方式建立模板
        1. 宣告一個 <script type="text/x-template" id="idComponent"> {{ 模板 }} </script> 
        2. 利用全域或區域的方式建立元件，其中 template = "#idComponent"
            ```
                <script type="text/x-template" id="rowComTemplate">
                    <tr>
                        <td>{{ person.name }}</td>
                        <td>{{ person.cash }}</td>
                        <td>{{ person.icash }}</td>
                    </tr>
                </script>

                <script>
                Vue.component ('row-com',{
                    props: ['person'],
                    template: '#rowComTemplate'
                })
                let app = new Vue({
                    ...
                })
                </script>
            ```
4. 使用方法
    - 在 html 中加入標籤 <counter-component></counter-component>
    - 利用 is="counter-component" 來使用
        - 使用情況像是 <tbody> 底下只能接 <tr> 這時就可以使用 is="" ，例如 <tr is="counter-component">...</tr>
        ```
            <tbody>
                <tr is="row-com" v-for="(item, key) in data" :person="item" :key="key"></tr>
            </tbody>
        ```
    * is
        - 靜態，就是上面那種寫法
        - 動態，在前面加上 v-bind:

5. 資料傳遞
    * 因為元件內層和外層的資料是分開的，所以要透過不同方法傳遞資料
    - props
        - 外 -> 內
        - 當 data 中的值要傳入元件內時使用
        - 在元件內建立 props 屬性，可以是陣列或物件
            - 陣列
                ```
                    props: ['自定義變數']
                ```
            - 物件
                ```
                    props: {
                        自定義變數: {
                            // 定義型別和預設值
                            type: Number,
                            default: 100,
                        }
                    }
                ```
        - 在標籤上加入 :元件自定義變數="data 中的變數" 來傳遞進去元件內層
            * 有用 v-bind: 就是動態，沒有就是靜態(字串型別)
            ```
                // html
                <tr is="row-com" v-for="(item, key) in data" :person="item" :key="key"></tr>
                // script
                Vue.component ('row-com',{
                    props: ['person'],
                    template: '#rowComTemplate'
                })
            ```
        * props 使用注意事項
            - 當使用 DOM 中的模板時，camelCase (駝峰命名法) 的 prop 名需要使用其等價的 kebab-case (短橫線分隔命名) 命名
                ```
                    // html
                    <h2>靜態傳遞</h2>
                    <photo img-url="https://images.unsplash.com/photo-1522204538344-922f76ecc041?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=50e38600a12d623a878983fc5524423f&auto=format&fit=crop&w=1351&q=80"></photo>
                    <h2>動態傳遞</h2>
                    <photo :img-url="url"></photo>
                    // script
                    Vue.component('photo', {
                        props: ['imgUrl'],
                        template: '#photo'
                    })
                    var app = new Vue({
                        el: '#app',
                        data: {
                            url: 'https://images.unsplash.com/photo-1522204538344-922f76ecc041?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=50e38600a12d623a878983fc5524423f&auto=format&fit=crop&w=1351&q=80'
                        }
                    });
                ```
            - 單向數據流
                - 當從外部傳遞資料到內部時，系統希望是單向的，而不是雙向的，所以當你反向修改資料時，系統會跳 error
                - 解決辦法: 利用元件的 data 來 return 一個新變數，其等於修改後的值。
                ```
                    Vue.component('photo', {
                        props: ['imgUrl'],
                        template: '#photo',
                        data: function(){
                            return {
                                newUrl: this.imgUrl
                            }
                        }
                    })
                ```
            - 非同步資料的處理
                - 解決辦法: 利用 v-if="資料" ，來等到資料成功載入後，再顯示
                ```
                    // html
                    <div class="row">
                        <div class="col-sm-4">
                            <card :user-data="user" v-if="user.picture"></card>
                        </div>
                    </div>
                    // script
                    Vue.component('card', {
                        props: ['userData'],
                        template: '#card',
                        data: function () {
                            return {
                                user: this.userData
                            }
                        }
                    });
                    var app = new Vue({
                        el: '#app',
                        data: {
                            user: {},
                            url: 'https://images.unsplash.com/photo-1522204538344-922f76ecc041?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=50e38600a12d623a878983fc5524423f&auto=format&fit=crop&w=1351&q=80',
                            isShow: true 
                        },
                        created: function() {
                            var vm = this;
                            $.ajax({
                                url: 'https://randomuser.me/api/',
                                dataType: 'json',
                                success: function(data) {
                                    vm.user = data.results[0];
                            }
                            });
                        }
                    });
                ```

            - props 的型別問題
                - 利用物件定義其型別
                ```
                    Vue.component('prop-type', {
                        // props: ['cash'], // 這是沒定義型別的寫法
                        props: {
                            cash: {
                                type: Number,
                                default: 200,
                            }
                        },
                        template: '#propType',
                        data: function() {
                            return {
                                newCash: this.cash
                            }
                        }
                        });

                        var app = new Vue({
                        el: '#app',
                        data: {
                            cash: 300
                        }
                    });
                ```
            - 靜態與動態傳入數值差異
                - 靜態傳入會是字串
                - 動態傳入可以不同型別
    - emit 
        - 內 -> 外
        - 當要把元件內的資料傳遞出去時
        - 在元件內的 methods 中加入 this.$emit('自定義的事件名稱',參數)
            * $emit 觸發的自定義事件中，向父組件傳遞的事件也可以帶參數，而父組件的 methods 內的 sumTotal 方法就可以透過函式參數的方式接收
            ```
                // html
                <h2>透過 emit 向外傳遞資訊</h2>
                我透過元件儲值了 {{ cash }} 元
                // sum 是自定義事件名稱, sumTotal 是應用程式中定義的方法
                <button-counter @sum="sumTotal"></button-counter>

                // script
                Vue.component('buttonCounter', {
                    template: `<div>
                            <button @click="incrementCounter" class="btn btn-outline-primary">增加 {{ counter }} 元</button>
                            <input type="number" class="form-control mt-2" v-model="counter">
                        </div>`,
                    data: function() {
                        return {
                            counter: 1
                        }
                    },
                    methods: {
                        incrementCounter: function(){
                            this.$emit('sum',Number(this.counter))
                        }
                    }
                });
            ```
6. slot 插槽
    - 元件會重複使用，但有些區塊要修改時，就可以使用
    - 使用方法
        1. 在元件標籤中加入欲替換的元素，並加入 slot="自定義名稱"，用來對應元件模板中的 slot
            * 要插入對應的標籤就直接寫 <header slot="header">標題</header>
            * 不想插入標籤就用 <template slot="..."></template> 
        2. 在元件模版中將欲替換的區塊標籤改為 slot ，並加入 name="自定義名稱" ex: <slot name="header">預設標題</slot>

7. 元件的生命週期
    - 沒有加上 <keep-alive> 的話，元件被關掉或是隱藏時就會被釋放，不會存起來
    - 加上 <keep-alive> 時才會觸發 activated() 和 deactivated()
    ```
        // html
        <keep-alive>
            <app-child v-if="isShowing"></app-child>
        </keep-alive>
        // Script
        const Child = {
            template: '#childarea',
            data: function () {
                return {
                text: 'Vue data 資料狀態'
                }
            },
            beforeCreate() {
                console.log(`beforeCreate! ${this.text}`);
            }, 
            created() {
                alert(`created! ${this.text}`);
            }, 
            beforeMount() {
                alert(`beforeMount! ${this.text}`);
            }, 
            mounted() {
                alert(`mounted! ${this.text}`);
            },
            updated () {
                console.log(`updated! ${this.text}`);
            },
            // 加上 <keep-alive> 時才會觸發
            activated () {
                alert(`activated! ${this.text}`);
            },
            // 加上 <keep-alive> 時才會觸發
            deactivated () {
                alert(`deactivated! ${this.text}`);
            },
            beforeDestroy() {
                console.log(`beforeDestroy! ${this.text}`);
            }, 
            destroyed() {
                console.log(`destroyed! ${this.text}`);
            }
        };
    ```
# Vue 常用 API
1. Extend
    - 解決的問題
        - 當有兩個"不同"元件，但很相似的時候，可以用 extend 將相同的資料包起來
        - 很像用物件傳入資料，但是不同的是 extend 是可以擴充的，而物件則是整個取代
    - 寫法
        ```
            // newExtend 自定義
            let newExtend = Vue.extend({
                // 放入元件的資料
                data: function(){
                    return {
                        ...
                    }
                },
                methods: {
                    ...
                },
                computed: {
                    ...
                }
            })
            Vue.component('childOne',{
                props: ['person'],
                extends: newExtend,
            })
        ```
        * 在元件內 extend 記得加 s
    - 也可以額外擴充資料進去，不會覆蓋掉原本的資料
        - 例如上述例子
        ```
            // newExtend 自定義
            let newExtend = Vue.extend({
                // 放入元件的資料
                data: function(){
                    return {
                        data: '第一份資料'
                    }
                },
                methods: {
                    ...
                },
                computed: {
                    ...
                }
            })
            Vue.component('childOne',{
                props: ['person'],
                extends: newExtend,
                data: function(){
                    return{
                        newData: 第二份資料'
                    }
                }
            })
        ```
        * 兩份資料都會共存
        * 也可以用 extend 中的變數 data 新增資料，這時則會覆蓋掉舊的
2. filter
    - 概念
        - 用來修改輸出資料
    - 優點
        1. 可以重複使用
        2. 可以用很多個 filter
    - 寫法
        1. 在資料後方加入 {{ data | filter1 | filter2 }}
        2. 在元件內部加上 filters: {  }
        * 可以代入一個參數，會將該 filter 前面的資料代入
            ```
                var child = {
                    props: ['person'],
                    tempalte: '#row-component',
                    filters: {
                        currency: function(n){
                            return ...; // 處理資料 
                        }
                    }
                }
            ```
3. set