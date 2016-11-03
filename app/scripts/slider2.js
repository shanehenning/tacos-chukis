$(document).ready(function() {
  const slider = $('.slides');
  const preview = $('.preview');
  const descriptionsNav = $('.description-nav ul');
  const sliq = $('.sliq');
  const flipLeft = $('.flip-left');
  const flipRight = $('.flip-right');
  const dot = $('.dot');
  const miniLeft = $('.mini-nav .fa-chevron-left');
  const miniRight = $('.mini-nav .fa-chevron-right');

  slide();
  asNav();
  descriptionNavigation();

  function slide() {
    slider.slick({
      autoplay: true,
      autoplaySpeed: 8000,
      prevArrow: flipLeft,
      nextArrow: flipRight,
      asNavFor: sliq,
      infinite: false,
      responsive: [{
        breakpoint: 769,
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
      asNavFor: sliq,
      prevArrow: miniLeft,
      nextArrow: miniRight,
      infinite: false,
      slidesToShow: 6.99,
      responsive: [{
        breakpoint: 1430,
        settings: {
          slidesToShow: 6
        }
      },{
        breakpoint: 1300,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1075,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 885,
        settings: {
          slidesToShow: 3
        }
      }]
    });
  }

  function descriptionNavigation() {
    descriptionsNav.slick({
      focusOnSelect: true,
      asNavFor: sliq,
      infinite: false,
      arrows: false
    });
  }

  $(window).resize(function() {
    $('.slides').slick('resize');
  });

  $(window).on('orientationchange', function() {
    $('.slides').slick('resize');
  });
});
