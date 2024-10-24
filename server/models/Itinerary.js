const mongoose = require('mongoose')

const ItinerarySchema =new mongoose.Schema({
    Destination: String,
    Date:String,
    budget:String,
    Places:{
        list:[
            {
                name: String,
                formatted_location: String,
                location: {
                    lat: String,
                    lng: String
                },
            
            }
        ],
        description: String
    },
    TransPorts:[{
        Name:String,
        Departure:String,
        Price:String,
        description: String     
    },],
    Hotels:{
        list:[
            {
                name: String,
                formatted_location: String,
                location: {
                    lat: String,
                    lng: String
                },
            
            }
        ],
        description: String
    },
    Restaurents:{
        list:[
                {
                    name: String,
                    formatted_location: String,
                    location: {
                        lat: String,
                        lng: String
                    },
                
                }
            ],
        description: String
    },
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