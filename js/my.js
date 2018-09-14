//jQuery(function($) {
//	"use strict";
//    var $nav = $('.navbar'),
//        $win = $(window),
//        winH = $win.height();    // Get the window height.
//
//    $win.on("scroll", function () {
//       $nav.toggleClass("nav-colored", $(this).scrollTop() > winH );
//    }).on("resize", function(){ // If the user resizes the window
//       winH = $(this).height(); // you'll need the new height value
//    });
//
//});// JavaScript Document

$(document).ready(function(){
	"use strict";
   	doAction();
	titleZoom();
    $(window).on('resize',doAction);
	$(window).on('scroll',doThis);
	$("button").click(function(){
		$(".navbar").addClass("nav-colored");
	});
	if($(window).width()>990){
		$(window).on("load",function() {
		  $(window).scroll(function() {
			var windowBottom = $(this).scrollTop() + $(this).innerHeight();
			$(".fade").each(function() {
			  /* Check the location of each desired element */
			  var objectBottom = $(this).offset().top + $(this).outerHeight();

			  /* If the element is completely within bounds of the window, fade it in */
			  if (objectBottom < windowBottom) { //object comes into view (scrolling down)
				if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
			  } else { //object goes out of view (scrolling up)
				if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
			  }
			});
		  }).scroll(); //invoke scroll-handler on page-load
		});
	}else{
		$(".fade").css("opacity", "1");
	}
	
});

function doAction(){
	"use strict";
    if($(window).width() <= 990){
        $(".navbar").addClass('nav-colored');
		$(".nav-item").removeClass('nav-item2');
		$(".navbar-brand").removeClass('navbar-brand2');
    }else{
        $(".navbar").removeClass('nav-colored');
		$(".nav-item").addClass('nav-item2');
		$(".navbar-brand").addClass('navbar-brand2');
    }
}

function doThis (){
	"use strict";
	var scrollPosY = window.pageYOffset;
	var winH = $(window).height();
	if(scrollPosY > winH){
		$(".navbar").addClass("nav-colored");
	}else if(scrollPosY <= 600){
		$(".navbar").removeClass("nav-colored");
	}
}

function titleZoom (){
	"use strict";
	$(".jumbotron").fadeTo(4000, 0.75);
	$("#titleHead").fadeIn(2000);
	$("#titleP").fadeIn(2500);
	$("#titleButtons").fadeIn(3000);
	$("#call").fadeIn(3500);
	$("#line").fadeIn(4000);
}



//$('video').mediaelementplayer({
//	features: ['playpause','tracks', 'progress']
//});


