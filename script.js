let procrastinationTime = 0; // Variable to store procrastination time in seconds

// Function to update the procrastination timer every second
function updateProcrastinationTimer() {
    procrastinationTime++;
    updateCounter();
}

// Function to update the counter every second
function updateCounter() {
    const counterElement = document.querySelector('.counter');
    counterElement.innerText = `Procrastination Time: ${formatTime(procrastinationTime)}`;
}

// Function to format time to HH:MM:SS
function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Function to send final time to chat
function sendFinalTimeToChat() {
    const finalTime = formatTime(procrastinationTime);
    // Read OAuth token from token.json
    fetch('token.json')
        .then(response => response.json())
        .then(data => {
            const oauthToken = data.oauth_token;
            const channelName = 'LatteMeowCatto'; // Replace with your Twitch channel name
            const xhr = new XMLHttpRequest();
            xhr.open("POST", `https://api.twitch.tv/kraken/channels/${channelName}/chat`, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Authorization", `OAuth ${oauthToken}`);
            xhr.send(JSON.stringify({ "content": `Final procrastination time: ${finalTime}` }));
        })
        .catch(error => console.error('Error reading token:', error));
}

// Call the updateCounter function to display the initial counter value
updateCounter();

// Call the updateProcrastinationTimer function to start the timer
setInterval(updateProcrastinationTimer, 1000);

// Send final time to chat when the page is about to unload
window.onbeforeunload = sendFinalTimeToChat;
