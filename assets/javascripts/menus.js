// desktop version sliding menus

//enable menu animation if the screen is set to desktop
function enableMenus() {
	//create shortcut for nav element
	var menu = $('#siteNav');
	//check to see if we are on desktop .vs tablet or mobile
	if ($(document).width() > 768) {
	//strip out no-js class if jQuery is running the animation
	if($('body').hasClass('no-js')){
	$('body').removeClass('no-js');
	};
	//attach a listener to each li that has a child ul, and then slide submenus down or up depending upon mouse position
	menu.find('li').each(function() {
		if ($(this).find('ul').length > 0 ) {
			// strip any existing events
             $(this).unbind();
			$(this).mouseenter(function() {
			  $(this).find('ul').stop(true,true).slideDown('fast');
			});
			$(this).mouseleave(function() {
			  $(this).find('ul').stop(true,true).slideUp('slow');
			});
		};
	});
	} else {
		menu.find('li').each(function() {
         if ($(this).find('ul').length > 0 ) {
         // strip any existing events
         $(this).unbind();
               };
                   });
		if($('body').hasClass('no-js')==
		false){
	$('body').addClass('no-js');
	};
	};
};
$(document).ready(function(){
	enableMenus();
});
$(window).resize(function() {
 	enableMenus();
});

function normal(myDiv) { 
	myDiv.style.opacity="0.0";
}

function hover(myDiv) { 
	myDiv.style.opacity="1.0";
}

/* Slideshow */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function back() {
    window.location.replace("main.html");
}