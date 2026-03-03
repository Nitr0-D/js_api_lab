exports.handler = async (event) => {
    const city = event.queryStringParameters.city

    const key = process.env.WEATHER_API_KEY

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=${key}&dt=2026-03-01`);
    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
}