$(document).ready(function(){
    $(".slider-1").slick({
      accessibility: true,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      arrows: true,

      leftMode: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".abt-Chara").slick({
      accessibility: true,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      arrows: true,

      leftMode: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});
 