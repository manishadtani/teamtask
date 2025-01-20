const express = require("express")
const app = express()
const indexRouter = require("./routes/index.router")
require("./db/db")


app.get('/', indexRouter)



module.exports = app;