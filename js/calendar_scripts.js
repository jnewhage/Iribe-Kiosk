// Calendar scripts
const date = new Date();
function populateCalendar() {
	const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	
	document.querySelector(".prev1").addEventListener("click", () => {
		date.setMonth(date.getMonth() - 1);
		document.querySelector("#month_name").innerHTML = months[date.getMonth()];
		setEvents(date.getMonth());
	});

	document.querySelector(".next1").addEventListener("click", () => {
		date.setMonth(date.getMonth() + 1);
		document.querySelector("#month_name").innerHTML = months[date.getMonth()];
		setEvents(date.getMonth());
	});

	document.querySelector("#month_name").innerHTML = months[date.getMonth()];
	setEvents();
}

function communityOutreach() {
	if (!outreachEvents) {
		emptyEvent();
	} else {
		var event_text = "Iribe Initiative for Inclusion and Diversity in Computing ";
	    event_text += `<i class="fa fa-globe"></i>`;
        document.getElementById("description_title").innerHTML = event_text;
		document.getElementById("description").innerHTML = "Are you in CMSC 131, 132, 216, 250, 330, or 351? The Iribe Initiative for Inclusion & Diversity is offering 1:1 Tutoring AND Guided Study Sessions (GSS) in IRB 1104 (near the 1st floor elevators). 1:1 Tutoring will be offered beginning November 3rd.";
	}
}

function socialEventOne() {
	if (!socialEvents.checked) {
		emptyEvent();
	} else {
		var event_text = "Computer Science Student Organization Fair ";
		event_text += `<i class="fa fa-users"></i>`;
		document.getElementById("description_title").innerHTML = event_text;
		document.getElementById("description").innerHTML =  "Want to learn more about the CS student orgs? Stop by the Department of Computer Science’s CS Student Org Fair from 11 am to 3 pm at IRB Cantilever to learn more and get involved! RSVP at https://go.umd.edu/CSOrgFair";
	}
}

function socialEventTwo() {
	if (!socialEvents.checked) {
		emptyEvent();
	} else {
		var event_text = "Iribe Initiative & Code: BLACK Social ";
		event_text += `<i class="fa fa-users"></i>`;
		document.getElementById("description_title").innerHTML = event_text;
		document.getElementById("description").innerHTML = "The Iribe Initiative will be hosting a social event in co-sponsorship with Code: BLACK. Come visit the DICE Lounge at IRB1104 at 11am for fall cookie decorating and connect with members from Code: BLACK.";
	}
}

function corporateEventOne() {
	if (!corporateEvents.checked) {
		emptyEvent();
	} else {
		var event_text = "Late Fall CS Career: COVID-19 Edition ";
		event_text += `<i class="fa fa-handshake-o"></i>`;
		document.getElementById("description_title").innerHTML = event_text;
		document.getElementById("description").innerHTML = "With the ongoing COVID-19 Pandemic, the Department of Computer Science has decided to provide a second late-Fall Career Fair. Come join us from 3pm to 8pm at the Iribe Center!";
	}
}

function corporateEventTwo() {
	if (!corporateEvents.checked) {
		emptyEvent();
	} else {
		var event_text = "GEICO Lobby Day ";
		event_text += `<i class="fa fa-handshake-o"></i>`;
		document.getElementById("description_title").innerHTML = event_text;
		document.getElementById("description").innerHTML = "Join GEICO on Wednesday, November 18th from 2:00pm-4:00pm for a virtual information session! GEICO will be hosting two 30 minute information sessions that will start at 2:00pm and 4:00pm. Right after the information session, there will be a 30 minute Q&A. Event Link: https://go.umd.edu/GEICO";
	}
}

function emptyEvent() {
	document.getElementById("description_title").innerHTML = "No Event Scheduled ";
	document.getElementById("description").innerHTML = "";
}

function showDescription() {
	document.getElementsByClassName('alert')[0].style.display='';
}

function hideDescription() {
	document.getElementsByClassName('alert')[0].style.display='none';
}

function setEvents() {
	date.setDate(1);
	month = date.getMonth()+1;
	var lastDay = new Date(date.getFullYear(), month, 0).getDate();
	var prevLastDay = new Date(date.getFullYear(), month-1, 0).getDate();
	var firstDayIndex = date.getDay();
	var lastDayIndex = new Date(date.getFullYear(), month, 0).getDay();
	var nextDays = 7 - lastDayIndex - 1;
	var day_month = "";

	for (let k = firstDayIndex; k > 0; k--) {
	  day_month += `<div id="prev-date">${prevLastDay - k + 1}</div>`;
	}
	if(month-1 == 10) {
		for (let j = 1; j <= lastDay; j++) {
			if (j % 7 == 3) {
				day_month += `<div onclick ="communityOutreach();showDescription();" id = "outreach_id_${j}">${j} <i class="fa fa-globe"></i></div>`;
			}
			else if (j == 6) {
				day_month += `<div onclick ="socialEventTwo();showDescription();" id = "social_id_two">${j} <i class="fa fa-users"></i> </div>`;
			}
			else if (j == 12) {
				day_month += `<div onclick ="corporateEventTwo();showDescription();" id = "corporate_id_two">${j} <i class = "fa fa-handshake-o"></i></div>`;
			}
			else if (j == 19) {
				day_month += `<div onclick ="socialEventOne();showDescription();" id = "social_id">${j} <i class="fa fa-users"></i> </div>`;
			}
			else if (j == 25) {
				day_month += `<div onclick ="corporateEventOne();showDescription();" id = "corporate_id">${j} <i class="fa fa-handshake-o"></i></div>`;
			}
			else {
				day_month += `<div onclick ="emptyEvent();showDescription();">${j}</div>`;
			}
		}
	} else {
		for (let j = 1; j <= lastDay; j++) {
			day_month += `<div onclick="emptyEvent();showDescription();">${j}</div>`;
		}
	}
	for (let j = 1; j <= nextDays; j++) {
		day_month += `<div id="next-date">${j}</div>`;
	}
	document.querySelector(".days").innerHTML = day_month;
}

function filterEvents () {
	if (socialEvents.checked) {
		document.getElementById("social_id_two").innerHTML = "6" + `<i class="fa fa-users"></i>`;
		document.getElementById("social_id").innerHTML = "19" + `<i class="fa fa-users"></i>`;
	} else {
		document.getElementById("social_id_two").innerHTML = "6";
		document.getElementById("social_id").innerHTML = "19";
	}
	
	if (corporateEvents.checked) {
		document.getElementById("corporate_id").innerHTML = "25" + `<i class="fa fa-handshake-o"></i>`;
		document.getElementById("corporate_id_two").innerHTML = "12" + `<i class="fa fa-handshake-o"></i>`;
	} else {
		document.getElementById("corporate_id").innerHTML = "25";
		document.getElementById("corporate_id_two").innerHTML = "12";
	}
	
	if (outreachEvents.checked) {
		document.getElementById("outreach_id_3").innerHTML = "3" + `<i class="fa fa-globe"</i>`;
		document.getElementById("outreach_id_10").innerHTML = "10" + `<i class="fa fa-globe"</i>`;
		document.getElementById("outreach_id_17").innerHTML = "17" + `<i class="fa fa-globe"</i>`;
		document.getElementById("outreach_id_24").innerHTML = "24" + `<i class="fa fa-globe"</i>`;
	} else {
		document.getElementById("outreach_id_3").innerHTML = "3";
		document.getElementById("outreach_id_10").innerHTML = "10";
		document.getElementById("outreach_id_17").innerHTML = "17";
		document.getElementById("outreach_id_24").innerHTML = "24";
	}
}
