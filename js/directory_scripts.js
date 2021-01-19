// Directory scripts
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
			search();
		}
	}

	function makeClickHandler(c) {
		i[c].onclick=function() {
			if(i[c].id==='back') {
				document.getElementById('search').value=document.getElementById('search').value.replace(/.$/,'');
				if(document.getElementById('search').value=='') {
					reset();
				}
				search();
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
	}
	
	window.addEventListener?
	window.addEventListener('load',init,false):
	window.attachEvent('onload',init);
})();

function search() {
	var input, filter, ul, li, a, i, txtValue, floor;
	input = document.getElementById('search');
	filter = input.value.toUpperCase();
	ul = document.getElementsByTagName('ul');
	floor = document.getElementById('floor').value;
	level = document.getElementById('course').value;
	
		li = ul[0].getElementsByTagName('li');
		lif = ul[1].getElementsByTagName('li');
		lic = ul[2].getElementsByTagName('li');
		for (i = 1; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
				lif[i].style.display = "";
				lic[i].style.display = "";
			} else {
				li[i].style.display = "none";
				lif[i].style.display = "none";
				lic[i].style.display = "none";
			}
		}
}


function displayKeyboard() {
	document.getElementById('keyboard').style.display='';
}

var switched1 = true;
var switched2 = false;
var switched3 = false;

function sortList1() {
  var list1, list2, list3, i, switching, b1, b2, b3, s, shouldSwitch;
  list1 = document.getElementById("leftList");
  list2 = document.getElementById("centerList");
  list3 = document.getElementById("rightList");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b1 = list1.getElementsByTagName("li");
	b2 = list2.getElementsByTagName("li");
	b3 = list3.getElementsByTagName("li");
	s = list1.getElementsByTagName("span");
    // Loop through all list items:
    for (i = 1; i < (b1.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
	  	var name1 = b1[i].innerHTML.split(' ')[b1[i].innerHTML.split(' ').length-1];
		var name2 = b1[i+1].innerHTML.split(' ')[b1[i+1].innerHTML.split(' ').length-1];
		if(!switched1) {
			if (name1.toLowerCase() > name2.toLowerCase()) {
				/* If next item is alphabetically lower than current item,
				mark as a switch and break the loop: */
				shouldSwitch = true;
				break;
			}
		} else {
			if (name1.toLowerCase() < name2.toLowerCase()) {
				/* If next item is alphabetically lower than current item,
				mark as a switch and break the loop: */
				shouldSwitch = true;
				break;
			}
		}
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
		b1[i].parentNode.insertBefore(b1[i + 1], b1[i]);
		b2[i].parentNode.insertBefore(b2[i + 1], b2[i]);
		b3[i].parentNode.insertBefore(b3[i + 1], b3[i]);
		// s[i].parentNode.insertBefore(s[i + 1], s[i]);
		switching = true;
    }
  }
  switched1 = !switched1;
  if (!switched1)
	  b1[0].getElementsByTagName('i')[0].className = "fa fa-caret-up";
  else
	  b1[0].getElementsByTagName('i')[0].className = "fa fa-caret-down";
}

function sortList2() {
  var list1, list2, list3, i, switching, b, shouldSwitch;
  list1 = document.getElementById("leftList");
  list2 = document.getElementById("centerList");
  list3 = document.getElementById("rightList");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b1 = list1.getElementsByTagName("li");
	b2 = list2.getElementsByTagName("li");
	b3 = list3.getElementsByTagName("li");
    // Loop through all list items:
    for (i = 1; i < (b2.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
		if(!switched2) {
			if (b2[i].innerHTML.toLowerCase() > b2[i+1].innerHTML.toLowerCase()) {
				/* If next item is alphabetically lower than current item,
				mark as a switch and break the loop: */
				shouldSwitch = true;
				break;
			}
		} else {
			if (b2[i].innerHTML.toLowerCase() < b2[i+1].innerHTML.toLowerCase()) {
				/* If next item is alphabetically lower than current item,
				mark as a switch and break the loop: */
				shouldSwitch = true;
				break;
			}
		}
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
		b1[i].parentNode.insertBefore(b1[i + 1], b1[i]);
		b2[i].parentNode.insertBefore(b2[i + 1], b2[i]);
		b3[i].parentNode.insertBefore(b3[i + 1], b3[i]);
		switching = true;
    }
  }
	switched2 = !switched2;
	if (!switched2)
		b2[0].getElementsByTagName('i')[0].className = "fa fa-caret-up";
	else
		b2[0].getElementsByTagName('i')[0].className = "fa fa-caret-down";
}

