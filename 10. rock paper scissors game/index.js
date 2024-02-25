const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const playersPick = document.getElementById("players-pick");
const computersPick = document.getElementById("computers-pick");
const playersScore = document.getElementById("players-score");
const computersScore = document.getElementById("computers-score");


const rps = ["rock", "paper", "scissors"]

const pickRandom = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

const evaluateGame = (_playersPick) =>
{
    playersPick.textContent = _playersPick;
    const _computersPick = pickRandom(rps);
    computersPick.textContent = _computersPick;

    let result = document.getElementById("result");
    if(!result)
    {
        result = document.createElement("p");
        result.id = "result";
        result.classList.add("reset-margin");
        document.querySelector("main").insertBefore(result, document.querySelector(".score-area"));
    }
    else {
        result.classList.remove("win");
        result.classList.remove("lose");
    }
    
    if((_playersPick === "rock" && _computersPick === "scissors") || (_playersPick === "paper" && _computersPick === "rock") || (_playersPick === "scissors" && _computersPick === "paper"))
    {
        result.textContent = "PLAYER WINS!";
        result.classList.add("win");
        _playersScore = Number(playersScore.textContent) + 1;
        _computersScore = Number(computersScore.textContent);
        playersScore.textContent = _playersScore;
        if(_playersScore === _computersScore)
        {
            computersScore.classList.remove("win");
            playersScore.classList.remove("lose");
        }
        else if(_playersScore === _computersScore + 1)
        {   
            playersScore.classList.add("win");
            computersScore.classList.add("lose");
        }
    }
    else if(_playersPick === _computersPick)
        result.textContent = "IT'S A TIE!";
    else
    {
        result.textContent = "COMPUTER WINS!";
        result.classList.add("lose");
        _playersScore = Number(playersScore.textContent);
        _computersScore = Number(computersScore.textContent) + 1;
        computersScore.textContent = _computersScore;

        if(_playersScore === _computersScore)
        {
            computersScore.classList.remove("lose");
            playersScore.classList.remove("win");
        }
        else if(_playersScore + 1 === _computersScore)
        {   
            playersScore.classList.add("lose");
            computersScore.classList.add("win");
        }
    }

}

rockBtn.onclick = () =>
    evaluateGame("rock");

paperBtn.onclick = () =>
    evaluateGame("paper");

scissorsBtn.onclick = () =>
    evaluateGame("scissors");