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

// var handler = function(){
	
// 	var height_footer = $('footer').height();
// 	var height_header = $('header').height();	
// 	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
// 	var viewport_wid = viewport().width;
	
// 	if (viewport_wid <= 991) {
		
// 	}
	
// }
// $(window).bind('load', handler);
// $(window).bind('resize', handler);



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


});


