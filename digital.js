function updateClock() {
    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    var date = today.getDate();
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var periods = "PM";

    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    if (hours >= 12) {
        let periodsid = document.getElementById("period");
        periodsid.textContent = periods;
        hours = hours - 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    /*let timeselect = document.getElementById("timeS");
    timeselect.textContent = hours + ":" + minutes + ":" + seconds + "  " + periods;
    timeselect.style.color = "white";
    let dateSelect = document.getElementById("DateS");
    dateSelect.style.color = "white";
    dateSelect.textContent = days[day - 1] + ", " + months[month - 1] + " " + date + ", " + year;*/

    let hoursid = document.getElementById("hours");
    hoursid.textContent = hours + ": ";
    let minutesid = document.getElementById("minutes");
    minutesid.textContent = minutes + ": ";
    let secondsid = document.getElementById("seconds");
    secondsid.textContent = seconds;
    let yearid = document.getElementById("year");
    yearid.textContent = year;
    let dayid = document.getElementById("day");
    dayid.textContent = days[day - 1] + ", ";
    let monthid = document.getElementById("month");
    monthid.textContent = months[month];
    let dateid = document.getElementById("date");
    dateid.textContent = date + ", ";





}

function intialClock() {
    updateClock();

}
window.setInterval("updateClock()", 1000) 