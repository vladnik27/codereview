$(".reviews__slider").slick({
    autoplay: 9000,
    arrows: true,
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: "<img src='img/arrow-left.png' class='arrow-left'>",
  nextArrow: "<img src='img/arrow-next.png' class='arrow-right'>",
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1420,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});