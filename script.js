// grab elements
const hoursDisplay = document.querySelector("#hours");
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const centsDisplay = document.querySelector("#cents");
const buttons = document.querySelectorAll("button");

// variables
let timer;
let time = 0;
let cents = 0;
let secs = 0;
let mins = 0;
let hours = 0;

// functions

// always shows to digits
function alwaysTwoDigits(num) {
  return num < 10 ? "0" + num : num;
}
// update display
function updateDisplays() {
  hoursDisplay.textContent = alwaysTwoDigits(hours);
  minutesDisplay.textContent = alwaysTwoDigits(mins);
  secondsDisplay.textContent = alwaysTwoDigits(secs);
  centsDisplay.textContent = `.${alwaysTwoDigits(cents)}`;
}

function timeUp() {
  time++;

  if (cents === 99) {
    cents = 0;
  }
  if (secs === 60) {
    secs = 0;
  }
  if (mins === 60) {
    mins = 0;
  }
  if (hours === 24) {
    hours = 0;
  }
  // add 1 cent
  if (time % 1 === 0) {
    cents++;
  }
  // add 1 sec
  if (time % 100 === 0) {
    secs++;
  }
  // add 1 min
  if (time % (100 * 60) === 0) {
    mins++;
  }
  // add 1 hour
  if (time % (100 * 60 * 60) === 0) {
    hours++;
  }

  updateDisplays();
}

function handleClick(e) {
  const target = e.target.id;
  if (target === "start") {
    timer = setInterval(timeUp, 10);
  }
  if (target === "stop") {
    clearInterval(timer);
  }
  if (target === "reset") {
    clearInterval(timer);
    cents = 0;
    secs = 0;
    mins = 0;
    hours = 0;
    time = 0;
    updateDisplays();
    centsDisplay.textContent = ``;
  }
}

buttons.forEach((btn) => btn.addEventListener("click", handleClick));
