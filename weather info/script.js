const input = document.querySelector('input')
const date = document.getElementById('image')
const temperature = document.getElementById('temperature')
const weatherConditions = document.getElementById('weatherConditions')
const highPlaceholder = document.getElementById('highPlaceholder')
const highValue = document.getElementById('highValue')
const lowPlaceholder = document.getElementById('lowPlaceholder')
const lowValue = document.getElementById('lowValue')


input.addEventListener('keydown', async function (event) {
    if(event.key === 'Enter') {
    event.preventDefault()
    try {
        const city = document.getElementById('city')
        // This calls your secret backend using the shortcut we made
        const response = await fetch('/api/getWeather?city=' + city);
        const data = await response.json()

        console.log(data)

    } catch (error) {
        console.error("Error:", error);
        alert("Check your console! Something went wrong.");
    }
    }
} )

console.log('works')