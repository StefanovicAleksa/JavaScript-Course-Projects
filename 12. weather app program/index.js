const apiKey = '3b4eeb278324c3d38728c0d804e71d5d'

const cityInpForm = document.getElementById("city-input");
const cityNameInp = document.getElementById("city-name");

const cityNameDisplay = document.getElementsByClassName("city-name")[0];
const temperatureDisplay = document.getElementsByClassName('temperature')[0];
const humidityDisplay = document.getElementsByClassName("humidity")[0];
const weatherDescDisplay = document.getElementsByClassName("weather-desc")[0];
const emojiWeatherDescDisplay = document.getElementsByClassName("emoji-weather-desc")[0];
const weatherCard = document.getElementsByClassName("weather-card")[0];
const errorDisplay = document.getElementsByClassName("error")[0];



const fetchWeatherData = async city =>
{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response.ok)
        throw new Error(`Couldn't fetch the data. Respone code ${response.status}`);

    errorDisplay.style.display = "none";
    return await response.json();
}

const displayWeatherInfo = (data) =>
{
    const {
        name: city,
        main: {temp, humidity},
        weather : [{description, id}]
    } = data;
    weatherCard.style.display = "flex";
    cityNameDisplay.textContent = city;
    temperatureDisplay.textContent = (temp - 273.15).toFixed(1).toString() + `°C`;
    humidityDisplay.textContent = "Humidity: " + humidity.toString() + "%";
    weatherDescDisplay.textContent = description;
    emojiWeatherDescDisplay.textContent = displayWeatherEmoji(id);
}

function displayWeatherEmoji(weatherId)
{
    switch(true)
    {
        case(weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case(weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case(weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case(weatherId >= 600 && weatherId < 700):
            return "❄️";
        case(weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case(weatherId == 800):
            return "☀️";
        case(weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

cityInpForm.addEventListener("submit", event => {
    event.preventDefault();
    fetchWeatherData(cityNameInp.value.trim())
    .then(data => {displayWeatherInfo(data)})
    .catch(error => {
        errorDisplay.style.display = "block"; 
        console.error(error);
    });
});