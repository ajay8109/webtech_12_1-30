const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("home page")
})

app.listen(7000, ()=> {console.log(`http://localhost:7000`)
})