"use sctrict";
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let hr = document.querySelector(".hrs");
let ms = document.querySelector(".ms");

const start = document.querySelector(".btn_status_start");
const stop = document.querySelector(".btn_status_stop");
const reset = document.querySelector(".btn_status_reset");
let intervalTime;

let hour = 0,
  minutes = 0,
  seconds = 0,
  miliSeconds = 0;

start.addEventListener("click", () => {
  clearInterval(intervalTime);
  intervalTime = setInterval(startTime, 10);
});
// secTimer()

stop.addEventListener("click", function () {
  clearInterval(intervalTime);
});

reset.addEventListener("click", () => {
  hour = 0;
  (minutes = 0), (seconds = 0), (miliSeconds = 0);
  hr.textContent = "0" + hour;
  min.textContent = "0" + minutes;
  sec.textContent = "0" + seconds;
  ms.textContent = "0" + miliSeconds;
  clearInterval(intervalTime);
});

function startTime() {
  miliSeconds++;

  if (miliSeconds < 9) {
    ms.textContent = "0" + miliSeconds;
  }
  if (miliSeconds > 9) {
    ms.textContent = miliSeconds;
  }
  if (miliSeconds > 99) {
    miliSeconds = 0;
    seconds++;
    sec.textContent = seconds;
  }

  if (seconds < 9) {
    sec.textContent = "0" + seconds;
  }
  if (seconds > 9) {
    sec.textContent = seconds;
  }
  if (seconds > 59) {
    seconds = 0;
    minutes++;
    min.textContent = minutes;
  }
  // minutesCheck(minutes)

  if (minutes < 9) {
    min.textContent = "0" + minutes;
  }

  if (minutes > 9) {
    min.textContent = minutes;
  }
  if (minutes > 59) {
    minutes = 0;
    hour++;
    hr.textContent = hour;
  }

  if (hour < 9) {
    hr.textContent = "0" + hour;
  }
  if (hour > 9) {
    hr.textContent = hour;
  }
  if (hour > 23) {
    hour = 0;
  }
}
