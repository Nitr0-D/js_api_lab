const input = document.querySelector('input')
const city = document.getElementById('city')
const date = document.getElementById('image')
const temperature = document.getElementById('temperature')
const weatherConditions = document.getElementById('weatherConditions')
const highPlaceholder = document.getElementById('highPlaceholder')
const highValue = document.getElementById('highValue')
const lowPlaceholder = document.getElementById('lowPlaceholder')
const lowValue = document.getElementById('lowValue')


async function getWeatherData(city) {
try {
// This calls your secret backend using the shortcut we made
    const response = await fetch('/api/getWeather?city=' + city);

} catch (error) {
        console.error("Error:", error);
        alert("Check your console! Something went wrong.");
    }
}