const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose")
const ejs = require("ejs");
const connectDb = require("./config/db")

 const app = express(); 
 const PORT = 8000;

 connectDb();


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use((req,res,next) =>{
   fs.appendFile("./log.txt", `\n${Date.now()} : ${req.url} : ${req.method}\n` ,(err) =>{
     next()
   },
);
});

app.set("view engine", "ejs")
app.use("/users", require("./routes/routers"))


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))