const allData = [
  {
    item: 0,
  },
  {
    item: 1,
  },
  {
    item: 2,
  },
  {
    item: 3,
  },
  {
    item: 4,
  },
  {
    item: 5,
  },
  {
    item: 6,
  },
  {
    item: 7,
  },
  {
    item: 8,
  },
  {
    item: 9,
  },
  {
    item: 10,
  },
  {
    item: 11,
  },
  {
    item: 12,
  },
  {
    item: 13,
  },
]
const page = {
  countPage: (n, length) => {
    const totalPage = Math.ceil(length / n);
    return totalPage;
  },
  showPage: (p, n, data) => {
    // p = 頁碼, n = 每頁項數, json 資料
    const pageItems = [];
    // 取得該頁第一項的索引
    let i = (p - 1) * n;
    // 取得該頁最後項的索引
    const last = i + n;
    for (i; i < last; i += 1) {
      // 先檢查有沒有資料，如果沒資料，跳出迴圈
      if (!data[i]) {
        break;
      } else {
        pageItems.push(data[i]);
      }
    }
    // 測試用，陣列要轉字串，再驗證
    // return pageItems.sort().toString();
    // 正式用，回傳陣列
    console.log(pageItems);
    return pageItems;
  }
}
page.showPage(3, 5, allData);
// module.exports = page;
