$(document).ready(function(){   

  $('.menu-bar-select').select2({
    placeholder: 'Select from dropdown'
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    touchDrag: true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });  
});