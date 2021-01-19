var slideIndex = 1;
var slideInterval = null;
play();

function play() {
	slideInterval = setInterval(function(){showSlides(slideIndex += 1);}, 5000);
}

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
	clearInterval(slideInterval);
	play();
}

// Thumbnail image controls
function selectSlide(n) {
	showSlides(slideIndex = n);
	clearInterval(slideInterval);
	play();
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slides");
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

function playAudio() {
	var x = document.getElementById("welcome");
	x.play();
}