const input = document.querySelector('input')
const city = document.getElementById('city')
const date = document.getElementById('image')
const temperature = document.getElementById('temperature')
const weatherConditions = document.getElementById('weatherConditions')
const highPlaceholder = document.getElementById('highPlaceholder')
const highValue = document.getElementById('highValue')
const lowPlaceholder = document.getElementById('lowPlaceholder')
const lowValue = document.getElementById('lowValue')


async function fetchWeather() {
    try {
        let data = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat=42.9832406&lon=-81.243372&appid=d8f0ea1e252cf62e57b62823683b5b11')
        let response = await data.json()
        if(response) {
            console.log(response)
        }
    } catch (error) {
        console.error(error)   
    }
}

fetchWeather()