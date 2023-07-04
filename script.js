let timer, timeInterval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerDisplay = document.getElementById('timer-display');

// implement the below funtion using the setInteral funtion
function startTimer() {
    timeInterval = setInterval(() => {
        if(milliseconds === 0) {
            seconds ++;
            console.log('me')
        }  else if(seconds === 60) {
            minutes ++;
            console.log('u')
        }

        milliseconds += 100;

        timerDisplay.textContent = formatTime(minutes, seconds, milliseconds);

    }, 1000)
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
    console.log("HH")
    clearInterval(timeInterval);
}

function resetTimer() {
    clearInterval(timeInterval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timerDisplay.textContent = '00:00:00';
}