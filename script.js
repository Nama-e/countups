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
    </script>
</body>
</html>
