
const lapBtnEle = document.querySelector(".lap-btn");
const resetBtnEle = document.querySelector(".reset-btn");
const stopBtnEle = document.querySelector(".stop-btn");
const startBtnEle = document.querySelector(".start-btn");

let displayTimerEle = document.querySelector(".display-timer");

// \*---------------------*/
// EVENT LISTENERS
// \*---------------------*/ 

startBtnEle.addEventListener("click", startTime);
stopBtnEle.addEventListener("click", stopTime)
resetBtnEle.addEventListener("click", resetTime)



// \*---------------------*/
// GLOBAL VARIABLES
// \*---------------------*/ 

let stopTimer = false;
let resetTimer = null;

// timer object created for time manipulation
const timer = {
  second: 0,
  minute: 0,
  hour: 0,
  SECONDS_TIME: 1000,
}



function formatTime() {
  timer.second ++;
// reset seconds if timer gets to 59 seconds and increment minutes every each time
timer.second > 59 ? (timer.second = 0, timer.minute++) : null;
// reset minute if timer gets to 60 minutes and increment hour each time
timer.minute > 59 ? (timer.minute = 0, timer.hour++) : null;

  // time check condition to see if time is over certain amount to include 0 padding
  const seconds0Pad = `${timer.second < 10 ? `0${timer.second}` : timer.second}`;
  const minutes0Pad = `${timer.minute < 10 ? `0${timer.minute}` : timer.minute}`;
  const hours0Pad = `${timer.hour < 10 ? `0${timer.hour}` : timer.hour}`;

displayTimerEle.textContent = `${hours0Pad}:${minutes0Pad}:${seconds0Pad}`
}


function startTime() {
  startBtnEle.removeEventListener("click", startTime)
  stopTimer = setInterval(formatTime , timer.SECONDS_TIME);  
}

function stopTime() {
  if(stopTimer) {
    clearInterval(stopTimer);
  }
  startBtnEle.addEventListener("click", startTime);
}

function resetTime() {
clearInterval(stopTimer);
clearInterval(formatTime,0);
timer.second = 0;
timer.minute = 0;
timer.hour = 0;
displayTimerEle.textContent = '00:00:00'
startBtnEle.addEventListener("click", startTime);
}

