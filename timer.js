let timer;
let totalSeconds = 25 * 60; // 25 minutes
let remainingSeconds = totalSeconds;
let isRunning = false;

// Display Timer
function updateDisplay() {

    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;

    document.getElementById("timerDisplay").innerHTML =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

// Start Timer
function startTimer() {

    if (isRunning) return;

    isRunning = true;

    timer = setInterval(function () {

        if (remainingSeconds > 0) {

            remainingSeconds--;
            updateDisplay();

        } else {

            clearInterval(timer);
            isRunning = false;

            alert("🎉 Study Session Completed!\nTake a 5-minute break.");

        }

    }, 1000);
}

// Pause Timer
function pauseTimer() {

    clearInterval(timer);
    isRunning = false;

}

// Reset Timer
function resetTimer() {

    clearInterval(timer);

    isRunning = false;

    remainingSeconds = totalSeconds;

    updateDisplay();

}

// Show timer when page loads
updateDisplay();