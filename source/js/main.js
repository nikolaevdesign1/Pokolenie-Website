$('.section2_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 600,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
})


$('.section4-logos-slider').slick({
    speed: 600,
    autoplay:true,
    arrows: false,
    slidesToShow:7.3,   
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
    
})


$('.section7-slider').slick({
    speed: 600,
    autoplay:true,
    arrows: false,
    slidesToShow:4.2,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    
})


$('.section-students-slider-slider').slick({
    arrows: true,
    dots:true,
    infinite:true,
    centerMode: true,
    slidesToShow:4,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
})

$('.coaches-person-slider').slick({
  speed: 600,
  slidesToShow:5,
  infinite:true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
})

$('.journal-materials-slider').slick({
 
arrows: true,
  slidesToShow:3,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  
})

  //faq start

  let questionTitle = document.querySelectorAll('.question');
  
  let toggleQuestion = function(){
    this.classList.toggle('active');
  }

  questionTitle.forEach(function(title){
    title.addEventListener('click', toggleQuestion);
  })

  //faq end




  //popups start

  $('.start-registration').on('click',function(){
    $('.popup-years').toggleClass("active");
  });

  $('.popup-background').on('click',function(){
    $('.popup-years').removeClass("active");
    $('.sign-in, .less, .more, .popup-years, .pass1, .pass2, .pass3').removeClass("active");
  });

  $('.popup-content-buttons p:nth-child(1)').on('click',function(){
    $('.more').toggleClass("active");
    $('.popup-years').removeClass("active");
  });

  $('.popup-content-buttons p:nth-child(2)').on('click',function(){
    $('.less').toggleClass("active");
    $('.popup-years').removeClass("active");
  });

  $('.sign-in-button').on('click',function(){
    $('.sign-in').toggleClass("active");
    $('.popup-years, .less, .more, .thanks, .pass1, .pass2, .pass3').removeClass("active");
  });

  $('.registration_button').on('click',function(){
    $('.popup-years').toggleClass("active");
    $('.sign-in, .less, .more, .pass1, .pass2, .pass3').removeClass("active");
  });

  $('.thanks_button').on('click',function(){
    $('.thanks').toggleClass("active");
    $('.sign-in, .less, .more, .popup-years, .pass1, .pass2, .pass3').removeClass("active");
  });
  

 $('.forgot-pass').on('click',function(){
    $('.pass1').toggleClass("active");
    $('.sign-in, .less, .more, .popup-years, .pass2, .pass3').removeClass("active");
  });


 $('.pass1 button').on('click',function(){
  $('.pass2').toggleClass("active");
  $('.sign-in, .less, .more, .popup-years, .pass1, .pass3').removeClass("active");
});

$('.go_pass3').on('click',function(){
  $('.pass3').toggleClass("active");
  $('.sign-in, .less, .more, .popup-years, .pass1, .pass2').removeClass("active");
});

  //popups finish

  $('.mobile-burger').on('click',function(){
    $('.mobile-menu, .mobile-burger').toggleClass("active");
  });