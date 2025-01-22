const userModel = require("../models/userModel");
const postModel = require("../models/postModel")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');


module.exports.indexController = (req,res)=>{
    res.render("index")
}

module.exports.loginController = async (req,res)=>{
    res.render("login") 
}

module.exports.dashboardController = (req,res)=>{
    res.render("dashboard")
}



module.exports.registerController = async (req,res)=>{
    // console.log(req.body)
    const {username,name, email, age, password} = req.body

    const oldUser = await userModel.findOne({email})
    if(oldUser) return res.status(500).send("user is already registered")

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
               let user = new userModel({
                    username:username,
                    name:name,
                    age:age,
                    email:email,
                    password:hash
                })
               await user.save()
               var token = jwt.sign({email:email , userid: user._id}, 'shhhhh');
               res.cookie("token",token);
            });
        });  


   
    res.render("dashboard")
}


module.exports.logincompareController = async (req,res)=>{
    // console.log(req.body)
    const {email, password} = req.body

    const oldUser = await userModel.findOne({email})
    if(!oldUser) return res.status(500).send("Just go and register yurself then login")

       bcrypt.compare(password, oldUser.password, async function(err, result){
                    if(result){
                        let user = new userModel({
                            email:email,
                            password:password
                        })
                       await user.save()
                        var token = jwt.sign({email:email , userid: user._id}, 'shhhhh');
                        res.cookie("token",token);
                         res.status(200).redirect("/dashboard")
                         } 
                        else {res.redirect("/login")}
       })   
   
    // res.render("register")
}


module.exports.logoutController = (req,res)=>{
    res.cookie("token","")
    res.redirect("/login")
}


module.exports.isLoggedIn = (req,res,next)=>{
    if(req.cookies.token === "") res.send("login first")
    else{
        let data = jwt.verify(req.cookies.token,"shhhhh");
        req.user = data;
    }
    next();
}


