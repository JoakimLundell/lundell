$(function() {

  /*$('.circle').each(function(i){
      var time = 500 * (i + 1);
      setTimeout(function(){
          $('.circle').eq(i).addClass('open').animate({opacity: '1'}, i);
      }, time);
  });*/

  $(".circle").each(function(i){
    var wait = 500 * (i+1);
    setTimeout(function() {
      $(".circle").eq(i).addClass('open').animate({opacity:1}, i);
    }, wait);
  });

  $("#map-link").click(function( event ){
    event.preventDefault();
    console.log("maplink clicked");
  });

  $("a.link").on("click", function() {
    //$(".content").css('background-color','white');
    var get = "." + $(this).data("link");
    console.log( get ) ;
    $(get).addClass('active-column').siblings().removeClass('active-column');
    //$(".content").css('background-color','white');


  });


});
