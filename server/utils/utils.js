const axios = require('axios');
const asyncWrapper = require('../middleware/asyncWrapper');
require('dotenv').config();

const getWeather = asyncWrapper( async (location,date) => {
    const url=`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&dt=${date}`;
    const response = await axios.get(url);
    return response.data;
});

/**
 * Fetches a list of places based on the specified location, place type, and budget.
 *
 * @async
 * @function getPlaces
 * @param {string} location - The location to search for places.
 * @param {string} place - Hotels or Restaurants to search for.
 * @param {string} budget - The budget constraint for the search.
 */
const getPlaces = asyncWrapper(async (location,place,budget) => { 

    const apiKey = process.env.GOOGLE_API_KEY;

    /**
     * URL for the Google Places Text Search API. It finds hotels or restaurants in the specified location based on the budget.
     */
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Best+${place}+in+${location}+and+budget+is+${budget}&key=${apiKey}`;
    
    const response = await axios.get(url);
    const result=response.data.results;
    
    const simplifiedLocations = result.map(location => ({
            name: location.name,
            formatted_location: location.formatted_address,
            location: {
              lat: location.geometry.location.lat,
              lng: location.geometry.location.lng
            }
    }));
    return simplifiedLocations;
})

const getTransport=(type,startingPoint,destination)=>{
    const prompt=`how can I go from ${startingPoint} to ${destination}? Response in the following json format:[{
        Name:String,
        Departure time :String,
        ticket Price:String        
    },]`
    generateResponse(prompt);
}

const generateResponse= asyncWrapper(async (prompt)=>{

    const api_key = process.env.GEMINI_API_KEY;

    const genAI = new GoogleGenerativeAI(api_key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result;
})

module.exports = {
    getWeather,
    getPlaces,
    getTransport,
    generateResponse
};