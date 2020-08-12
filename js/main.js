$(document).ready(function(){   
 // Burger menu

    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header-menu').click(function(event) {
        $('.header-burger,.header-menu').removeClass('active');
        $('body').removeClass('lock');
    });



 // Select2
  $('.menu-bar-select').select2({
    placeholder: 'Select from item'
  });


 // Owl-carousel
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