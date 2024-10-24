const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'must provide email'],
        unique: true,
        trim: true,
        maxlength: [50, 'Email can not be more than 50 characters']
    },
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'Name can not be more than 20 characters']
    },
    password: {
        type: String,
        required: [true, 'must provide password'],
        trim: true,
        // maxlength:[20,'Password can not be more than 20 characters']
    },
    role: {
        type: String,
        default: 'user'
    },
    travelLog: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Itinerary'
    }],
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }],
    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip'
    }],
});

module.exports=mongoose.model('User',UserSchema);

