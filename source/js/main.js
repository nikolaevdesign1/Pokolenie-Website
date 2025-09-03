$('.section2_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 600,
    arrows: false,
    dots: true,
})


$('.section4-logos-slider').slick({
    speed: 600,
    autoplay:true,
    arrows: false,
    slidesToShow:7.3,
    
})


$('.section7-slider').slick({
    speed: 600,
    autoplay:true,
    arrows: false,
    slidesToShow:4.2,
    
})


$('.section-students-slider-slider').slick({
    arrows: true,
    dots:true,
    infinite:true,
    centerMode: true,
    slidesToShow:4,
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