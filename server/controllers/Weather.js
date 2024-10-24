const axios = require('axios');
require('dotenv').config();
const getWeatherForecast = async (req, res) => {
    const { location,date } = req.params;

    if (!location || !date) {
        return res.status(400).json({ error: 'Location and Date is required' });
    }
    //weather api website https://www.weatherapi.com/docs/
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER-API-KEY}&q=${location}&dt=${date}`);
        const forecast = response.data;
        res.status(200).json(forecast);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather forecast' });
    }
};

module.exports = getWeatherForecast