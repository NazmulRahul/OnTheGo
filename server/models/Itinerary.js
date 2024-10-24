const mongoose = require('mongoose')

const ItinerarySchema =new mongoose.Schema({
    email: String,
    name:String,
    Source: String,
    Destination: String,
    Date:String,
    budget:String,
    Places:{
        suggesstions:[
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
        suggesstions:[
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
        suggeesstions:[
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

module.exports=mongoose.model('Itinerary',ItinerarySchema);