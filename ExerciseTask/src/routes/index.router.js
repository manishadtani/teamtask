const express = require("express")
const router = express.Router()
const indexController = require("../controllers/index.controller")


router.get('/', indexController.loginPage)

router.post('/register', indexController.registerPage)

router.get("/profile/:id", indexController.profilepage)


module.exports = router