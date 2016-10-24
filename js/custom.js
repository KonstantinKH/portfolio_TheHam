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
		if ($('.menu').hasClass('active_menu')) {
		body.addClass('hide');
		} else {
		body.removeClass('hide');
		}
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


