const mongoose = require("mongoose")



mongoose.connect("mongodb://127.0.0.1:27017/teamtask")
.then(()=>{
    console.log("Mongodb is connected")
})
.catch((err)=>{
    console.log(err)
})



