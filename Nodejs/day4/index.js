const express = require('express')

const app = express();

app.get("/", (req,res) => {
        res.end("this is my home page")
})

app.get("/about", (req,res) => {
     res.end(`hell0 ${req.query.myName}`)
})


app.listen(8000, ()=> console.log(`http://localhost:8000`))