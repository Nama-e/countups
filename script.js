let procrastinationTime = 0; // Variable to store procrastination time in seconds

// Function to update the procrastination timer every second
function updateProcrastinationTimer() {
    procrastinationTime++;
    updateCounter();
}

// Function to update the counter every second
function updateCounter() {
    const counterElement = document.querySelector('.counter');
    counterElement.innerText = "Procrastination Time: " + formatTime(procrastinationTime);
}

// Function to format time to HH:MM:SS
function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Call the updateCounter function when the page loads
document.addEventListener("DOMContentLoaded", updateCounter);

// Call the updateProcrastinationTimer function to start the timer
setInterval(updateProcrastinationTimer, 1000);
