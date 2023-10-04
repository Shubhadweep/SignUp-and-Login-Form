const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const UserDetails = require("./DatabaseConn");

//Get route
app.get("/Login", function(req,res){
    res.render("Login");
})
app.get("/Home",function(req,res){
    res.render("Home");
})
app.get("/Signup",  function(req,res){
    res.render("Signup");
})

//Post route
app.post("/Signup", async function(req,res){
    const data={
        // Taking the data from the signup page
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        password:req.body.password
    }
    // Inserting the data in to the database
    await UserDetails.insertMany([data]);

    res.render("Welcome User");
})

app.post("/Login", async function(req,res){
    try{
        // check Weather The name is Present in the Databse or not
        const check = await UserDetails.findOne({email:req.body.email})
        //Password Authentication
        if(check.password === req.body.password){
            res.render('Home');
        }else{
            res.send("Incorrect Password");
        }

    }catch{
        res.send("Incorrected UserName and Password");

    }

})





app.listen(5500,function(){
    console.log('The Server is listening To the port: 5500');
})