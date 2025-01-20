const mongoose = require("mongoose")



const userSchema = mongoose.Schema({
    username:String,
    email:String,
    bio:String,
    imageUrl:String
})


module.exports = mongoose.model("user",userSchema)