const passwordLengthInp = document.getElementById("password-length-inp");
const useUppercaseCheckbox = document.getElementById("use-uppercase-check");
const useNumbersCheckbox = document.getElementById("use-number-check");
const useSymbolsCheckbox = document.getElementById("use-symbols-check");
const generatePassBtn = document.getElementById("generate-password");
const passwordValue = document.getElementById("password");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

const pickRandomChar = (word) =>
    word[Math.floor(Math.random() * word.length)];

generatePassBtn.onclick = () =>
{
    let avaliableChars = lowercase;
    avaliableChars += useUppercaseCheckbox.checked && uppercase;
    avaliableChars += useNumbersCheckbox.checked && numbers;
    avaliableChars += useSymbolsCheckbox.checked && symbols;

    let passLength = Number(passwordLengthInp.value);
    let password = [];

    for(let i = 0; i < passLength; i++)
    {
        password[i] = pickRandomChar(avaliableChars);
    }
    passwordValue.style.display = "block";
    passwordValue.textContent = password.join("");
}