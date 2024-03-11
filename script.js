let count = 0;
let intervalId;

function updateCounter() {
    count++;
    document.querySelector('.counter').innerText = formatTime(count);
}

function startCounter() {
    intervalId = setInterval(updateCounter, 1000);
}

function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

document.addEventListener("DOMContentLoaded", startCounter);
