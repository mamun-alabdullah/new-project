//banner slider start



$('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }
    ]
});


//Auto_typing part js
var typed3 = new Typed('.auto-type', {
    strings: [
        'Fontend Developer',
        'Laravel Developer',
        ''],
    typeSpeed: 100,
    backSpeed: 60,
    smartBackspace: true,
    loop: true
  });


//venobox js stert hair
$(document).ready(function(){
    $('.venobox').venobox(); 
});

//blog-part js 
$('.blog-slider').slick({
    dots: false,
    prevArrow:false,
    nextArrow:false, 
    infinite: true,
    initialSlide:1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
            }
        }
    ]
});
//portfo part js
var mixer = mixitup('.our-portfo');


/////back to top jq

$(".back_to_top").click(function(){
    $("html,body").animate({
        scrollTop:0,
    },1000)

})