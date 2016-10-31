$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};



$(function(){

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});

});

/*   slick slider   */


$('.slider-wrap').slick({
	autoplay: true,
	arrows: false,
	dots: true
});


$(document).ready(function(){

	$(".search").click(function(){
		$(".search-field").toggle();
	});



	/*  menu-toggle  */

$(".menu-toggle").click(function() {

	$('.menu').toggleClass('active_menu');
	
});

$(".menu ul li a").click(function(){

	$(".menu").removeClass("active_menu");
	$(".menu ul li a").removeClass("menu__active-item");
	$(this).addClass("menu__active-item");
});


/*   scroll to section   */

var offset = $(".header-wrap").height() + 30;

$(".to_s-price-table").click(function() {
  $("html, body").animate({ scrollTop: $(".s-price-table").offset().top - 30 }, "slow");
  return false;
});

$(".to_people-say").click(function() {
  $("html, body").animate({ scrollTop: $(".people-say").offset().top - 30 }, "slow");
  return false;
});

$(".to_section-2").click(function() {
  $("html, body").animate({ scrollTop: $(".section-2").offset().top - 30 }, "slow");
  return false;
});

$(".to_s-about-company").click(function() {
  $("html, body").animate({ scrollTop: $(".s-about-company").offset().top - 30 }, "slow");
  return false;
});

$(".to_s-our-works").click(function() {
  $("html, body").animate({ scrollTop: $(".s-our-works").offset().top - 30 }, "slow");
  return false;
});

$(".to_s-our-services").click(function() {
  $("html, body").animate({ scrollTop: $(".s-our-services").offset().top - 30 }, "slow");
  return false;
});

$(".to_our-team").click(function() {
  $("html, body").animate({ scrollTop: $(".s-our-team").offset().top - 30 }, "slow");
  return false;
});

$(".contacts").click(function() {
  $("html, body").animate({ scrollTop: $(".keep-in-touch").offset().top - offset }, "slow");
  return false;
});


	/*  animation  */


	$('section h2').animated('bounceInRight')
	$('.feature').animated('zoomIn');
	$(".section-2").waypoint(function(direction) {

		$('.feature').animate({
			opacity: 1,
			color: '#233641'
		}, 100);
	}, {
		offset: 100
	
	});

	$('.just-buy h5').css({'opacity': 0});

	$(".just-buy").waypoint(function(direction) {

		$('.just-buy h5').addClass('animated rollIn');

	}, {
		offset: '50%'
	});


/*   about-company tabs*/

$(".a-company_item").not(":first").hide();
$(".about-company__tabs-item").click(function() {
	$(".about-company__tabs-item").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
	$(".a-company_item").hide().eq($(this).index()).fadeIn()
});

});


