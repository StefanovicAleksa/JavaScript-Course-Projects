
const decreaseBtn = document.getElementById("decrease-count");
const increaseBtn = document.getElementById("increase-count");
const resetBtn = document.getElementById("reset-count");
const counter = document.getElementById("counter");
decreaseBtn.onclick = () =>
    counter.textContent = Number(counter.textContent) - 1;

increaseBtn.onclick = () =>
    counter.textContent = Number(counter.textContent) + 1;

resetBtn.onclick = () =>
    counter.textContent = "0";