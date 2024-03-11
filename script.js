// Function to send final time to chat
function sendFinalTimeToChat() {
    const finalTime = formatTime(procrastinationTime);
    // Read OAuth token from token.json
    fetch('token.json')
        .then(response => response.json())
        .then(data => {
            const oauthToken = data.oauth_token;
            console.log(`OAuth Token: ${oauthToken}`); // Log the OAuth token
            const channelName = 'LatteMeowCatto'; // Replace with your Twitch channel name
            const message = `Final procrastination time: ${finalTime}`;
            const url = `https://api.twitch.tv/kraken/chat/${channelName}/messages`;
            const headers = {
                'Authorization': `OAuth ${oauthToken}`,
                'Client-ID': 'your_client_id' // Replace with your Twitch app client ID
            };
            const body = { 'message': message };

            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
            .then(response => {
                if (response.ok) {
                    console.log('Message sent to chat:', message);
                } else {
                    console.error('Failed to send message to chat:', response.statusText);
                }
            })
            .catch(error => console.error('Error sending message to chat:', error));
        })
        .catch(error => console.error('Error reading token:', error));
}

// Send final time to chat when the page is about to unload
window.onbeforeunload = function() {
    console.log('Sending final time to chat...'); // Log when sending final time to chat
    sendFinalTimeToChat();
};

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

// Call the updateCounter function to display the initial counter value
updateCounter();

// Call the updateProcrastinationTimer function to start the timer
setInterval(updateProcrastinationTimer, 1000);
