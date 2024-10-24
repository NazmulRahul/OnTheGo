const mongoose = require('mongoose');
const Itinerary = require('./Itinerary');

const TripSchema =new mongoose.Schema({
    email:String,
    name:String,
    Images:[{
        imageUrl:String,
        imageDetails:String,
        caption:String,
    }],  
});

module.exports = mongoose.model('Trip',TripSchema);