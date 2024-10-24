const mongoose =require('mongoose')

const BlogSchema =new mongoose.Schema({
    email:String,
    title:String,
    name:String,
    story:[String]
})

module.exports=mongoose.model('Blog',BlogSchema);