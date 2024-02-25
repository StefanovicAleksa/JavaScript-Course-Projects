const generateRandBtn = document.getElementById("generate-random");
const numberLabel = document.getElementById("number");

const generateRand = (min, max) =>
    numberLabel.textContent = Math.floor(Math.random() * (max - min)) + min

generateRandBtn.onclick = () =>
{
    let min = Number(document.getElementById("min-id").value);
    let max = Number(document.getElementById("max-id").value);
    
    min < max ? numberLabel.textContent = generateRand(min, max) : alert("Invalid range selected!")
}