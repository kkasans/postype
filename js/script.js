// slick slide
$('.center-slider').slick({
  centerMode: true,
  centerPadding: '165px',
  slidesToShow: 3,
  prevArrow: $('.swiper-button-prev'),
  nextArrow: $('.swiper-button-next'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '170px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '175px',
        slidesToShow: 3
      }
    },
  ]
});
// drag slide
$('.drag-slider').slick({
  infinite: false,
  slidesToShow: 3.62,
  touchMove: false,
  arrows: false,
  responsive: [{
      breakpoint: 1160,
      settings: {
        arrows: false,
        slidesToShow: 3.5
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.6
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2.1
      }
    }
  ]
});

// 최상단 버튼

$(function () {
  // ====================================== logo, btnTop 클릭시 최상단
  $(".logo, .btnTop").on("click", () => {
    $("html,body").stop().animate({
      scrollTop: 0
    }, 400); // 0.4초
  });

  // ====================================== 스크롤 500px 이상 내릴때 btnTop 나타남 
  $(window).scroll(() => {
    if ($(this).scrollTop() > 500) {
      $(".btnTop").fadeIn();
    } else {
      $(".btnTop").fadeOut();
    }
  });
});

// my menu
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function () {

  $('.m_button').on('click', function () {
    $('.black_bg').show();
    $('.m_side_bar').show().animate({
      // right: 0
    });
  });
  $('.closeBtn').on('click', function () {
    $('.black_bg').hide();
    $('.m_side_bar').animate({
      // right: '-' + 50 + '%'
    }, function () {
      $('.m_side_bar').hide();
    });
  });

});