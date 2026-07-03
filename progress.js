let progress = localStorage.getItem("progress") || 0;

// Load Progress
updateProgress();


// Increase Progress
function increaseProgress() {

    if (progress < 100) {

        progress = Number(progress) + 10;

        if (progress > 100) {
            progress = 100;
        }

        localStorage.setItem("progress", progress);

        updateProgress();

    } else {

        alert("🎉 Congratulations! You reached 100%.");

    }

}


// Reset Progress
function resetProgress() {

    progress = 0;

    localStorage.setItem("progress", progress);

    updateProgress();

}


// Update Progress Bar
function updateProgress() {

    document.getElementById("progressText").innerHTML = progress + "%";

    document.getElementById("progressFill").style.width = progress + "%";

}