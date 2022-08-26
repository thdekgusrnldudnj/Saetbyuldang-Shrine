
$(function () {//document.ready
function slideImg() {//slideImg 함수를 생성
var now = $(".imgs>img:first");//변수 now에 첫번째 img요소를 할당
$(".imgs").stop().animate({ "left": "-600px" }, 1000, function () {
  //.imgs에 animate함수를 적용 left를 -600px(이미지의 넓이값)만큼 1초동안 이동(.imgs를 왼쪽으로 600px만큼 이동)
  $(this).append(now).css("left", "0px");
  //애니메이션 기능이 모두 종료된후 첫번째 이미지를 마지막위치로 이동시키고 .imgs의 left속성값을 초기위치값(0)으로 변경하여 다음 슬라이드 준비
})
}
var timer = setInterval(slideImg, 3000);//반복함수를 사용하여 slideImg함수의 실행코드를 3초에 한번씩 반복시킵니다.

$("#imgSlide>button").hover(//button에 hover이벤트 생성
function () {//mouseover시
  clearInterval(timer); //timer에 들어있는 반복함수를 제거
}, function () {//mouseout시
  timer = setInterval(slideImg, 3000);
  //timer변수에 반복함수를 다시 할당합니다.
}
)

//next버튼 클릭시
$(".nexts").click(function () {//.next버튼 클릭시
if ($(".imgs").is(":animated")) return false;
//if함수로 .imgs에 animate효과가 적용중이면 return false로 함수에 있는 코드를 전달하지 않는다.(결과적으로 animate가 중복으로 실행되지 않는다.)
var now = $(".imgs>img:first");
$(".imgs").animate({ "left": "-600px" }, 300, function () {
  $(this).append(now).css("left", "0px");
})
})

//prev버튼 클릭시
$(".prevs").click(function () {
if ($(".imgs").is(":animated")) return false;
var last = $(".imgs>img:last");//마지막 이미지 요소를 last변수에 할당.
$(".imgs").prepend(last).css("left", "-600px").animate({ "left": 0 }, 300);//마지막 이미지 요소를 .imgs의 첫번째 자손 위치로 변경하고 left를 -600px만큼 이동시켜 오른쪽으로 이동시킬 준비를 해줍니다. 그후에 animate함수로 left값을 0으로 애니메이션효과를 적용해 왼쪽에서 오른쪽으로 이미지요소가 슬라이드 되도록 합니다.
})
});



