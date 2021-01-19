// About scripts
slideIndex1 = 1;
var slideInterval1 = null;
play1();

slideIndex2 = 1;
var slideInterval2 = null;
play2();

function play1() {
	slideInterval1 = setInterval(function(){showSlides1(slideIndex1 += 1);}, 5000);
}
function play2() {
	slideInterval2 = setInterval(function(){showSlides2(slideIndex2 += 1);}, 5000);
}

function plusSlides1(n) {
	showSlides1(slideIndex1 += n);
	clearInterval(slideInterval1);
	play1();
}
function plusSlides2(n) {
	showSlides2(slideIndex2 += n);
	clearInterval(slideInterval2);
	play2();
}

function selectSlide1(n) {
	showSlides1(slideIndex1 = n);
	clearInterval(slideInterval1);
	play1();
}
function selectSlide2(n) {
	showSlides2(slideIndex2 = n);
	clearInterval(slideInterval2);
	play2();
}

function showSlides1(n) {
	var i;
	var slideshow1 = document.getElementById("slideshow1");
	var slides = slideshow1.getElementsByClassName("slides");
	var dots = slideshow1.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex1 = 1}    
	if (n < 1) {slideIndex1 = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex1-1].style.display = "block";  
	dots[slideIndex1-1].className += " active";
}

function showSlides2(n) {
	var i;
	var slideshow2 = document.getElementById("slideshow2");
	var slides = slideshow2.getElementsByClassName("slides");
	var dots = slideshow2.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex2 = 1}    
	if (n < 1) {slideIndex2 = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex2-1].style.display = "block";  
	dots[slideIndex2-1].className += " active";
}