const Trip = require('../models/Trip');

// Get all trips
const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single trip by ID
const getTripById = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        res.status(200).json(trip);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new trip
const createTrip = async (req, res) => {
    const {Place, StartDate} = req.body;
    try {
        const trip = new Trip({Place, StartDate, Images:[]});
        const newTrip = await trip.save();
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Adds new image and caption to a trip
const updateTrip = async (req, res) => {
    try {
        const {tripId, imageUrl, caption}= req.body;
        const trip = await Trip.findOne({_id:tripId});
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        trip.Images.push({imageUrl, caption});
        const updatedTrip = await trip.save();
        res.status(200).json(updatedTrip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a trip
const deleteTrip = async (req, res) => {
    try {
        const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
        if (!deletedTrip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        res.status(200).json({ message: 'Trip deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllTrips,
    getTripById,
    createTrip,
    updateTrip,
    deleteTrip
};