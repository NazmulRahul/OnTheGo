const {
  getWeather,
  getPlaces,
  getTransport,
  generateResponse,
} = require('../utils/utils');
const Itinerary = require('../models/Itinerary');
const User = require('../models/User');
const createItinerary = async (req, res) => {
  try {
    const { startingPoint, destination, journeyDate, returnDate, tripBudget } =
      req.body;

    console.log(req.body);

    const hotels = await getPlaces(destination, 'Hotels', tripBudget, 5);
    const restaurants = await getPlaces(
      destination,
      'Restaurants',
      tripBudget,
      5
    );
    const touristSpots = await getPlaces(
      destination,
      'Tourist Spots',
      tripBudget,
      10
    );
    const weatherInfo = await getWeather(destination, journeyDate);
    const transports = await getTransport('Bus', startingPoint, destination);

    const itinerary = await Itinerary.create({
      Destination: destination,
      Date: journeyDate,
      budget: tripBudget,
      Places: touristSpots,
      TransPorts: transports,
      Hotels: hotels,
      Restaurents: restaurants,
      Weather: weatherInfo,
      Costs: '2000', // Placeholder for actual cost calculation
    });

    if (!itinerary) {
      return res.status(400).json({ error: 'Failed to create Itinerary' });
    }

    const user = User.findOne({ email: req.email });
    user.plans.push({
      title: destination,
      itinerary: itinerary._id,
      blogs: null,
      trips: null,
    });
    const res = await user.save();

    res.status(201).json({
      touristSpots,
      transports,
      hotels,
      restaurants,
      weatherInfo,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error! Failed to create Itinerary' });
  }
};

const getAllPlans = async (req, res) => {
  try {
    const user = User.findOne({ email: req.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const plans = await user.plans;
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get Itineraries' });
  }
};

const deleteItinerary = async (req, res) => {
  try {
    const { title } = req.body;

    const user = User.findOne({ email: req.email });
    Plans = user.plans;
    Plans.forEach((element) => {
      if (element.title === title) {
        element.itinerary = null;
      }
    });
    user.plans = Plans;
    await user.save();
    res.status(200).json({ message: 'Itinerary deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Itinerary' });
  }
};

module.exports = {
  createItinerary,
  deleteItinerary,
  getAllPlans,
};
