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

});
