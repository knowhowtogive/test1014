$(document).ready(function(){


  $("#fullpage").fullpage({
    anchors : ["section1", "section2", "section3", "section4", "section5", "section6", "section7"],
    afterLoad : function(origin, destination, direction){
      const sectionName = document.querySelector('section-name');
    }
  });

  // 로고에 마우스가 닿으면 빨간색으로 변하고
  // 로고에 마우스가 떠나면 검은색으로 변한다
  $(".logo_red").hide();

  $(".logo-box").mouseenter(function(){
    $(".logo_black").fadeOut(100);
    $(".logo_red").fadeIn(100);
  });

  $(".logo-box").mouseleave(function(){
    $(".logo_black").fadeIn(100);
    $(".logo_red").fadeOut(100);
  });


  // tap menu
  $(".bestseller-tap-con li").hide();

  $(".bestseller-tap-btn li").eq(0).addClass("active");
  $(".bestseller-tap-con li").eq(0).show();

  $(".bestseller-tap-btn li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    var indexNum = $(this).index();
    $(".bestseller-tap-con li").eq(indexNum).fadeIn().siblings().hide();
  });

});