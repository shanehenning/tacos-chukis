'use strict';

$(function() {
  console.log('slider');
  let transitionTime = 1000;
  let viewTime = 8000;
  let slide = {
    current: 0
  };
  let miniSlide = 1;
  let interval;

  let $slider = $('.slider');
  let $slideContainer = $slider.find('.slides');
  let $slides = $slideContainer.find('.slide');

  let $dots = {allDots: $('.dots li')};
  for (var i = 1; i < ($('.dots li').length + 1); i++){
    $dots[i] = $('.dots li:nth-child(' + i + ')');
  }
  let $preview = {allPreviews: $('.preview li')};
  for(i = 1; i < ($('.preview li').length + 1); i++){
    $preview[i - 1] = $('.preview li:nth-child(' + i + ')');
  }
  $preview[Object.keys($preview).length - 1] = $preview[0];
  console.log($preview);
  console.log($dots);

  let $flipLeft = $('.flip-left');
  let $flipRight = $('.flip-right');

  function slideNow(){
    if($slideContainer.is(':animated') ) {
      return;
    }
    if(slide.current === $slides.length - 1){
      slide.current = 0;
      $slideContainer.css('margin-left', 0);
    }
    slide.current++;
    $preview.allPreviews.css('opacity', .65);
    $preview[slide.current].css('opacity', 1);
    if(slide.current === $slides.length) {
      slide.current = 0;
      $preview.allPreviews.css('opacity', .65);
      $preview[slide.current].css('opacity', 1);
    }
    $slideContainer.animate({'margin-left': '-=100vw'}, transitionTime);
    shiftMini();
    console.log(slide.current);
  }

  function startSlider() {
    console.log('slider started');
    interval = setInterval(slideNow, viewTime);
  }

  function stopSlider() {
    console.log('slider stopped');
    clearInterval(interval);
  }

// Stop Sliding on Slider Hover
  $('.menu-display').on('mouseenter', stopSlider).on('mouseleave', startSlider);

// Change Slider to Preview Image
  $('.preview li').on('click', function() {
    if($slideContainer.is(':animated') ) {
      return;
    }
    var previewIndex = $('.preview li').index($(this));
    slide.current = previewIndex;
    $preview.allPreviews.css('opacity', .65);
    $preview[slide.current].css('opacity', 1);
    $slideContainer.animate({'margin-left': (previewIndex * -100) + 'vw'}, transitionTime, function() {
    });
    shiftMini();
    console.log(slide.current);
  });

  $('.dots li').on('click', function(){
    if($slideContainer.is(':animated')){
      return;
    }
    var miniIndex = $('.dots li').index($(this));
    console.log(miniIndex);
    if(miniIndex === 0){
      $preview[0].animate({'margin-left': '660px'});
      $dots.allDots.css('opacity', .65);
      $dots[1].css('opacity', 1);
    }
    if(miniIndex === 1){
      $preview[0].animate({'margin-left': '-320px'});
      $dots.allDots.css('opacity', .65);
      $dots[2].css('opacity', 1);
    }
    if(miniIndex === 2){
      $preview[0].animate({'margin-left': '-650px'});
      $dots.allDots.css('opacity', .65);
      $dots[3].css('opacity', '1');
    }
    miniSlide = miniIndex + 1;
    console.log(slide.current);
  });

  function shiftMini(){
    if($(window).width() > 1155 || $(window).width() < 580) return;
    if(slide.current < 3 || slide.current === 7){
      $preview[0].animate({'margin-left': '660px'});
      $dots.allDots.css('opacity', .65);
      $dots[1].css('opacity', 1);
    }
    if (slide.current > 2 && slide.current < 5){
      $preview[0].animate({'margin-left': '-320px'});
      $dots.allDots.css('opacity', .65);
      $dots[2].css('opacity', 1);
    }
    if (slide.current > 5 && slide.current < 7){
      $preview[0].animate({'margin-left': '-650px'});
      $dots.allDots.css('opacity', .65);
      $dots[3].css('opacity', '1');
    }
  }
// Slide Left
  $flipLeft.on('click', function(){
    if($slideContainer.is(':animated') ) {
      return;
    }
    if(slide.current === 0){
      slide.current = $slides.length - 1;
      $preview.allPreviews.css('opacity', .65);
      $preview[slide.current].css('opacity', 1);
      $slideContainer.css('margin-left', (($slides.length - 1) * -100) + 'vw');
    }
    $slideContainer.animate({'margin-left': '+=100vw'}, transitionTime, function() {
    });
    slide.current = slide.current - 1;
    $preview.allPreviews.css('opacity', .65);
    $preview[slide.current].css('opacity', 1);
    shiftMini();
    console.log(slide.current);
  });

// Slide right
  $flipRight.on('click', function(){
    if($slideContainer.is(':animated') ) {
      return;
    }
    slide.current = slide.current + 1;
    $preview.allPreviews.css('opacity', .65);
    $preview[slide.current].css('opacity', 1);
    $slideContainer.animate({'margin-left': '-=100vw'}, transitionTime, function(){
      if (slide.current === $slides.length - 1) {
        slide.current = 0;
        $preview.allPreviews.css('opacity', .65);
        $preview[slide.current].css('opacity', 1);
        $slideContainer.css('margin-left', 0);
      }
    });

    shiftMini();
    console.log(slide.current);
  });

  startSlider();
  $dots[1].css('opacity', 1);
  $(window).on('resize', function(){
    console.log($(window).width());

    if ($(window).width() > 1115){
      $('.preview-first').css('margin-left', 0);
    }
  });

});
