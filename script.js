var display = document.getElementById("display-date");


function updateTime() {
    var now = moment();
    var humanReadable = now.format("dddd, MMMM Do");

    display.textContent = humanReadable;
}

setInterval(updateTime, 1000);
updateTime();