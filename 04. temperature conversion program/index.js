const celsius = "&degC";
const fahrenheit = "&degF";

const tempInp = document.getElementById("temp-num-inp");
const tempTypeSelect = document.getElementById("temp-type-select");
const convertButton = document.getElementById("convert-btn");
const conversionValueEl = document.getElementById("conversion-value");

const CtoF = (temp) =>
    32 + temp * 9. / 5;

const FtoC = (temp) =>
    (temp - 32) * 5. / 9;

convertButton.onclick = () =>
{
    conversionValueEl.style.display = "block";
    let temp = Number(tempInp.value);
    !isNaN(temp) && tempTypeSelect.value === celsius ? conversionValueEl.textContent = String(Math.round(CtoF(temp) * 100) / 100) + "°F" : conversionValueEl.textContent = String(Math.round(FtoC(temp) * 100) / 100) + "°C";

}