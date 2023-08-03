// Button var
const startStopBtn = document.getElementById("start-stop-btn");
const resetBtn = document.getElementById("reset-btn");
const stopBtn = document.getElementById("stop-btn");

// time value var
let seconds = 0;
let minutes = 0;
let hours = 0;

// leading zero var
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// set interval & timerstatus var
let timerInterval = null;
let timerStatus = "stopped";

//stopWatch func
function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    leadingSeconds = `0${seconds.toString()}`;
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = `0${minutes.toString()}`;
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = `0${hours.toString()}`;
  } else {
    leadingHours = hours;
  }
  let displayTimer = document.getElementById("counter");
  displayTimer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

startStopBtn.addEventListener("click", () => {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    stopBtn.style.display = "inline-block";
    startStopBtn.style.display = "none";
    timerStatus = "started";
  }
});

stopBtn.addEventListener("click", () => {
  window.clearInterval(timerInterval);
  stopBtn.style.display = "none";
  startStopBtn.style.display = "inline-block";
  timerStatus = "stopped";
});

resetBtn.addEventListener("click", () => {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  const counter = document.getElementById("counter");
  counter.innerHTML = "00:00:00";
  stopBtn.style.display = "none";
  startStopBtn.style.display = "inline-block";
  timerStatus = "stopped";
});
