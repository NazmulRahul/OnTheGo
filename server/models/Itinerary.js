const mongoose = require('mongoose')

const ItinerarySchema =new mongoose.Schema({
    Destination: String,
    Date:Date,
    budget:String,
    Places:[{
        name: String,
        formatted_location: String,
        location: {
              lat: String,
              lng: String
        }
    },],
    TransPorts:[{
        Name:String,
        Departure:String,
        Price:String        
    },],
    Hotels:[
        {
            name: String,
            formatted_location: String,
            location: {
                lat: String,
                lng: String
            }
        },
    ],
    Restaurents:[
        {
            name: String,
            formatted_location: String,
            location: {
                  lat: String,
                  lng: String
            },
        }
    ],
    Weather:{
        Temperature:String,
        Humidity:String,
        WindSpeed:String,
        Description:String
    },
    Costs: String,
})
// {
//     Total:String,
//     Transport:String,
//     Hotel:String,
//     Restaurent:String
// }
module.exports=mongoose.model('Itinerary',ItinerarySchema);