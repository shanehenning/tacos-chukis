module.exports = exports = function(){$(document).ready(function() {
  const slider = $('.slides');
  const dot = $('.index .billboard .dot');
  const flipLeft = $('.flip-left');
  const flipRight = $('.flip-right');

  slide();

  function slide() { 
    slider.slick({
      autoplay: true,
      autoplaySpeed: 8000,
      infinite: true,
      prevArrow: flipLeft,
      nextArrow: flipRight,
      dots: true,
      dotsClass: 'slick-dots-white',
      appendDots: dot
    });
  }

  $(window).resize(function() {
    $('.slides').slick('resize');
  });

  $(window).on('orientationchange', function() {
    $('.slides').slick('resize');
  });
});
};
