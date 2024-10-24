const { getWeather, getPlaces,getTransport, generateResponse} = require('../utils/utils')
const Itinerary = require('../models/Itinerary');
const asyncWrapper = require('../middleware/asyncWrapper');


const createItinerary=asyncWrapper( async (req,res)=>{

    const {
       startingPoint, destination, journeyDate, returnDate, tripBudget
    }=req.body;

    const hotels = getPlaces(destination, "Hotels", tripBudget);
    const restaurants = getPlaces(destination, "Restaurants", tripBudget);
    const touristSpots = getPlaces(destination, "tourist Spots", tripBudget);
    const weatherInfo = getWeather(destination, journeyDate);
    const TransPorts = getTransport('Bus',startingPoint,destination);
    const cost=""//to be done
    const it = await Itinerary.create({
        destination,
        journeyDate,
        tripBudget,
        touristSpots,
        TransPorts,
        hotels,
        restaurants,
        weatherInfo,
        Costs:'2000'
    });
    if(!it){
        return res.status(400).json({error:"Failed to create Itinerary"});
    }
    const prompt = `create a itinerary of going to ${destination} from ${startingPoint} .  
    The itinerary may include transport options with rough time estimates, 
    along with suggested meal plans, accommodation options in ${tripBudget} estimated total cost of the trip (with its probable breakdown) and many more`;
    const result = generateResponse(prompt);
    res.status(201).json(result.response.text());
}
);


const getAllItineraries=asyncWrapper( async (req,res)=>{
    const itineraries = await Itinerary.find();
    res.status(200).json(itineraries);
});

module.exports = {createItinerary,
    getAllItineraries,
};

