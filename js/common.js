$(document).ready(function(){
  
  $(window).on("hashchange", function(){
    var hashname = location.hash;

    if(hashname == "#section1"){
        $("header").removeClass("fix");
    }else{
        $("header").addClass("fix");
    }
  });


  // depth1의 화살표를 클릭하면 depth2가 열린다
  $("#m-depth2-1").hide();
  $("#drop1").click(function(){
    $("#m-depth2-1").slideToggle("fast");
  });

  $("#m-depth2-2").hide();
  $("#drop2").click(function(){
    $("#m-depth2-2").slideToggle("fast");
  });

  $("#m-depth2-3").hide();
  $("#drop3").click(function(){
    $("#m-depth2-3").slideToggle("fast");
  });



  // 메뉴에 마우스가 닿으면 하위메뉴가 내려온다.
  $(".depth2").hide();
  $(".gnb-area1").mouseenter(function(){
    $("#depth2-1").slideDown();
  });
  $(".gnb-area2").mouseenter(function(){
    $("#depth2-2").slideDown();
  });
  $(".gnb-area3").mouseenter(function(){
    $("#depth2-3").slideDown();
  });

  // 메뉴에서 마우스가 떠나면 하위메뉴가 사라진다.
  $(".gnb-area1").mouseleave(function(){
    $(".depth2").hide();
  });
  $(".gnb-area2").mouseleave(function(){
    $(".depth2").hide();
  });
  $(".gnb-area3").mouseleave(function(){
    $(".depth2").hide();
  });



  // 메뉴 버튼을 누르면 메뉴가 열리고,
  // X 버튼을 누르면 메뉴가 닫힌다.
  $("#menu").click(function(){
    $(".m-gnb-wrap").animate({"right" : "0"});
  });
  $(".m-close").click(function(){
    $(".m-gnb-wrap").animate({"right" : "-100%"});
  });
});