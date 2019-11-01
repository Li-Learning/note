# css 管理

### 開發流程
- 切版前，先觀看設計稿規格
- 確認導入哪些框架，要用哪個框架的 gird system
- 先將 Layout 建立起來
- 試著將可共用元素獨立出來
- 針對各頁面進行細節規劃

### 架構
```
/*--- GLOBAL 全域 ---*/
    /*-- Structure 結構 --*/
    /*-- Color 色彩 --*/
    /*-- Forms 表單 --*/
    /*-- Tables 表格 --*/
/*--- HEADER 表頭 ---*/
/*--- NAV 導覽 ---*/
    /*-- Primary 主要 --*/       
    /*-- Secondary 次要 --*/  
    /*-- -CONTENT 內容 ---*/  
/*--- SIDEBAR 側邊欄 ---*/  
/*--- FOOTER 表尾 ---*/    
```

***

### BEM
1. 命名規則
    - Block：
        - searchForm
    - Block__Element
        - searchForm__input、searchForm__list
    - Block__Element_Modifier
        - searchForm__input_active
  
    - Block 採用小駝峰式命名： searchForm
    - 階層不可超過五層
  
2. 前綴詞
    - l - layout 
    - e - element
    - p - page 
    - h - helper
    - col - 格線系統
  
### scss 管理
1. 檔案夾
   - layout 每個頁面都會有
   - element 元素
   - helper 幫手框架
   - config 配置: 放 reset,
   - page 只有某頁才會用到的
   - moldule 模組
2. 寫法
   1. 接續 : &
   2. mixin : +
```
.p-story
    padding: 5px
    &__section
        border: 1px
    +desktop-below
        margin-top: 5px
```
編譯成
```
.p-story {
    padding: 5px;
}
.p-story .p-story__section {
    border: 1px;
}
@media (max-width:960px) {
   .p-story{
       margin-top: 5px;
   }
}
```

***
## 命名
### 網頁本體
|  class  |  語意  |
| ------------- | ------------- |
|  .main  |  頁面主體  |
|  .wrapper  |  頁面外圍控制整體布局寬度  |
|  .container  |  容器,用於最外層  |
|  .layout	 |  布局  |
|  .header  |  頁頭部分  |
|  .footer  |  頁腳部分  |

### 選單導航
|  class  |  語意  |
| ------------- | ------------- |
|  .navbar  |  主導航  |
|  .nav  |  導航  |
|  .subnav  |  二級導航  |
|  .menu  |  菜單  |
|  .submenu	 |  子菜單  |
|  .sideBar	 |  側欄  |

### 商業
|  class  |  語意  |
| ------------- | ------------- |
|  .copyright  |  版權資訊  |
|  .branding  |  商標  |
|  .logo  |  網站LOGO標誌  |
|  .siteinfo  |  網站信息  |
|  .siteinfoLegal  |  法律聲明  |
|  .siteinfoCredits  |  信譽  |
|  .joinus  |  加入我們  |
|  .partner  |  合作夥伴  |
|  .service  |  服務  |
|  .regsiter  |  註冊  |


### 通用
|  class  |  語意  |
| ------------- | ------------- |
|  .title  |  標題  |
|  .faqs  |  常見問題  |
|  .tag  |  標籤  |
|  .message  |  提示信息  |
|  .tips  |  小技巧  |
|  .vote  |  投票  |
|  .friendlink  |  友情連接  |
|  .summary  |  摘要  |
|  .loginbar  |  登錄條  |
|  .searchInput  |  搜索輸入框  |
|  .hot  |  熱門熱點  |
|  .search  |  搜索  |
|  .search_output  |  搜索輸出和搜索結果相似  |
|  .searchBar  |  搜索條  |
|  .search_results  |  搜索結果  |
|  .arrow  |  箭頭  |
|  .guild  |  指南  |
|  .sitemap  |  網站地圖  |
|  .list  |  列表  |
|  .homepage  |  首頁  |
|  .subpage  |  二級頁面子頁面  |
|  .toolbar  |  工具條  |
|  .drop  |  下拉  |
|  .dorpmenu  |  下拉菜單  |
|  .status  |  狀態  |
|  .scroll  |  滾動  |
|  .tab  |  標籤頁  |
|  .news  |  新聞  |
|  .download  |  下載  |
|  .banner  |  廣告條  |
|  .screenshot  |  縮略圖  |
|  .keyword  |  關鍵詞  |
|  .blog  |  博客  |
|  .forum  |  論壇  |

### 產品
|  class  |  語意  |
| ------------- | ------------- |
|  .products  |  產品  |
|  .products_prices  |  產品價格  |
|  .products_description  |  產品描述  |
|  .products_review  |  產品評論  |
|  .editor_review  |  編輯評論  |
|  .news_release  |  最新產品  |
|  .publisher  |  生產商  |