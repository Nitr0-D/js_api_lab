exports.handler = async (event) => {
    const city = event.queryStringParameters.input

    const key = process.env.WEATHER_API_KEY

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=${key}`);
    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
}