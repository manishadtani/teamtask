const express = require("express")
const app = express()
const path = require("path")
const indexRouter = require("./routes/index.router")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))
app.use('/', indexRouter)

module.exports = app;