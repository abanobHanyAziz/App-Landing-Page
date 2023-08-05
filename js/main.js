$(window).scroll(function() {
	 
    if ($(this).scrollTop() > 50){  
        $('#header').addClass("navbar_fixed");
    }
    else{
        $('#header').removeClass("navbar_fixed");
    }
});

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})