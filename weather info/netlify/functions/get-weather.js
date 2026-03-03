exports.handler = async (event) => {
    const city = event.queryStringParameters.city

    const key = process.env.WEATHER_API_KEY

    const response = await fetch(`https://api.weather.com?q=${city}&key=${mySecret}`);
    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
}