const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");


const app = express();

app.get("/api/users", (req,res)=>{
    return res.json(users);
})

app.listen(7000, () => console.log(`http://localhost:7000`))




