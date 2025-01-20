const userModel = require('../models/index.model')

module.exports.loginPage = (req,res)=>{
    res.render("index");
}

module.exports.registerPage = async (req,res)=>{
    console.log(req.query)
    const {username , email , bio , imageUrl} = req.query

    const user = new userModel({
        username:username,
        email:email,
        bio:bio,
        imageUrl:imageUrl
    })
   
   await user.save()

    const allUsers = await userModel.find()
   res.render("dashboard" , {user: allUsers})
   
}

module.exports.profilepage = async (req, res) => {
    const user = await userModel.findById(req.params.id)
    console.log(user)
    res.render("profile", { user: user })
}