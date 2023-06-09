
const lapBtnEle = document.querySelector(".lap-btn");
const resetBtnEle = document.querySelector(".reset-btn");
const stopBtnEle = document.querySelector(".stop-btn");
const startBtnEle = document.querySelector(".start-btn");

let displayTimerEle = document.querySelector(".display-timer");


startBtnEle.addEventListener("click", checkTime);
stopBtnEle.addEventListener("click", stopTimer)

let StopTime = null;

const timer = {
  second: 0,
  minute: 0,
  hour: 0,
  SECONDS_TIME: 1000
}


function formatTime() {
  timer.second ++;
  
// check if time is valid on display
if(timer.second > 59) {
  timer.second = 0;
  timer.minute++;
}
if (timer.minute > 59) {
  timer.minute = 0;
  timer.hour++;
};

const seconds0Pad = `${timer.second < 10 ? `0${timer.second}` : timer.second}`;
const minutes0Pad = `${timer.minute < 10 ? `0${timer.minute}` : timer.minute}`;
const hours0Pad = `${timer.hour < 10 ? `0${timer.hour}` : timer.hour}`;

displayTimerEle.textContent = `${hours0Pad}:${minutes0Pad}:${seconds0Pad}`
}


function checkTime() {

  startBtnEle.removeEventListener("click", checkTime)
  StopTime = setInterval(formatTime , timer.SECONDS_TIME);  
}

function stopTimer() {
clearInterval(StopTime);
startBtnEle.addEventListener("click", checkTime);
}





