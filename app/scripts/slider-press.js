$(document).ready(function() {
  const slider = $('.slides');
  const dot = $('.press .billboard .dot');
  const flipLeft = $('.fa-chevron-circle-left');
  const flipRight = $('.fa-chevron-circle-right');

  slide();

  function slide() {
    slider.slick({
      autoplay: true,
      autoplaySpeed: 8000,
      infinite: true,
      prevArrow: flipLeft,
      nextArrow: flipRight,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true,
          appendDots: dot,
          dotsClass: 'slick-dots-white'
        }
      }]
    });
  }

  $(window).resize(function() {
    $('.slides').slick('resize');
  });

  $(window).on('orientationchange', function() {
    $('.slides').slick('resize');
  });
});
