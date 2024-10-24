const mongoose =require('mongoose')

const TravelLogSchema =new mongoose.Schema({
    Place:String,
    Date:Date,
    budget:String,
    TransPorts:[{
        Name:String,
        Departure:String,
        Price:String        
    },],
    Hotels:[{
        Lat:String,
        Lon:String
        },
    ],
    Cost:Number,
})

module.exports=mongoose.model('TravelLog',TravelLogSchema);