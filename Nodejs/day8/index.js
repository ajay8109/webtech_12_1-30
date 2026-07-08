const express = require("express")
const mongoose = require("mongoose")
const fs = require("fs");



const app = express();
const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/ajayyash").then(()=>{
   console.log("mongoDB connected succefully")
}).catch(()=>{
     console.log("mongoDB not connected", err)
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req,res,next) =>{
   fs.appendFile("./log.txt", `\n${Date.now()} : ${req.url} : ${req.method}\n` ,(err) =>{
     next()
   })
})


const userSchema = new mongoose.Schema({
   name:{type:String, required:true},
   email:{type:String, required:true, unique:true}

})


const User = mongoose.model("users", userSchema)


// app.post("/api/users", async (req,res)=>{
//     try{
//      const {name, email} = req.body;
//      const newUser = await User.create({name, email})
//      res.json({sucess:true,mesage:"user created", data:newUser})
//     }catch{
//        res.json({sucess:false,mesage:"Error creating user"})
//     }
// })

// app.get("/api/users", async (req,res)=>{
//     try{
//      const user1 = await User.find();
//      res.json({sucess:true,mesage:"user fetched succefully", data:user1})
//     }catch{
//        res.json({sucess:false,mesage:"Error getting error"})
//     }
// })


// app.get("/api/users/:id", async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);

//         res.json({ sucess: true, mesage: "user fetched succefully", data: user});
//     } catch {
//         res.json({ sucess: false, mesage: "Error getting user" });
//     }
// });


//  app.patch("/api/users/:id", async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});

//         res.json({ sucess: true, mesage: "user updated  succefully using patch method", data: updatedUser});
//     } catch {
//         res.json({ sucess: false, mesage: "user updating error", error:error });
//     }
// });



// app.put("/api/users/:id", async (req, res) => {
//     try {
//         const updatedUser = await User.findOneAndReplace(
//             { _id: req.params.id },  req.body, { new: true } );
//         res.json({ success: true,message: "User updated successfully using PUT method", data: updatedUser });
//     } catch (error) {
//         res.json({ success: false, message: "User updating error", error: error.message });
//     }
// });


 app.delete("/api/users/:id", async (req, res) => {
    try {
         await User.findByIdAndDelete(req.params.id);

        res.json({ sucess: true, mesage: "user deleted succefully"});
    } catch {
        res.json({ sucess: false, mesage: "user deleting error" });
    }
});


app.listen(8000, () => console.log(`http://localhost:${PORT}`))

