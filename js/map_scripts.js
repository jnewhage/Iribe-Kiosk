// Maps scripts
(function() {
	'use strict';
	var i,c;
	function init(){ 
		i=document.getElementById('keyboard').getElementsByTagName('input'); 
		for(c = 0;c < i.length; c++) {
			if(i[c].type==='button') { 
				i[c].addEventListener('onclick',makeClickHandler(c));
			}
		}
	}

	function makeClickHandler(c) {
		i[c].onclick=function() {
			if(i[c].id==='back') {
				document.getElementById('search').value=document.getElementById('search').value.replace(/.$/,'');
			}
			else if (i[c].id==='enter') {
				search();
			}
			else if (i[c].id==='page_back') {
				self.location="../map.html";
			}
			else {
				if (document.getElementById('search').value.length < 4) {
					document.getElementById('search').value+=this.value;
				} else {
					document.getElementById('limit').style.display='';
				}
			}
		};
	}
	
	window.addEventListener?
	window.addEventListener('load',init,false):
	window.attachEvent('onload',init);
})();

function search() {
	var room = document.getElementById('search').value;
	var rooms = ['5204','4214','5148','5140','4130','3226','5238','4132','5154','4128',
					'4244','1126','2212','4202','2242','4212','1210','1124','1250','5146',
					'2240','5222','1212','5164','2218','5236','4162','4158','2210','3220','4206',
					'5214','4124','5240','2214','5150','4238','1128','4222','5250','5216','5210',
					'1248','5244','0102','0108','0112','0116','0120','1104','1108','1202',
					'1204','1206','1207','1212'];
	
	if (room.length == 4) {
		if (rooms.indexOf(room) >= 0) {
			self.location="maps/"+room+".html";
		}
		else {
			document.getElementById('invalid').style.display='';
		}
  } else {
	  document.getElementById('invalid').style.display='';
  }
};

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function openModal2() {
	document.getElementById("myModal2").style.display = "block";
}
function closeModal2() {
	document.getElementById("myModal2").style.display = "none";
}

function zoomIn(){
  var myImg = document.getElementById("img");
  var currWidth = myImg.clientWidth;
  myImg.style.width = (currWidth + 100) + "px";
}
function zoomOut(){
  var myImg = document.getElementById("img");
  var currWidth = myImg.clientWidth;
  if(currWidth == 100) return false;
  else{
        myImg.style.width = (currWidth - 100) + "px";
    }
}

function zoomIn2(){
	var myImg = document.getElementById("img2");
	var currWidth = myImg.clientWidth;
	myImg.style.width = (currWidth + 100) + "px";
  }
  function zoomOut2(){
	var myImg = document.getElementById("img2");
	var currWidth = myImg.clientWidth;
	if(currWidth == 100) return false;
	else{
		  myImg.style.width = (currWidth - 100) + "px";
	  }
  }