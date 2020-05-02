$(document).ready(function(){
    $(window).scroll(function(){
    if($(document).scrollTop() > 100){
        $('.navbar').addClass('scrolled');
    }
    else{
        $('.navbar').removeClass('scrolled');
    }
});
//chang color on click
$('.color div').on('click', function(){
    $('body').attr('data-default-color', $(this).data('color'));
});

//owelcursal
$('.owl-featured').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
})
$('.owl-client').owlCarousel({
    loop:false,
    margin:25,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2,
            nav:false,
            loop:false
        },
        1200:{
            items:3,
            nav:false,
            loop:false
        }
    }
})

//circlechart
$('.circlechart').circlechart();
//add class Active ON click
$('li').click(function() { 
    $('li').removeClass('yellow-border-bottom mediumpurple-border-bottom deeppink-border-bottom orangered-border-bottom  springgreen-border-bottom'); 
    $(this).addClass('yellow-border-bottom mediumpurple-border-bottom deeppink-border-bottom orangered-border-bottom  springgreen-border-bottom'); 
 });
 //iso top
 let projects =$('.projects').isotope({
    itemSelector: '.item'
 });
 $('ul.filters').on('click', 'li', function(){
    let fiterValue = $(this).attr('data-filter');
    projects.isotope({filter: fiterValue});
    return false;
 });
});