let clockcontainer = document.getElementById("clockcontainer")
let hourDiv = document.getElementById("hour")
let minuteDiv = document.getElementById("minute")
let secondDiv = document.getElementById("second")
setInterval(() => {
    d = new Date();
    hour = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    hrotation = 30 * hour + minutes / 2;
    mrotation = 6 * minutes;
    srotation = 6 * seconds;

    hourDiv.style.transform = `rotate(${hrotation}deg)`;
    minuteDiv.style.transform = `rotate(${mrotation}deg)`;
    secondDiv.style.transform = `rotate(${srotation}deg)`;

}, 1000) 