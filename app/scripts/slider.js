'use strict';

$(function() {
  console.log('slider');
  let transitionTime = 1000;
  let viewTime = 8000;
  let currentSlide = 1;
  let interval;

  let $slider = $('.slider');
  let $slideContainer = $slider.find('.slides');
  let $slides = $slideContainer.find('.slide');

  let $flipLeft = $('.flip-left');
  let $flipRight = $('.flip-right');
  let $flipLeftButton = $('.flip-left button');
  let $flipRightButton = $('.flip-right button');


  function slide(){
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
    var previewIndex = $('.preview li').index($(this));

// Timed Sliding
    $slideContainer.animate({'margin-left': (previewIndex * -100) + 'vw'}, transitionTime, function() {
      currentSlide = previewIndex + 1;
    });

  });

// Slide Left
  $flipLeft.on('click', function(){
    $flipLeftButton.prop('disabled',true);
    setTimeout(function(){
      $flipLeftButton.prop('disabled',false);
    },transitionTime);
    if(currentSlide === 1){
      currentSlide = $slides.length;
      $slideContainer.css('margin-left', (($slides.length - 1) * -100) + 'vw');
    }
    $slideContainer.animate({'margin-left': '+=100vw'}, transitionTime, function() {
      currentSlide = currentSlide - 1;
    });
  });

// Slide right
let last, diff;
  $flipRight.on('click', function(e){
      if (last){
        diff = e.timeStamp - last;
        if (diff >= 400){
          $slideContainer.animate({'margin-left': '-=100vw'}, transitionTime, function() {
            currentSlide = currentSlide + 1;
            if (currentSlide === $slides.length) {
              currentSlide = 1;
              $slideContainer.css('margin-left', 0);
            }
          });
        }
      }
      last = e.timeStamp;


    // $flipRightButton.prop('disabled',true);
    // setTimeout(function(){
    //   $flipRightButton.prop('disabled',false);
    // },transitionTime);

  });

  startSlider();

});
