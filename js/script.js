$(document).ready(function(){
 $('.top-sliders__wrap').slick({  
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.top-slider-prev'),
    nextArrow: $('.top-slider-next'),
    speed: 1200,
    fade: true,
    cssEase: 'linear'
 });
 $('.product-tab-all').slick({  
    infinite: true,
    slidesPerRow: 4,
    rows: 2,
    speed: 500,
    fade: true,
    prevArrow: $('.product-prev'),
    nextArrow: $('.product-next'),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          rows: 2,
          slidesPerRow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 3,
          rows: 2,
        }
      }
    ]
 });
});
$(document).ready(function(){
  $("#ordercallhref").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 700);
  });
  $("#watchfotohref").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
  $("#watchvideohref1").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
  $("#watchvideohref2").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
  $("#watchvideohref3").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
  $("#watchvideohrefs").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
  $("#abouthref").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
  $("#producthref").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
  $("#contakthref").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });

  $('.header-top-mobile__menu').on('click', function(event) {
    event.preventDefault();
    $('.mobile-menu').fadeIn();
  });
  $('.mobile-menu').on('click', function(event) {
    /*event.preventDefault();*/
    $('.mobile-menu').fadeOut();
  });
});
$(document).on('click', '.video-btn', function() {
  var $video = $('#video'),
    src = $video.attr('src');
  $video.attr('src', src + '&autoplay=1');
});
$("#nonevideo").on("click", function(){
  $("#nonevideo").addClass("video-dn");
});

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
    $(document).on('submit', function (event) {
      event.preventDefault();
      var user_name    = $('.contacts__wrap input[name=fio]').val();
      var user_tel   = $('.contacts__wrap input[name=tel]').val();
      var text_comment = $('.contacts-bottom input[name=comment]').val();
      // отправляем данные
      $.ajax({
          url: "send.php", // куда отправляем
          type: "post", // метод передачи
          dataType: "json", // тип передачи данных
          data: { // что отправляем
              "user_name":    user_name,
              "user_tel":   user_tel,
              "text_comment": text_comment
          },
          // после получения ответа сервера
          success: function(data){
              alert(data.result); // выводим ответ сервера
          }
      });
  });
};
$(".zoom a").fancybox();
	$(".license a").fancybox();
	$(".sert-r a").fancybox();


tab();