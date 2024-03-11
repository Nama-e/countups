// JavaScript code for counter functionality
let count = 0;
let intervalId; // Variable to store the interval ID

// Function to update the counter every second
function updateCounter() {
    count++;
    document.getElementById('counter').innerText = count;
}

// Function to start the counter
function startCounter() {
    intervalId = setInterval(updateCounter, 1000);
}

// Call the startCounter function when the page loads
window.onload = startCounter;
