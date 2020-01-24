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