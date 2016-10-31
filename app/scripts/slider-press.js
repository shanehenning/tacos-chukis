$(document).ready(function() {
  const slider = $('.slides');
  const dot = $('.dot');

  slide();

  function slide() {
    slider.slick({
      autoplay: true,
      autoplaySpeed: 8000,
      infinite: true,
      dots: true,
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
