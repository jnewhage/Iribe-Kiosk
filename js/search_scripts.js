// Search scripts
(function() {
	'use strict';
	var i,c;
	var caps = 1;
	var typed = false;
	
	function init(){ 
		i = document.getElementById('keyboard').getElementsByTagName('input');  
		for(c = 0;c < i.length; c++) {
			if(i[c].type==='button') { 
				i[c].addEventListener('onclick',makeClickHandler(c));
			}
		}

		document.getElementById('clear').onclick=function() {
			document.getElementById('search').value='';
			reset();
		}
	}

	function makeClickHandler(c) {
		i[c].onclick=function() {
			if(i[c].id==='back') {
				document.getElementById('search').value=document.getElementById('search').value.replace(/.$/,'');
				if(document.getElementById('search').value=='') {
					upper();
					clear();
				} else {
					search();
				}
			}
			else if(i[c].id==='caps') {
				caps = (caps+1) % 2;
				if(caps == 0) {
					lower();
				} else {
					upper();
				}
			}
			else {
				document.getElementById('search').value+=this.value;
				if(!typed) {
					typed = true;
					caps = 0;
					lower();
				}
				search();
			}
		};
	}
	
	function reset() {
		typed = false;
		caps = 1;
		upper();
		clear();
	}
	
	window.addEventListener?
	window.addEventListener('load',init,false):
	window.attachEvent('onload',init);
})();

function search() {
	var input, filter, ul, li, a, i, txtValue, floor, count;
	input = document.getElementById('search');
	filter = input.value.toUpperCase();
	ul = document.getElementsByTagName('ul');
	floor = document.getElementById('floor').value;
	evnt = document.getElementById('event').value;
	social = ['Iribe Initiative and Code: BLACK Social', 'CS Student Organization Fair'];
	corporate = ['Late CS Fall Career Center', 'Geico Lobby Day'];
	outreach = ['Iribe Initiative for Inclusion and Diversity in Computing'];
	count = 0;
	
	for (j = 0; j < ul.length; j++) {
		li = ul[j].getElementsByTagName('li');
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				if (j == 1) {
					var num = txtValue.split(' ')[1].substr(0, 1);
					if (num == '0' && (floor == "ground" || floor == "all"))
						li[i].style.display = "";
					if (num == '1' && (floor == "1" || floor == "all"))
						li[i].style.display = "";
					if (num == '2' && (floor == "2" || floor == "all"))
						li[i].style.display = "";
					if (num == '3' && (floor == "3" || floor == "all"))
						li[i].style.display = "";
					if (num == '4' && (floor == "4" || floor == "all"))
						li[i].style.display = "";
					if (num == '5' && (floor == "5" || floor == "all"))
						li[i].style.display = "";
				} else if (j == 2) {
					if (social.includes(txtValue) && (evnt == 'social' || evnt == 'all'))
						li[i].style.display = "";
					if (corporate.includes(txtValue) && (evnt == 'corporate' || evnt == 'all'))
						li[i].style.display = "";
					if (outreach.includes(txtValue) && (evnt == 'outreach' || evnt == 'all'))
						li[i].style.display = "";
				} else
					li[i].style.display = "";
				count++;
			} else {
				li[i].style.display = "none";
			}
		}
	}
	if (count == 0)
		document.getElementById('invalid').style.display='';
}

function filterFloors() {
	var ul, li, a, i, txtValue, evnt, social, corporate, outreach;
	ul = document.getElementsByTagName('ul');
	floor = document.getElementById('floor').value;
	
	li = ul[1].getElementsByTagName('li');
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		var num = txtValue.split(' ')[1].substr(0, 1);
		if (num == '0' && (floor == "ground"))
			li[i].style.display = "";
		else if (num == '1' && (floor == "1"))
			li[i].style.display = "";
		else if (num == '2' && (floor == "2"))
			li[i].style.display = "";
		else if (num == '3' && (floor == "3"))
			li[i].style.display = "";
		else if (num == '4' && (floor == "4"))
			li[i].style.display = "";
		else if (num == '5' && (floor == "5"))
			li[i].style.display = "";
		else if (document.getElementById('search').value != '' && floor == "all")
			li[i].style.display = "";
		else
			li[i].style.display = "none";
	}
}

function filterEvents() {
	var ul, li, a, i, txtValue, floor, evnt, social, corporate, outreach;
	ul = document.getElementsByTagName('ul');
	evnt = document.getElementById('event').value;
	social = ['Iribe Initiative and Code: BLACK Social', 'CS Student Organization Fair'];
	corporate = ['Late CS Fall Career Center', 'Geico Lobby Day'];
	outreach = ['Iribe Initiative for Inclusion and Diversity in Computing'];
	
	li = ul[2].getElementsByTagName('li');
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (social.includes(txtValue) && (evnt == 'social'))
			li[i].style.display = "";
		else if (corporate.includes(txtValue) && (evnt == 'corporate'))
			li[i].style.display = "";
		else if (outreach.includes(txtValue) && (evnt == 'outreach'))
			li[i].style.display = "";
		else if (document.getElementById('search').value != '' && evnt == "all")
			li[i].style.display = "";
		else
			li[i].style.display = "none";
	}
}

function clear() {
	ul = document.getElementsByTagName('ul');
	for (j = 0; j < ul.length; j++) {
		li = ul[j].getElementsByTagName('li');
		for (i = 0; i < li.length; i++) {
			li[i].style.display = "none";
		}
	}
	document.getElementById('invalid').style.display='none';
}

function displayKeyboard() {
	document.getElementById('keyboard').style.display='';
}

function lower() {
	document.getElementById('q').value="q";
	document.getElementById('w').value="w";
	document.getElementById('e').value="e";
	document.getElementById('r').value="r";
	document.getElementById('t').value="t";
	document.getElementById('y').value="y";
	document.getElementById('u').value="u";
	document.getElementById('i').value="i";
	document.getElementById('o').value="o";
	document.getElementById('p').value="p";
	document.getElementById('a').value="a";
	document.getElementById('s').value="s";
	document.getElementById('d').value="d";
	document.getElementById('f').value="f";
	document.getElementById('g').value="g";
	document.getElementById('h').value="h";
	document.getElementById('j').value="j";
	document.getElementById('k').value="k";
	document.getElementById('l').value="l";
	document.getElementById('z').value="z";
	document.getElementById('x').value="x";
	document.getElementById('c').value="c";
	document.getElementById('v').value="v";
	document.getElementById('b').value="b";
	document.getElementById('n').value="n";
	document.getElementById('m').value="m";
}

function upper() {
	document.getElementById('q').value="Q";
	document.getElementById('w').value="W";
	document.getElementById('e').value="E";
	document.getElementById('r').value="R";
	document.getElementById('t').value="T";
	document.getElementById('y').value="Y";
	document.getElementById('u').value="U";
	document.getElementById('i').value="I";
	document.getElementById('o').value="O";
	document.getElementById('p').value="P";
	document.getElementById('a').value="A";
	document.getElementById('s').value="S";
	document.getElementById('d').value="D";
	document.getElementById('f').value="F";
	document.getElementById('g').value="G";
	document.getElementById('h').value="H";
	document.getElementById('j').value="J";
	document.getElementById('k').value="K";
	document.getElementById('l').value="L";
	document.getElementById('z').value="Z";
	document.getElementById('x').value="X";
	document.getElementById('c').value="C";
	document.getElementById('v').value="V";
	document.getElementById('b').value="B";
	document.getElementById('n').value="N";
	document.getElementById('m').value="M";
}