// This is the display of the current day per moment.js moment of the current time. This iterates every second

var display = document.getElementById("display-date");

function updateTime() {
    var now = moment();
    var humanReadable = now.format("dddd, MMMM Do");

    display.textContent = humanReadable;
}

setInterval(updateTime, 1000);
updateTime();

var rightNow = moment().format("h");
console.log(rightNow);

// Below is the code for saving to local storage for each hour

var nineOutput = document.querySelector("#nineactivity");
var nineSubmit = document.querySelector("#ninesave");

nineSubmit.addEventListener("click", storeActivities);

nineOutput.value = localStorage.getItem("ninestuff");

function storeActivities() {
    localStorage.setItem("ninestuff", nineOutput.value);
}

var tenOutput = document.querySelector("#tenactivity");
var tenSubmit = document.querySelector("#tensave");

tenSubmit.addEventListener("click", storeActivities);

tenOutput.value = localStorage.getItem("tenstuff");

function storeActivities() {
    localStorage.setItem("tenstuff", tenOutput.value);
}

var elevenOutput = document.querySelector("#elevenactivity");
var elevenSubmit = document.querySelector("#elevensave");

elevenSubmit.addEventListener("click", storeActivities);

elevenOutput.value = localStorage.getItem("elevenstuff");

function storeActivities() {
    localStorage.setItem("elevenstuff", elevenOutput.value);
}

var twelveOutput = document.querySelector("#twelveactivity");
var twelveSubmit = document.querySelector("#twelvesave");

twelveSubmit.addEventListener("click", storeActivities);

twelveOutput.value = localStorage.getItem("twelvestuff");

function storeActivities() {
    localStorage.setItem("twelvestuff", twelveOutput.value);
}

var oneOutput = document.querySelector("#oneactivity");
var oneSubmit = document.querySelector("#onesave");

oneSubmit.addEventListener("click", storeActivities);

oneOutput.value = localStorage.getItem("onestuff");

function storeActivities() {
    localStorage.setItem("onestuff", oneOutput.value);
}

var twoOutput = document.querySelector("#twoactivity");
var twoSubmit = document.querySelector("#twosave");

twoSubmit.addEventListener("click", storeActivities);

twoOutput.value = localStorage.getItem("twostuff");

function storeActivities() {
    localStorage.setItem("twostuff", twoOutput.value);
}

var threeOutput = document.querySelector("#threeactivity");
var threeSubmit = document.querySelector("#threesave");

threeSubmit.addEventListener("click", storeActivities);

threeOutput.value = localStorage.getItem("threestuff");

function storeActivities() {
    localStorage.setItem("threestuff", threeOutput.value);
}

var fourOutput = document.querySelector("#fouractivity");
var fourSubmit = document.querySelector("#foursave");

fourSubmit.addEventListener("click", storeActivities);

fourOutput.value = localStorage.getItem("fourstuff");

function storeActivities() {
    localStorage.setItem("fourstuff", fourOutput.value);
}

var fiveOutput = document.querySelector("#fiveactivity");
var fiveSubmit = document.querySelector("#fivesave");

fiveSubmit.addEventListener("click", storeActivities);

fiveOutput.value = localStorage.getItem("fivestuff");

function storeActivities() {
    localStorage.setItem("fivestuff", fiveOutput.value);
}

// This is the code for applying a class for styling for each row based on whether the hour it represents is before, after, or during the current hour

var hournine = new Date("January 23, 2020 09:00:00");
var hourten = new Date("January 23, 2020 10:00:00");
var houreleven = new Date("January 23, 2020 11:00:00");
var hourtwelve = new Date("January 23, 2020 12:00:00");
var hourone = new Date("January 23, 2020 13:00:00");
var hourtwo = new Date("January 23, 2020 14:00:00");
var hourthree = new Date("January 23, 2020 15:00:00");
var hourfour = new Date("January 23, 2020 16:00:00");
var hourfive = new Date("January 23, 2020 17:00:00");

var ninthhour = hournine.getHours();
var tenthhour = hourten.getHours();
var eleventhhour = houreleven.getHours();
var twelfthhour = hourtwelve.getHours();
var thirteenthhour = hourone.getHours();
var fourteenthhour = hourtwo.getHours();
var fifteenthhour = hourthree.getHours();
var sixteenthhour = hourfour.getHours();
var seventeenthhour = hourfive.getHours();

var rightNowNumber = parseInt(rightNow);

console.log(rightNowNumber);