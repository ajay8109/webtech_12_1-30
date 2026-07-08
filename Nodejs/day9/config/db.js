const mongoose = require("mongoose")


const connectDb = async () =>{
   await mongoose.connect("mongodb://127.0.0.1:27017/mvcdb")
    .then(() => console.log("mongoDb connected"))
    .catch(() => console.log("MongoDb connecting error"))


}

module.exports = connectDb