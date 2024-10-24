import axios from "axios";
/**
 * Fetches a list of places based on the specified location, place type, and budget.
 *
 * @async
 * @function getPlaces
 * @param {string} location - The location to search for places.
 * @param {string} place - Hotels or Restaurants to search for.
 * @param {string} budget - The budget constraint for the search.
 */
const getPlaces = async (location,place,budget) => { 

    const apiKey = process.env.GOOGLE_API_KEY;

    /**
     * Constructs a URL for the Google Places Text Search API. It finds hotels or restaurants in the specified location based on the budget.
     */
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Best+${place}+in+${location}+and+budget+is+${budget}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        return error;
    }
}