function sortList3() {
  var list1, list2, list3, i, switching, b, shouldSwitch;
  list1 = document.getElementById("leftList");
  list2 = document.getElementById("centerList");
  list3 = document.getElementById("rightList");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
	b1 = list1.getElementsByTagName("li");
	b2 = list2.getElementsByTagName("li");
	b3 = list3.getElementsByTagName("li");
    // Loop through all list items:
    for (i = 1; i < (b3.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
		if(!switched3) {
			if (b3[i].innerHTML.toLowerCase() > b3[i+1].innerHTML.toLowerCase()) {
				/* If next item is alphabetically lower than current item,
				mark as a switch and break the loop: */
				shouldSwitch = true;
				break;
			}
		} else {
			if (b3[i].innerHTML.toLowerCase() < b3[i+1].innerHTML.toLowerCase()) {
				/* If next item is alphabetically lower than current item,
				mark as a switch and break the loop: */
				shouldSwitch = true;
				break;
			}
		}
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
		b1[i].parentNode.insertBefore(b1[i + 1], b1[i]);
		b2[i].parentNode.insertBefore(b2[i + 1], b2[i]);
		b3[i].parentNode.insertBefore(b3[i + 1], b3[i]);
		switching = true;
    }
  }
  switched3 = !switched3;
  if (!switched3)
	  b3[0].getElementsByTagName('i')[0].className = "fa fa-caret-up";
  else
	  b3[0].getElementsByTagName('i')[0].className = "fa fa-caret-down";
}

function filterFloors() {
	var li, left, right, a, i, txtValue, floor;
	li = document.getElementById("centerList").getElementsByTagName("li");
	left = document.getElementById("leftList").getElementsByTagName("li");
	right = document.getElementById("rightList").getElementsByTagName("li");
	floor = document.getElementById('floor').value;
	for (i = 1; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		var num = txtValue.split(' ')[1].substr(0, 1);
		if (num == '1' && (floor == "1")) {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		}
		else if (num == '2' && (floor == "2")) {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		}
		else if (num == '3' && (floor == "3")) {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		}
		else if (num == '4' && (floor == "4")) {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		}
		else if (num == '5' && (floor == "5")) {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		}
		else if (document.getElementById('search').value == '' && floor == "all") {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		} else {
			li[i].style.display = "none";
			left[i].style.display = "none";
			right[i].style.display = "none";
		}
	}
}

function filterCourses() {
	var li, left, right, a, i, txtValue, level;
	li = document.getElementById("rightList").getElementsByTagName("li");
	left = document.getElementById("leftList").getElementsByTagName("li");
	right = document.getElementById("centerList").getElementsByTagName("li");
	level = document.getElementById('course').value;
	for (i = 1; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		var num = txtValue.substr(4, 1);
		if (num == '1' && (level == "100")) {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		}
		else if (num == '2' && (level == "200")) {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		}
		else if (num == '3' && (level == "300")) {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		}
		else if (num == '4' && (level == "400")) {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		}
		else if (num == '7' && (level == "700")) {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		}
		else if (num == '8' && (level == "800")) {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		}
		else if (document.getElementById('search').value == '' && level == "all") {
			li[i].style.display = "";
			left[i].style.display = "";
			right[i].style.display = "";
		} else {
			li[i].style.display = "none";
			left[i].style.display = "none";
			right[i].style.display = "none";
		}
	}
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