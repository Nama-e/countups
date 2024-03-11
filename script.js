<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timer</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');
        body { background-color: #00ff00; }
        .stopwatch {
            position: fixed;
            font-size: 48px;
            font-family: 'Kdam Thmor Pro';
            color: white;
            text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5), 0px -2px 5px rgba(0, 0, 0, 0.5), -2px 0px 5px rgba(0, 0, 0, 0.5), 2px 0px 5px rgba(0, 0, 0, 0.5);
        }
    </style>
</head>
<body>
    <div class="stopwatch"></div>
    <script>
        const initialStartTime = Date.now(); // Initial start time
        let elapsedTime = 0; // Elapsed time when paused
        let timerInterval; // Interval ID for the timer

        // Function to update the timer display
        function updateTimer() {
            const currentTime = Date.now();
            const totalTime = currentTime - initialStartTime + elapsedTime;

            let hours = Math.floor(totalTime / (1000 * 60 * 60));
            let minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((totalTime % (1000 * 60)) / 1000);

            // Add leading zeros if necessary
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            // Display the time
            document.querySelector('.stopwatch').innerText = `${hours}:${minutes}:${seconds}`;
        }

        // Start the timer
        timerInterval = setInterval(updateTimer, 1000);

        // Event listener for when the browser goes offline
        window.addEventListener('offline', () => {
            clearInterval(timerInterval); // Stop the timer
            elapsedTime = Date.now() - initialStartTime; // Save the elapsed time
        });

        // Event listener for when the browser comes back online
        window.addEventListener('online', () => {
            initialStartTime = Date.now(); // Reset the initial start time
            timerInterval = setInterval(updateTimer, 1000); // Restart the timer
        });
    </script>
</body>
</html>
