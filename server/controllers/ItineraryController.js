const { getWeather, getPlaces, getTransport, generateResponse } = require('../utils/utils');
const Itinerary = require('../models/Itinerary');
const User=require('../models/User');
const createItinerary = async (req, res) => {
    try {
        const {
            startingPoint, destination, journeyDate, returnDate, tripBudget
        } = req.body;

        const hotels = await getPlaces(destination, "Hotels", tripBudget,5);
        const restaurants = await getPlaces(destination, "Restaurants", tripBudget,5);
        const touristSpots = await getPlaces(destination, "Tourist Spots", tripBudget,10);
        const weatherInfo = await getWeather(destination, journeyDate);
        console.log('weather api not guilty')
        const transports = await getTransport('Bus', startingPoint, destination);
        console.log('transport api not guilty')
        if(!hotels || !restaurants || !touristSpots || !weatherInfo || !transports){
            return res.status(400).json({ error: "Failed to fetch data" });     
        }
        var itinerary;

        try {
                itinerary = await Itinerary.create({
                destination: destination,
                date: journeyDate,
                budget: tripBudget,
                places: touristSpots,
                transports: transports,
                hotels: hotels,
                restaurants: restaurants,
                weather: {
                    temperature: 30.0,
                    humidity: 78.5,
                    windSpeed: 5.5,
                    description: 'very good'
                },
                costs: 2000 // Placeholder for actual cost calculation
            });
            console.log('Itinerary created:', itinerary);
        } catch (error) {
            console.error('Error creating itinerary:', error.message);
        }
        const {_id}=itinerary;
        
        res.status(201).json({
            id,
            touristSpots,
            transports,
            hotels,
            restaurants,
            weatherInfo
        });
    } catch (error) {
        res.status(500).json({ error: "Server error! Failed to create Itinerary" });
    }
};


const getAllPlans = async (req, res) => {
    try {
        const user=User.findOne({email:req.email});
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        const plans = await user.plans;
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ error: "Failed to get Itineraries" });
    }
};

const deleteItinerary = async (req, res) => {
    try {
        const {title}= req.body;

        const user=User.findOne({email:req.email});
        Plans=user.plans;
        Plans.forEach(element => {
            if(element.title===title){
                element.itinerary=null;
            }
        });
        user.plans=Plans;
        await user.save();
        res.status(200).json({ message: "Itinerary deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete Itinerary" });
    }
    
};

module.exports = {
    createItinerary,
    deleteItinerary,
    getAllPlans
};
