const generateRandBtn = document.getElementById("generate-random");
const numberLabel = document.getElementById("number");
const guessInput = document.getElementById("guess-inp");
const currentAttemptLabel = document.getElementById("current-attempt");
const bestGuessLabel = document.getElementById("best-guess")
const guessBtn = document.getElementById("guess-btn");
const dialogLabel = document.getElementById("dialog-lbl");
let correctNumber;

//custom code from https://www.kirilv.com/canvas-confetti/#realistic for confettis
const fireConfetti = () =>
{
    var count = 200;
    var defaults = {
    origin: { y: 0.7 }
    };

    const fire = (particleRatio, opts) => {
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
    });
    }

    fire(0.25, {
    spread: 26,
    startVelocity: 55,
    });
    fire(0.2, {
    spread: 60,
    });
    fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
    });
    fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
    });
    fire(0.1, {
    spread: 120,
    startVelocity: 45,
    });
}

const generateRand = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min

generateRandBtn.onclick = () =>
{
    let min = Number(document.getElementById("min-id").value);
    let max = Number(document.getElementById("max-id").value);
    
    min < max ? correctNumber = generateRand(min, max) : alert("Invalid range selected!");
    generateRandBtn.textContent = "New Number";
    currentAttemptLabel.textContent = "Attempt: 1";
    dialogLabel.textContent = "";
}

guessBtn.onclick = () => 
{
    let min = Number(document.getElementById("min-id").value);
    let max = Number(document.getElementById("max-id").value);
    let guess = Number(guessInput.value);
    let currentAttempt = Number(currentAttemptLabel.textContent.trim().split(` `)[1]);
    let bestRun = Number(bestGuessLabel.textContent.trim().split(` `)[3]);
    if(isNaN(correctNumber))
    {
        dialogLabel.textContent = `Generate number first!`;
        dialogLabel.style.color = `red`;
    }
    else if(isNaN(guess) || (guess < min || guess > max))
    {
        dialogLabel.textContent = `Enter a valid guess!`;
        dialogLabel.style.color = `red`;
    }
    else if(guess < correctNumber)
    {
        dialogLabel.textContent = `Guess is to low.`;
        dialogLabel.style.color = `black`;
        currentAttemptLabel.textContent = "Attempt: " + String(currentAttempt + 1);
    }
    else if(guess > correctNumber)
    {
        dialogLabel.textContent = `Guess is to high.`;
        dialogLabel.style.color = `black`;
        currentAttemptLabel.textContent = "Attempt: " + String(currentAttempt + 1);
    }
    else
    {
        dialogLabel.textContent = `Congratulations, the guess is correct! The number is ${guess}`;
        dialogLabel.style.color = `green`;   
        fireConfetti();
        if(bestRun === 0 || currentAttempt < bestRun)
            bestGuessLabel.textContent = `Best Guess Attempts: ${currentAttempt}`;
    }

}