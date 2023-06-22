// \*---------------------*/
// GLOBAL VARIABLES
// \*---------------------*/ 


// button variables
const lapBtnEle = document.querySelector(".lap-btn");
const resetBtnEle = document.querySelector(".reset-btn");
const stopBtnEle = document.querySelector(".stop-btn");
const startBtnEle = document.querySelector(".start-btn");

let displayTimerEle = document.querySelector(".display-timer");


const stopWatchWrapper = document.querySelector('.stop-watch-wrapper__stop-watch');




// LOG ENTRY VARIABLES:

const logTimeEntries = document.querySelector('.log-time-entries')
const logEntry = document.querySelector('.log-entry');
const loggedTimeEntry = document.querySelector('.log-entry-time');
const logEntryCount = document.querySelector('.log-entry-log-number')


let stopTimer = false;
let resetTimer = null;
let logEntryCounter = 0;


// \*---------------------*/
// EVENT LISTENERS
// \*---------------------*/ 



startBtnEle.addEventListener("click", startTime);
stopBtnEle.addEventListener("click", stopTime);
resetBtnEle.addEventListener("click", resetTime);
lapBtnEle.addEventListener("click", logALapEntry);





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
  resetLogEntries();
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
  resetLogEntries();
}



function logALapEntry() {
  logEntryCounter++;

const logEntryContainerEle = document.createElement("div");
logEntryContainerEle.setAttribute("class","log-entry");

const logEntryTimeEle = document.createElement('h5');
logEntryTimeEle.setAttribute('class', 'log-entry-time');
logEntryContainerEle.append(logEntryTimeEle);

const logEntryLogNumberEle = document.createElement('span');
logEntryLogNumberEle.classList.add('log-entry-log-number');
logEntryContainerEle.append(logEntryLogNumberEle);
logEntryLogNumberEle.append(logEntryCounter);

let secondsEntry = padZero(timer.second);
let minuteEntry = padZero(timer.minute);
let hourEntry = padZero(timer.hour);

let timeSaved = `${hourEntry}:${minuteEntry}:${secondsEntry}`;
timeTextNode = document.createTextNode(timeSaved);
logEntryTimeEle.append(timeTextNode);

logTimeEntries.append(logEntryContainerEle);
}


function resetLogEntries() {
  logEntryCounter = 0;
  while (logTimeEntries.firstChild) {
    logTimeEntries.removeChild(logTimeEntries.firstChild);
  }
}

