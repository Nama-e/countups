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
        .restart-button {
            margin-top: 60px;
            background-color: #fff;
            color: #000;
            border: 2px solid #000;
            padding: 10px 20px;
            font-size: 24px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="stopwatch"></div>
    <button class="restart-button">Restart Timer</button>
    <script>
        let start = Date.now();
        let timerInterval; // Variable to store the interval ID
        let elapsedTime = 0;

        // Function to update the timer display
        function updateTimer() {
            const currentTime = new Date();
            const midnight = new Date(currentTime);
            midnight.setHours(24, 0, 0, 0); // Set time to midnight

            const timeUntilMidnight = midnight.getTime() - currentTime.getTime();
            let h = Math.floor(timeUntilMidnight / 1000 / 60 / 60);
            let m = Math.floor((timeUntilMidnight / 1000 / 60 / 60 - h) * 60);
            let s = Math.floor(((timeUntilMidnight / 1000 / 60 / 60 - h) * 60 - m) * 60);

            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;

            document.querySelector('.stopwatch').innerHTML = `${h}:
