// Landing slider

$('.landing-slider').slick({
  arrows: true,
  centerPadding: "0px",
  dots: true,
  slidesToShow: 1,
  infinite: false
});

$('.announcement-slider').slick({
  arrows: true,
  centerPadding: "0px",
  dots: false,
  slidesToShow: 1,
  infinite: false
});

$('.events-slider').slick({
  slidesToShow: 3,
  prevArrow: $('.event-prev'),
  nextArrow: $('.event-next'),
  infinite: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

$('.testimoni-slider').slick({
  slidesToShow: 4,
  prevArrow: $('.testimoni-prev'),
  nextArrow: $('.testimoni-next'),
  infinite: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

$('.gallery-slider').slick({
  arrows: true,
  centerPadding: "0px",
  dots: true,
  slidesToShow: 1,
  infinite: false
});

$('.news-slider').slick({
  arrows: true,
  centerPadding: "0px",
  dots: true,
  slidesToShow: 1,
  infinite: false
});

$('.volunteer-slider').slick({
  slidesToShow: 4,
  prevArrow: $('.volunteer-prev'),
  nextArrow: $('.volunteer-next'),
  infinite: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

$('.other-events-slider').slick({
  slidesToShow: 4,
  prevArrow: $('.other-event-prev'),
  nextArrow: $('.other-event-next'),
  infinite: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

$('.singleNews-slider').slick({
  arrows: true,
  centerPadding: "0px",
  dots: true,
  slidesToShow: 1,
  infinite: false
});

$('.other-news-slider').slick({
  slidesToShow: 4,
  prevArrow: $('.other-news-prev'),
  nextArrow: $('.other-news-next'),
  infinite: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

$('.singleGallery-slider').slick({
  arrows: true,
  centerPadding: "0px",
  dots: true,
  slidesToShow: 1,
  infinite: false
});

// Toggle password

$(".toggle-password").click(function() {
  $(this).toggleClass("isax-eye4 isax-eye-slash5");
  input = $(this).parent().find("input");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// Scroll and fixed header

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


(function() {
    'use strict'

    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        document.querySelector('body').classList.toggle('open')
    })
})()


$(document).ready(function(){
  $('.tax-center-slider').slick({
    slidesToShow: 4,
    prevArrow: $('.tax-center-prev'),
    nextArrow: $('.tax-center-next'),
    infinite: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });
  });
  
   $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function(e) {
             e.target
             e.relatedTarget
             $('.tax-center-slider').slick('setPosition');
         });