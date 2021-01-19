setInterval(showTime, 1000); 
function showTime() { 
    let time = new Date(); 
    let hour = time.getHours(); 
    let min = time.getMinutes();
	let month = time.getMonth();
	let date = time.getDate();
	let year = time.getFullYear();
    am_pm = "AM"; 
  
    if (hour > 12) { 
        hour -= 12; 
        am_pm = " PM"; 
    } 
    if (hour == 0) { 
        hour = 12; 
        am_pm = " AM"; 
    } 

    min = min < 10 ? "0" + min : min; 
	
	const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
	];
	
    let currentTime = "<center>" + hour + ":" + min + " " + am_pm + "</center>"; 
	let currentDate = "<center>" + monthNames[month] + " " + date + ", " + year + "</center>";
  
    document.getElementById("time").innerHTML = currentTime; 
	document.getElementById("date").innerHTML = currentDate; 
} 