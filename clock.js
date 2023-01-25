function showTime()
{
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var session = "AM";
	if (h==0){
		h = 12;
	}
	if (h>12)
	{
		h = h - 12;
		session = "PM";
	}
	
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	
	var day = date.getDay();
	var month = date.getMonth();
	var year = date.getFullYear();
	var day_number = date.getDate();
	
	//var time = h + ":" + m + ":" + s + " " + session + " " + day + " " + month + " " + day_number + " " + year;
	
//	var time = date.toString([], { hour12: true});
//	time = time.substring(0, time.length - 15);  // chop off GMT-800 (PST)
	
	var time = date.toLocaleTimeString();
	var ampm = time.substring(time.length-3, time.length);
	time = time.substring(0, time.length - 3);
	
	var datestring = date.toDateString();
	
	document.getElementById("DateDisplay").innerText = datestring;
	document.getElementById("DateDisplay").textContent = datestring;
	
	document.getElementById("ampm").innerText = ampm;
	document.getElementById("ampm").textContent = ampm;
	
	
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;
	
	setTimeout(showTime, 1000);
}

showTime();