'use strict';

$(function() {
  console.log('miniSlider');
  let transitionTime = 1000;
  let viewTime = 8000;
  let currentSlide = 1;
  let interval;

  let $slider = $('.slider');
  let $slideContainer = $slider.find('.slides');
  let $slides = $slideContainer.find('.slide');
  let $previewFirst = $('.preview-first');

  let $flipLeft = $('.flip-left');
  let $flipRight = $('.flip-right');




  function slide(){
    if($slideContainer.is(':animated') ) {
      return;
    }
    if(currentSlide === $slides.length){
      currentSlide = 1;
      $slideContainer.css('margin-left', 0);
    }
    $slideContainer.animate({'margin-left': '-=100vw'}, transitionTime);
    currentSlide++;
  }

  function startSlider() {
    console.log('slider started');
    interval = setInterval(slide, viewTime);
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
    $slideContainer.animate({'margin-left': (previewIndex * -100) + 'vw'}, transitionTime, function() {
      currentSlide = previewIndex + 1;
    });

  });
  $('.dots li').on('click', function(){
    if($slideContainer.is(':animated')){
      return;
    }
    var miniIndex = $('.dots li').index($(this));
    console.log(miniIndex);
    $previewFirst.animate({'margin-left': (miniIndex * -153) + 'vw'}, transitionTime, function(){
      currentSlide = miniIndex + 1;
    });
  });

// Slide Left
  $flipLeft.on('click', function(){
    if($slideContainer.is(':animated') ) {
      return;
    }
    if(currentSlide === 1){
      currentSlide = $slides.length;
      $slideContainer.css('margin-left', (($slides.length - 1) * -100) + 'vw');
    }
    $slideContainer.animate({'margin-left': '+=100vw'}, transitionTime, function() {
      currentSlide = currentSlide - 1;
    });
  });

// Slide right
  $flipRight.on('click', function(){
    if($slideContainer.is(':animated') ) {
      return;
    }
    $slideContainer.animate({'margin-left': '-=100vw'}, transitionTime, function() {
      currentSlide = currentSlide + 1;
      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
  });

  startSlider();

});
