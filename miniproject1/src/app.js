const express = require("express")
const app = express()
const path = require("path")
const indexRouter = require("./routers/index.routes")
const cookieParser = require("cookie-parser");
require("./db/db")

app.set("view engine","ejs")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser())

app.use("/", indexRouter)

// app.post("/",(req,res)=>{
//     res.send("manish")
// })


module.exports = app;