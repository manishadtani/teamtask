const express = require("express");
const  indexController = require("../controllers/index.controller");
// const isLoggedIn = require("../controllers/index.controller")
const router = express.Router()



router.get("/", indexController.indexController)

router.post("/register", indexController.registerController)

router.get("/login", indexController.loginController)

router.post("/login", indexController.logincompareController)


router.get("/dashboard",indexController.isLoggedIn, indexController.dashboardController)


router.get("/logout", indexController.logoutController)

module.exports = router;