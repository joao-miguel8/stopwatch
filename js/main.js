// button variables
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


function padZero(typeOfTime) {
  const pad0Time = typeOfTime < 10 ? `0${typeOfTime}` : typeOfTime;
  return pad0Time;
}


function formatTime() {
  timer.second++;
  // reset seconds if timer gets to 59 seconds and increment minutes every each time
  timer.second > 59 ? (timer.second = 0, timer.minute++) : null;
  // reset minute if timer gets to 60 minutes and increment hour each time
  timer.minute > 59 ? (timer.minute = 0, timer.hour++) : null;

  // time check condition to see if time is over certain amount to include 0 padding

  displayTimerEle.textContent = `${padZero(timer.hour)}:${padZero(timer.minute)}:${padZero(timer.second)}`
}


function startTime() {
  startBtnEle.removeEventListener("click", startTime)
  stopTimer = setInterval(formatTime, timer.SECONDS_TIME);
}

function stopTime() {
  if (stopTimer) {
    clearInterval(stopTimer);
  }
  startBtnEle.addEventListener("click", startTime);
}

function resetTime() {
  clearInterval(stopTimer);
  clearInterval(formatTime, 0);
  timer.second = 0;
  timer.minute = 0;
  timer.hour = 0;
  displayTimerEle.textContent = '00:00:00'
  startBtnEle.addEventListener("click", startTime);
}



