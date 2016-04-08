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

  var winwid = $( window ).width();
  if(winwid<992)
  {
   $("#down").appendTo(".footer .container");

  }

});


  if($(".popup-gallery").length){
   $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
     titleSrc: function(item) {
      return item.el.attr('alt') + '<small></small>';
      return item.el.attr('alt') + '<small></small>';
     }
    }
   });
  }