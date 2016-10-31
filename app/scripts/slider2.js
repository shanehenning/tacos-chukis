$(document).ready(function() {
  const slider = $('.slides');
  const preview = $('.preview');
  const flipLeft = $('.flip-left');
  const flipRight = $('.flip-right');
  const dot = $('.dot');
  const miniLeft = $('.mini-nav .fa-chevron-left');
  const miniRight = $('.mini-nav .fa-chevron-right');

  slide();
  asNav();

  function slide() {
    slider.slick({
      autoplay: true,
      autoplaySpeed: 8000,
      prevArrow: flipLeft,
      nextArrow: flipRight,
      asNavFor: preview,
      infinite: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true,
          appendDots: dot
        }
      }]
    });
  }

  function asNav() {
    preview.slick({
      focusOnSelect: true,
      asNavFor: slider,
      prevArrow: miniLeft,
      nextArrow: miniRight,
      infinite: false,
      variableWidth: true
    });
  }

  $(window).resize(function() {
    $('.slides').slick('resize');
  });

  $(window).on('orientationchange', function() {
    $('.slides').slick('resize');
  });
});
