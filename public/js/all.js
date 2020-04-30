"use strict";

$(document).ready(function () {
  $('.scrollTop').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('html,body').animate({
      scrollTop: targetPos - 55
    }, 1000);
  });
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    $('.animate').each(function () {
      var thisPos = $(this).offset().top;

      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass('fade-in');
      }
    });
    $('.slide_animate').each(function(){
      var slideTop = $('.slide_animate').offset().top;
      if (windowHeight + scrollPos >= slideTop){
        $('.slide_animate').addClass('slideIn');
      }
    })
    $('.bg-image').css('background-position-y', -(scrollPos / 2) + 'px');
  });
});
//# sourceMappingURL=all.js.map
