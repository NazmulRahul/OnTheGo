const mongoose =require('mongoose')

const TravelLogSchema =new mongoose.Schema({
    Place:{
        type: String,
        required:[true,'must provide place'],
        trim:true,
        maxlength:[20,'Place can not be more than 20 characters']
    },
    Date:{
        type: Date,
        required:[true,'must provide date'],
        trim:true,
        maxlength:[20,'Date can not be more than 20 characters']
    },
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
    Cost:{
        type: Number,
        required:[true,'must provide costs'],
        trim:true,
        maxlength:[20,'Costs can not be more than 20 characters']
    }
})

module.exports=mongoose.model('TravelLog',TravelLogSchema);