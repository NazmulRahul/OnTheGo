const mongoose =require('mongoose')

const BlogSchema =new mongoose.Schema({
    images:[String],
    story:{
        type:String,
        required:true,
    },
})

module.exports=mongoose.model('Blog',BlogSchema);