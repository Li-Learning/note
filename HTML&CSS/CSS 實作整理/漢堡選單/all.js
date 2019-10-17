$( document ).ready(function() {
  // 漢堡選單點擊特效
  $('.humNavBtn').click(function(){
    $('.humNavBtn-top').toggleClass('humNavBtn-top_active')
    $('.humNavBtn-middle').toggleClass('humNavBtn-middle_active')
    $('.humNavBtn-bottom').toggleClass('humNavBtn-bottom_active')
  })
})

