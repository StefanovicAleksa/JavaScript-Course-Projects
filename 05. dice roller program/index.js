const diceHolder = document.getElementById("dice-holder");
const addDiceBtn = document.getElementById("add-dice-btn");
const removeDiceBtn = document.getElementById("remove-dice-btn");

removeDiceBtn.disabled = true;

let diceElems = [];

const addDice = () =>
    diceElems.push(`<img src="resources/dice-1.png" class="dice" alt="dice side 1">`);

const removeDice = () =>
    diceElems.pop();

const updateDices = () =>
    diceHolder.innerHTML = diceElems.join("\n");

const rollDiceVal = () =>
    Math.floor(Math.random() * 6) + 1;

addDice();
updateDices();

addDiceBtn.onclick = () =>
{
    addDice();
    updateDices();
    removeDiceBtn.disabled = false;
}

removeDiceBtn.onclick = () =>
{
    removeDice();
    updateDices();
    removeDiceBtn.disabled = diceElems.length == 1;
}

diceHolder.onclick = () =>
{
    for(const [i, diceElem] of diceElems.entries())
    {
        let diceRoll = rollDiceVal();
        diceElems[i] = `<img src="resources/dice-${diceRoll}.png" class="dice" alt="dice side ${diceRoll}">`
    }
    updateDices();
}
