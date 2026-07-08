const express = require("express");
const dotenv =require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
const JWT_SECRET = process.env.SECRET;


const users = [];

app.post("/register", async (req,res) =>{
    const {username,password} = req.body;

    const userExists = users.find(u => u.username === username)
    
    if(userExists){
        return res.status(400).json({message:"user already exist"})
    }

    const hashedPassword = await bcrypt.hash(password,10);

    users.push({
        username,
        password:hashedPassword
    });

    res.json({message:"User Registered Successfully"})
})

app.post("/login", async (req,res) => {
    const {username, password} = req.body;

    const user = users.find(u => u.username === username)
    
    if(!user){
        return res.status(400).json({message:"user not found"})
    }

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({message:"invalid credentials"})
    }

    const token = jwt.sign({username:user.username}, JWT_SECRET, {expiresIn:"1h"});
    res.json({message:"login Successfully", token})
} )


//token verification logic // mannual middleware
// Authorization -> "beare token"// covert string -> array -> split
//["bearer", token]

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({message:"Token Required"});
    }


    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token,JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({message:"Invalid token"})
    }
}

app.get("/profile", verifyToken, (req,res)=>{
    res.json({
        message:"welcome to the Debugshala Profie",
        loggedInUser:req.user
    })
})

app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));