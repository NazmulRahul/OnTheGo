
const axios = require('axios');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const getWeather = async (location, date) => {
    try {
        console.log('from weather api')
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&dt=${date}`;
        const response = await axios.get(url);
        const {
            temp_c, humidity, wind_kph, condition, feelslike_c
        } = response.data.current;
        return {
            Temperature: temp_c,
            Humidity: humidity,
            WindSpeed: wind_kph,
            Description: condition.text,
            FeelsLike: feelslike_c
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

/**
 * Fetches a list of places based on the specified location, place type, and budget.
 *
 * @async
 * @function getPlaces
 * @param {string} location - The location to search for places.
 * @param {string} place - Hotels or Restaurants to search for.
 * @param {string} budget - The budget constraint for the search.
 */
const getPlaces = async (location, place, budget, resultCount) => {
    try {
        const apiKey = process.env.GOOGLE_API_KEY;

        /**
         * URL for the Google Places Text Search API. It finds hotels or restaurants in the specified location based on the budget.
         */
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Best+${place}+in+${location}+and+budget+is+${budget}&key=${apiKey}`;

        const response = await axios.get(url);
        const result = response.data.results.slice(0, resultCount || 5);
        const geminiResponse =await generateResponse(`Suggest me some best ${place} in ${location} with budget ${budget}`);

        const simplifiedLocations = result.map(location => ({
            name: location.name,
            formatted_location: location.formatted_address,
            location: {
                lat: location.geometry.location.lat,
                lng: location.geometry.location.lng
            },
        }));


        return {
            list: simplifiedLocations,
            description: geminiResponse.content.parts[0].text
        };
    } catch (error) {
        console.error('Error fetching places data:', error);
        throw error;
    }
};

const getTransport = async (type, startingPoint, destination) => {
    try {
        const prompt = `how can I go from ${startingPoint} to ${destination} in ${type}? Response in the following json format:[{
            "Name": "String",
            "Departure time": "String",
            "Ticket Price": "String"
        }]`;
        const {content} = await generateResponse(prompt);
        console.log(content.parts[0]);
        return content.parts[0];
    } catch (error) {
        console.error('Error fetching transport data:', error);
        res.status(500).json({ error: "Server error! Failed to fetch transport data" });
    }
};

const generateResponse = async (prompt) => {
    try {
        const api_key = process.env.GEMINI_API_KEY;

        const genAI = new GoogleGenerativeAI(api_key);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        return result.response.candidates[0];
    } catch (error) {
        console.error('Error generating response:', error);
        throw new error("Error generating response "+ error); 
    }
};

module.exports = {
    getWeather,
    getPlaces,
    getTransport,
    generateResponse
};