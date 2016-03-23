/*
 grunt-getting-started 2016-02-25 
*/



$(document).ready(function(){

 $('.bxslider-cli').bxSlider({
  minSlides: 1,
  maxSlides: 4,
  slideWidth: 240,
  slideMargin: 50,
  moveSlides:1,
 });



 $(".btn-toggle").click(function(){
  $(".navibar").slideToggle();
 });


});