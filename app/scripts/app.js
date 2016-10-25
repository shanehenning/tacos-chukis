$('nav ul li a img').on('mouseenter', function() {
  $(this).attr('src', '../app/resources/logo-text-green.svg');
  });

$('nav ul li a img').on('mouseleave', function(){
  $(this).attr('src', '../app/resources/logo-text-white.svg');
});
console.log('app');

$('.menu-display ul li img').on('click', function(){
  console.log($(this));
  var source = $(this).attr('src');
  $('.menu-billboard').attr('src', source);
});
