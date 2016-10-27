$(document).ready(function() {
  const slider = $('.slides');
  const preview = $('.preview');
  const flipLeft = $('.flip-left');
  const flipRight = $('.flip-right');
  const dotsStyle = $('.dot');

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
      infinite: false
    });
  }

  function asNav() {
    preview.slick({
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: slider,
      infinite: false,
      vertical: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          dotsClass: dotsStyle,
          appendDots: dotsStyle,
          vertical: false
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
