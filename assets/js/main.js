
$('.owl-carousel.weoffer').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },



        650: {
            items: 2
        },


        800: {
            items: 3
        },

        1000: {
            items: 3
        }
    }
});


$('.owl-carousel.customer').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },


        600: {
            items: 2
        },

        700: {
            items: 3
        },

        1000: {
            items: 4
        }
    }
});

// loading js  

$(window).on('load', function () {
    $('.loading-override .spinner').fadeOut(500,
        function() {
            $(this).parent().fadeOut(500,
                function() {
                    $('body').css({"overflow":'auto'});
            
                });
        });
});



// one app js

$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;


if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('carouselActive');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('carouselActive');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}
console.log($even);

$('.my-card').click(function () {
  $slide = $('.carouselActive').width();
  console.log($('.carouselActive').position().left);

  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({
      right: '-=' + $slide
    });
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({
      right: '+=' + $slide
    });
  }

  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev carouselActive next');

  $(this).addClass('carouselActive');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});

// $('button').click(function () {
//   console.log($(this));
// });
$('button').click(function () {

  if ($(this).hasClass('next')) {
    $('.carouselActive').next().trigger('click');

  } else if ($(this).hasClass('prev')) {
    $('.carouselActive').prev().trigger('click');
  }
});


// Keyboard nav
$('html body').keydown(function (e) {
  if (e.keyCode == 37) { // left
    $('.carouselActive').next().trigger('click');
  } else if (e.keyCode == 39) { // right


    $('.carouselActive').prev().trigger('click');
  }
});




var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
    '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();




// // nav bar hide on click body
// link for solution  
// https://kiranworkspace.com/close-bootstrap-open-collapse-navbar-clicking-outside/



$(document).ready(function () { 
  $(document).click(function () {
     // if($(".navbar-collapse").hasClass("in")){
       $('.navbar-collapse').collapse('hide');
     // }
  });
});