$(function () {//document.ready
function slideImg() {//slideImg 함수를 생성
var now = $(".models>img:first");//변수 now에 첫번째 img요소를 할당
$(".models").stop().animate({ "left": "-600px" }, 1000, function () {
  //.imgs에 animate함수를 적용 left를 -600px(이미지의 넓이값)만큼 1초동안 이동(.imgs를 왼쪽으로 600px만큼 이동)
  $(this).append(now).css("left", "0px");
  //애니메이션 기능이 모두 종료된후 첫번째 이미지를 마지막위치로 이동시키고 .imgs의 left속성값을 초기위치값(0)으로 변경하여 다음 슬라이드 준비
})
}
var timer = setInterval(slideImg, 3000);//반복함수를 사용하여 slideImg함수의 실행코드를 3초에 한번씩 반복시킵니다.

$("#imgSlides>button").hover(//button에 hover이벤트 생성
function () {//mouseover시
  clearInterval(timer); //timer에 들어있는 반복함수를 제거
}, function () {//mouseout시
  timer = setInterval(slideImg, 3000);
  //timer변수에 반복함수를 다시 할당합니다.
}
)

//next버튼 클릭시
$(".nextss").click(function () {//.next버튼 클릭시
if ($(".models").is(":animated")) return false;
//if함수로 .imgs에 animate효과가 적용중이면 return false로 함수에 있는 코드를 전달하지 않는다.(결과적으로 animate가 중복으로 실행되지 않는다.)
var now = $(".models>img:first");
$(".models").animate({ "left": "-600px" }, 300, function () {
  $(this).append(now).css("left", "0px");
})
})

//prev버튼 클릭시
$(".prevss").click(function () {
if ($(".models").is(":animated")) return false;
var last = $(".models>img:last");//마지막 이미지 요소를 last변수에 할당.
$(".models").prepend(last).css("left", "-600px").animate({ "left": 0 }, 300);//마지막 이미지 요소를 .imgs의 첫번째 자손 위치로 변경하고 left를 -600px만큼 이동시켜 오른쪽으로 이동시킬 준비를 해줍니다. 그후에 animate함수로 left값을 0으로 애니메이션효과를 적용해 왼쪽에서 오른쪽으로 이미지요소가 슬라이드 되도록 합니다.
})
});
$(document).ready(function (e) {
var count = 0;//콘텐츠 요소의 순번
var scrollEvent = false; //스크롤 이벤트가 중복으로 적용되지 않고 한번씩만 실행될 수 있도록 해주기위한 변수
var delta; //마우스 휠 이벤트가 발생했을때 반환되는 값을 담기 위한 변수(위 = 120, 아래 = -120)
var artMax = $("article").length - 1;//article의 갯수를 번수에 할당(인덱스번호와 같게 설정하기 위해 -1설정)
$("article").on("mousewheel DOMMouseScroll", function (e) {
//article요소에 마우스휠 이벤트 생성
e.preventDefault();//브라우저기능을 차단, 스크립트와 브라우저 간의 휠기능 간섭을 막아줌
var E = e.originalEvent;//변수에 mousewheel이벤트의 originalEvent값을 할당.
if (E.detail) {//파이어폭스용
  delta = E.detail * -40;
} else {//그 외 브라우저용
  delta = E.wheelDelta;
}
//파이어폭스 외 브라우저는 값이 120, -120으로 반환되지만 파이어폭스의 경우 -3, 3으로 반환됩니다. 값을 동일하게 맞춰주기 위해 -40을 곱하여 변수 delta에 할당합니다.


//마우스휠을 위로 올렸을 경우
if (delta > 1 && scrollEvent == false && count >= 1) {
  //delta변수값이 1보다 크고 scrollEvent변수값이 false이고 count변수값이 1보다 크거나 같을때 실행
  console.log(delta);//콘솔창에 delta 값 출력
  scrollEvent = true;//scrollEvent변수를 ture로 할당하여 animate함수가 종료되기 전까지 중복 적용되지 않도록 해준다.
  count--;//count(순번)변수값에 1을 빼서 다시 count변수에 할당
  var ht = $(window).height()//ht변수에 브라우저의 높이값을 할당
  $("html,body").animate({ "scrollTop": count * ht }, 500, function () {
    scrollEvent = false;//animate함수가 종료된 후에 다시 이벤트가 실행될수 있도록 scrollEvent값을 false로 변경	
  });
  //브라우저의 스크롤위치를 count*ht값으로 애니메이션 효과 적용
  //마우스 휠을 아래로 내렸을 경우	
} else if (delta < 1 && scrollEvent == false && count < artMax) {//delta값이 1보다 작고 scrollEvent값이 false이고 count변수가 aritcle의 갯수보다 작을때 실행
  console.log(delta);
  scrollEvent = true;//위와 동일
  count++; //count변수에 1을 더해서 다시 count변수에 저장
  var ht = $(window).height()//ht변수에 브라우저의 높이값을 할당
  $("html,body").animate({ "scrollTop": ht * count }, 500, function () {
    scrollEvent = false;
  })
}
});
});
$(function () {
var current = 0; //section(콘텐츠요소)의 순번
function scrollmove() {//scrollmove함수 생성 스크롤이 이동되는 구문
//모든 사이드메뉴 버튼에 on클래스를 제거하고 순번이 current인 요소에 on클래스를 추가
$(".navi > li").removeClass("on").eq(current).addClass("on");
//변수 secTop에 순번이 current인 section요소의 top위치값을 할당
var secTop = $("section").eq(current).offset().top;
//스크롤위치를 secTop위치로 이동
$("html,body").stop().animate({ "scrollTop": secTop }, 1000);
}
//사이드 메뉴에 클릭이벤트 생성
$(".navi > li").click(function () {
current = $(this).index();//current변수 값을 클릭한 메뉴 버튼의 순번으로 할당
scrollmove();//scrollmove함수 호출
})

var secleng = $("section").length;//section요소의 갯수를 변수에 할당

//up버튼에 클릭이벤트 생성
$(".up").click(function () {
current--;//current변수값에 1을 빼서 다시 current변수에 할당
//current값이 0보다 작으면 current값을 0으로 고정
if (current < 0) { current = 0 }

scrollmove();//scrollmove함수 호출
});

//down버튼에 클릭이벤트 생성
$(".down").click(function () {
current++;//current변수값에 1을 더해서 다시 current변수에 할당
//current값이 secleng보다 같거나 크면 current값을 section마지막 index번호로 고정
if (current >= secleng) { current = secleng - 1 }

scrollmove();//scrollmove함수 호출
});
});
