const Trip = require('../models/Trip');
const User = require('../models/User');

// Create a new trip
const createTrip = async (req, res) => {
    const { title, source, place, startDate } = req.body;
    const email=req.email;
    try {
        const user=User.findOne({email:email});
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        const plan = user.plans.find(plan=>plan.title===title);
        if(!plan) return res.status(404).json({ message: 'Plan not found. Create a plan first' });
        const newTrip = await Trip.create({ Source:source, Place:place, StartDate:startDate, Images:[] });
        plan.trips=newTrip._id;
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Adds new image and caption to a trip
const updateTrip = async (req, res) => {
    try {
        const { tripId, imageUrl, caption } = req.body;
        const trip = await Trip.findOne({ _id: tripId });
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        trip.Images.push({ imageUrl, caption });
        const updatedTrip = await trip.save();
        res.status(200).json(updatedTrip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a trip
const deleteTrip = async (req, res) => {
    try {
        const {title}= req.body;

        const user=User.findOne({email:req.email});
        Plans=user.plans;
        Plans.forEach(element => {
            if(element.title===title){
                element.trip=null;
            }
        });
        user.plans=Plans;
        await user.save();
        res.status(200).json({ message: "Trip deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete Trip" });
    }
};

module.exports = {
    updateTrip,
    createTrip,
    deleteTrip
};