const User = require("../models/User")
const express = require("express")
const router = express.Router();


router.post("/" , async (req, res)=>{
    try {
        const user = await User.create(req.body);
        res.status(201).json({success:true, data:user}) 
    } catch (error) {
        res.status(500).json({success:false, error:error.message})
    }
})

router.get("/", async (req, res)=> {
    try {
        const users = await User.find();
        res.status(200).json({success:true, data:users})
    } catch (error) {
        res.status(500).json({success:false, error:error.message})
    }
})

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({success:true, data:user})
    } catch (error) {
        res.status(500).json({success:false, error:error.message})
    }
})

router.patch("/:id", async (req,res) => {
    try {
        const user1 = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json({success:true, data:user1})
    } catch (error) {
        res.status(500).json({success:false, error:error.message})
    }
})

router.delete("/:id", async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({success:true});
    } catch (error) {
         res.status(500).json({success:false, error:error.message});
    }
})


module.exports = router;