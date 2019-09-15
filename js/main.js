( function() {
	var youtube = document.querySelectorAll( ".youtube" );
	for (var i = 0; i < youtube.length; i++) {
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
				youtube[i].addEventListener( "click", function() {
					var iframe = document.createElement( "iframe" );
							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1&modestbranding=1" );
							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};
} )();
$(document).ready(function(){
	$('.county_select').selectpicker();
});
$(window).on('load', function(){
	$(".for_twentytwenty").twentytwenty();
});
$('.reviews_slider').bxSlider({
	pager: false,
	adaptiveHeight: true,
	nextText: '',
	prevText: ''
});
$('.insta_slider').bxSlider({
	pager: false,
	adaptiveHeight: true,
	nextText: '',
	prevText: ''
});
slider=$('.result_carusel').bxSlider();
function bxslider(){
	var width = window.innerWidth;
	if(width>992){
		slider.reloadSlider({
			minSlides: 3,
			maxSlides: 3,
			controls: true,
			touchEnabled: true,
			pager: true,
			slideMargin: 16,
			nextText: '',
			prevText: ''
		});
	} else if(width>=768){
		slider.reloadSlider({
			minSlides: 3,
			maxSlides: 3,
			controls: true,
			touchEnabled: true,
			pager: true,
			slideMargin: 12,
			nextText: '',
			prevText: ''
		});
	} else if(width<768) {
		slider.reloadSlider({
			minSlides: 1,
			maxSlides: 1,
			controls: true,
			pager: true
		});
	}
}
bxslider();
var resizeId;
$(window).on('load', function(){$(this).resize()});
$(window).on('resize',function(){
	clearTimeout(resizeId);
	resizeId = setTimeout(doneResizing, 300);
});
function doneResizing(){
	bxslider();
	clearTimeout(resizeId);
}