let timer, timeInterval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerDisplay = document.getElementById('timer-display');
let isRunning = false;

// implement the below funtion using the setInteral funtion
function startTimer() {
    if(isRunning) {
        return;
    }
    isRunning = true;
    timeInterval = setInterval(() => {
        if(milliseconds === 0) {
            if(seconds === 60) {
                minutes ++;
                seconds = 0;
            } else{
                seconds ++;
            }
            milliseconds = 0;
        }   
        else {
            milliseconds += 100;
        }

        timerDisplay.textContent = formatTime(minutes, seconds, milliseconds);

    }, 100)
}

function formatTime(minutes, seconds, milliseconds) {
    return (
        (minutes < 10 ? '0' + minutes : minutes) +
        ':' +
        (seconds < 10 ? '0' + seconds : seconds) +
        ':' +
        (milliseconds < 10 ? '0' + milliseconds : milliseconds)
    );
}

function pauseTimer() {
    if(!isRunning) {
        return;
    }
    isRunning = false;
    clearInterval(timeInterval);
}

function stopTimer() {
    pauseTimer();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timerDisplay.textContent = formatTime(minutes, seconds, milliseconds);
}


function resetTimer() {
    stopTimer();
    startTimer();
    // clearInterval(timeInterval);
    // minutes = 0;
    // seconds = 0;
    // milliseconds = 0;
    // timerDisplay.textContent = '00:00:00';
}

document.getElementById