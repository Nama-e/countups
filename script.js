// Function to reset the timer
function resetTimer() {
    localStorage.setItem('elapsedTime', '0'); // Reset elapsed time in local storage
    start = Date.now(); // Reset start time
    updateTimer(); // Update timer display
}

let start; // Variable to store the start time
let elapsedTime = localStorage.getItem('elapsedTime') ? parseInt(localStorage.getItem('elapsedTime')) : 0; // Get elapsed time from local storage or default to 0
let timerInterval; // Variable to store the interval ID

// Function to update the timer display
function updateTimer() {
    const timeInMilliseconds = Date.now() - start + elapsedTime;
    let h = Math.floor(timeInMilliseconds / 1000 / 60 / 60);
    let m = Math.floor((timeInMilliseconds / 1000 / 60 / 60 - h) * 60);
    let s = Math.floor(((timeInMilliseconds / 1000 / 60 / 60 - h) * 60 - m) * 60);

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.querySelector('.stopwatch').innerHTML = `${h}:${m}:${s}`;
}

// Start the timer
start = Date.now();
updateTimer();
timerInterval = setInterval(updateTimer, 1000);

// Event listener for beforeunload event
window.addEventListener('beforeunload', () => {
    localStorage.setItem('elapsedTime', Date.now() - start + elapsedTime); // Save elapsed time to local storage
    clearInterval(timerInterval); // Clear the timer interval
});

// Event listener for click event to reset the timer
document.querySelector('.stopwatch').addEventListener('click', resetTimer);
