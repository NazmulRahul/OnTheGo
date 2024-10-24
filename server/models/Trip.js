const mongoose = require('mongoose')

const TripSchema =new mongoose.Schema({
    Source:String,
    Place:String,
    StartDate:Date,
    Images:[{
        imageUrl:String,
        imageDetails:String,
        caption:String,
    }],  
});

module.exports = mongoose.model('Trip',TripSchema);