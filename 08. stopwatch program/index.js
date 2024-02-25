const clock = document.getElementById("clock");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

const update = () =>
{
    elapsedTime = Date.now() - startTime;

    let hours = String(Math.floor(elapsedTime / 1000 / 60 / 60)).padStart(2, "0");
    let minutes = String(Math.floor(elapsedTime % (60 * 60 * 1000) / 1000 / 60)).padStart(2, "0");
    let seconds = String(Math.floor(elapsedTime % (60 * 1000) / 1000)).padStart(2, "0");
    let miliseconds = String(Math.floor(elapsedTime % 1000 / 10)).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

startBtn.onclick = () =>
{   
    if(!isRunning)
    {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

stopBtn.onclick = () =>
{
    if(isRunning)
    {
        clearInterval(timer);
        isRunning = false;
    }
}

resetBtn.onclick = () =>
{
    clearInterval(timer);
    timer = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    clock.textContent = `00:00:00:00`;
}