$(document).ready(function() {
  const slider = $('.slides');
  const preview = $('.preview');
  const flipLeft = $('.flip-left');
  const flipRight = $('.flip-right');
  const dotsStyle = $('.dot');
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
      focusOnSelect: true,
      asNavFor: preview,
      infinite: true
    });
  }

  function asNav() {
    preview.slick({
      focusOnSelect: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: slider,
      prevArrow: miniLeft,
      nextArrow: miniRight,
      infinite: true,
      variableWidth: true,
      centerMode: true,
      responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dotsClass: dotsStyle,
          appendDots: dotsStyle,
          vertical: false
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 0,
          slidesToScroll: 1,
          dotsClass: dotsStyle,
          appendDots: dotsStyle,
          vertical: false
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
