$(document).ready(function () {
  $('.card_container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span style="display: block;"><img src="../img/img_arrow_left.png" class="slick-arrow"></span>',
    nextArrow: '<span style="display: block;"><img src="../img/img_arrow_right.png" class="slick-arrow"></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });
});
