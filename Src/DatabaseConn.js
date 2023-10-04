const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/LoginSignupForm")
.then(()=>{
    console.log(" Successfully Connected to the Database");

})
.catch(()=>{
    console.log("Connection has been failed")
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type: Number,
        required: true

    },
    password:{
        type:String,
        required:true
    }
})

const UserDetails = new mongoose.model("UserData",LogInSchema);

module.exports = UserDetails;