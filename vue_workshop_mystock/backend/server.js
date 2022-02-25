// console.log("Hi 123")
const express = require("express");
const app = express();
const cors = require("cors"); //pass call all require


app.use(cors())
app.use(express.static(__dirname + "/uploaded"))


app.use("/api/v2",require("./api"))

// app.get("/",(req,res)=>{
// //  res.end("1234")  
// res.json({result:"ok",message:"1234"})
// })

// app.get("/login/:username/:password",(req,res)=>{
//     res.json({result:"ok",detail: req.params})
// })





app.listen(8081,()=>{
    console.log("Server is running...")
})