$(function(){
  //주메뉴에 마우스를 올리면
  $(".nav > li").mouseover(function(){
    $(this).find(".sub").stop().slideDown("fast");
    //해당 메뉴의 자식인 .sub에 slideDown메서드 적용
  });
  //주메뉴에서 마우스가 떠났을때
  $(".nav > li").mouseout(function(){
    $(this).find(".sub").stop().slideUp("fast");
    //해당 메뉴의 자식인 .sub에 slideUp메서드 적용
  });
})