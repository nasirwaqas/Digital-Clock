function displayTime() {
    const dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins  = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session =  document.getElementById("session");

    if (hrs >= 12) {
        session.innerHTML = "PM";
    }
    else {
        session.innerHTML = "AM";
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    document.getElementById('hours').innerHTML = formatTime(hrs);
    document.getElementById('minutes').innerHTML = formatTime(mins);
    document.getElementById('seconds').innerHTML = formatTime(sec);

}

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

setInterval(displayTime, 10);
displayTime();