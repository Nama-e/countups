let procrastinationTime = 0; // Variable to store procrastination time in seconds
let intervalId;

// Function to update the procrastination timer every second
function updateProcrastinationTimer() {
    procrastinationTime++;
    updateCounter();
}

// Function to update the counter every second
function updateCounter() {
    document.querySelector('.counter').innerText = "Procrastination Time: " + formatTime(procrastinationTime);
}

// Function to start the counter
function startCounter() {
    intervalId = setInterval(updateProcrastinationTimer, 1000);
}

// Function to format time to HH:MM:SS
function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Call the startCounter function when the page loads
document.addEventListener("DOMContentLoaded", startCounter);
