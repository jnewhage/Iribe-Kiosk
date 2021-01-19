// Help scripts

function increaseFont() {
	if (document.body.style.fontSize == "") {
		document.body.style.fontSize = "1.0em";
	}
	if (parseFloat(document.body.style.fontSize) < 1.2)
		document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (0.1) + "em";
}

function decreaseFont() {
	if (document.body.style.fontSize == "") {
		document.body.style.fontSize = "1.0em";
	}
	if (parseFloat(document.body.style.fontSize) > .8)
		document.body.style.fontSize = parseFloat(document.body.style.fontSize) - (0.1) + "em";
}