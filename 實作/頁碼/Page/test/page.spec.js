// 我們載入的斷言式expect，等下會由它來判定。
const expect = require('chai').expect;

// 測試的程式
const page = require('../all');
const countPage = page.countPage;
const showPage = page.showPage;

describe('測試計算頁數功能', () => {
  // 單元測試標題: 受測方法＿傳入參數意義＿期望得到的結果
  it('countPage_每頁 5 項，總共 13 項_共 3 頁', () => {
    expect(countPage(5, 13)).to.equal(3);
  });
  it('countPage_每頁 20 項，總共 105 項_共 11 頁', () => {
    expect(countPage(20, 105)).to.equal(6);
  });
  it('countPage_每頁 10 項，總共 0 項_共 0 頁', () => {
    expect(countPage(20, 0)).to.equal(0);
  });
});

describe('測試每頁項數', () => {
  const data = [{a: 1},{a: 2},{a: 3},{a: 4},{a: 5},{a: 6},{a: 7},{a: 8},{a: 9},{a: 10},{a: 11},{a: 12},{a: 13},{a: 14},{a: 15},{a: 16},{a: 17}];
  // 單元測試標題: 受測方法＿傳入參數意義＿期望得到的結果
  it('showPage_點第 1 頁，欲列出 5 項_列出 0~4 項', () => {
    expect(showPage(1, 5, data)).to.equal([{a: 1},{a: 2},{a: 3},{a: 4},{a: 5}].sort().toString());
  });
  it('showPage_點第 2 頁，欲列出 10 項_列出 11~17 項', () => {
    expect(showPage(2, 10, data)).to.equal([{a: 11},{a: 12},{a: 13},{a: 14},{a: 15},{a: 16},{a: 17}].sort().toString());
  });
  it('showPage_點第 4 頁，欲列出 5 項_列出 15~16 項', () => {
    expect(showPage(4, 5, data)).to.equal([{a: 16},{a: 17}].sort().toString());
  });
});