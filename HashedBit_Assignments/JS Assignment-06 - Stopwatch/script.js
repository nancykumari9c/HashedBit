let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  const timeString =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  document.getElementById("time").textContent = timeString;
}

function start() {
  timer = setInterval(updateTime, 1000);
  document.getElementById("start").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("stop").disabled = false;
}

function pause() {
  clearInterval(timer);
  document.getElementById("pause").textContent = "Continue";
  document.getElementById("pause").onclick = continueTimer;
}

function continueTimer() {
  timer = setInterval(updateTime, 1000);
  document.getElementById("pause").textContent = "Pause";
  document.getElementById("pause").onclick = pause;
}

function stop() {
  clearInterval(timer);
  document.getElementById("time").textContent = "00:00:00";
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("stop").disabled = true;
  seconds = 0;
  minutes = 0;
  hours = 0;
}