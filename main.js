$(document).ready(function(){
	$(".owl-carousel-1").owlCarousel({
		loop: true,
		margin: 24,
		items: 4,
	});
});


// video 

var video = document.getElementById("video-file");
var isPlaying = false;

video.addEventListener("click", function() {
  if (isPlaying) {
	 video.pause();
	 isPlaying = false;
  } else {
	 video.play();
	 video.muted = false;
	 isPlaying = true;
  }
});


// main slider 
$(document).ready(function(){
	$('.owl-carousel-2').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		margin:24,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
	});
});

// new slider 1
$(document).ready(function(){
	$('.owl-carousel-3').owlCarousel({
		loop: true,
		items: 4,
		margin:24,
	});
});

$('.slider-btn-new--prev').click(function() {
	$('.owl-carousel-3').trigger('prev.owl.carousel');
 });
 
 $('.slider-btn-new--next').click(function() {
	$('.owl-carousel-3').trigger('next.owl.carousel');
 });


// new slider 2

$(document).ready(function(){
	$('.owl-carousel-4').owlCarousel({
		loop: true,
		items: 4,
		margin:24,
	});
});

$('.slider-btn-new-2--prev').click(function() {
	$('.owl-carousel-4').trigger('prev.owl.carousel');
 });
 
 $('.slider-btn-new-2--next').click(function() {
	$('.owl-carousel-4').trigger('next.owl.carousel');
 });

// new slider 3

$(document).ready(function(){
	$('.owl-carousel-5').owlCarousel({
		loop: true,
		items: 4,
		margin:24,
	});
});

$('.slider-btn-new-3--prev').click(function() {
	$('.owl-carousel-5').trigger('prev.owl.carousel');
 });
 
 $('.slider-btn-new-3--next').click(function() {
	$('.owl-carousel-5').trigger('next.owl.carousel');
 });


// comment slider 

$(document).ready(function(){
	$('.owl-carousel-6').owlCarousel({
		loop: true,
		items: 1,
	});
});

















