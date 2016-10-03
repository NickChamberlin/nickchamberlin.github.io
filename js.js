$("#scroll").mousewheel(function(event, delta) {
  this.scrollLeft -= (delta * 160);
  event.preventDefault();
});

$('.intro').on('touchmove', function(e) {
  e.stopPropagation();
  e.preventDefault();
});

$(document).ready(function() {

  $('.scrollShell img').click(function() {
    var src = $(this).attr("src");
    $('.selected').fadeIn(200);
    $('.selected img').addClass('helper');
    $('.selected img').attr("src", src);
  });
//test

  $('.selected').click(function() {
    $(this).fadeOut(200).find('img').attr("src", "");
  });

  $('.dribbble').hover(function() {
    $('.intro').addClass('dribbbleColor');
    $('.intro').removeClass('twitterColor facebookColor googleColor');

    $('.name').addClass('dribbbleTextColor')
      .removeClass('twitterTextColor facebookTextColor googleTextColor');
  });

  $('.twitter').hover(function() {
    $('.intro').addClass('twitterColor');
    $('.intro').removeClass('dribbbleColor facebookColor googleColor');

    $('.name').addClass('twitterTextColor')
      .removeClass('dribbbleTextColor facebookTextColor googleTextColor');;
  });

  $('.facebook').hover(function() {
    $('.intro').addClass('facebookColor');
    $('.intro').removeClass('twitterColor googleColor dribbbleColor');

    $('.name').addClass('facebookTextColor')
      .removeClass('twitterTextColor dribbbleTextColor googleTextColor');
  });

  $('.google').hover(function() {
    $('.intro').addClass('googleColor');
    $('.intro').removeClass('dribbbleColor facebookColor twitterColor');

    $('.name').addClass('googleTextColor')
      .removeClass('dribbbleTextColor facebookTextColor twitterTextColor');;
  });

  $('.name').hover(function() {
    $('.intro').removeClass('googleColor dribbbleColor facebookColor twitterColor');

    $('.name').removeClass('googleTextColor dribbbleTextColor facebookTextColor twitterTextColor');;
  });

  /* AddBackground
    $('.nameInner').addClass('addBackground');
     ^/



/*    $('.socialLinks').find(">:first-child").addClass('liRaise', function(){
        $('.twitter').addClass('liRaise');
    });

 */






  /*
      $('.scrollShell img').click(function () {
      $(this).toggleClass("selectIMG").removeClass('dim').siblings().toggleClass('dim').removeClass('selectIMG');



  });*/
  /*$('.overlay').toggleClass('activateOverlay').toggleClass('littleZ');*/










  $(".down").click(function() {

    /* $('#scroll').delay(2000).queue(function(){$(this).addClass('toMain')});*/

    $('.intro, #scroll').toggleClass('toMain').delay(4000);
    $('.name').addClass('mainName');
    $('.arrow').removeClass('bounce');
  });


  $(".upArrow").click(function() {
    $('#scroll, .intro').removeClass('toMain');
    $('.name').removeClass('mainName');
  });

  /*
  $("img").click(function () {
      $('html, body').animate({
          scrollTop: $(".intro").offset().top
      }, 300);

  });
  */

  $('.intro').mouseenter(function() {
    $('body').bind('mousewheel DOMMouseScroll', function() {
      return false;
    });
    $(this).bind('mousewheel DOMMouseScroll', function() {
      return true;
    });
  });
  $('.intro').mouseleave(function() {
    $('body').bind('mousewheel DOMMouseScroll', function() {
      return true;
    });
  });

});






$(document).ready(function() { // On load







});
