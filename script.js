// JavaScript code for counter functionality
let count = 0;

// Function to update the counter every second
function updateCounter() {
    count++;
    document.getElementById('counter').innerText = count;
}

// Call the updateCounter function every second
setInterval(updateCounter, 1000);
