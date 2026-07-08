const express = require("express")
const fs = require("fs")
const mongoose = require("mongoose")

PORT = 8000;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/stundet").then(()=>{
     console.log("mongoose conncected succefully")
}).catch((err)=>{
    console.log("mongoose conntecting err",err)
})

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use((req,res,next)=>{
   fs.appendFile("./log.txt", `${Date.now()} : ${req.url} : ${req.method}\n`, (err) =>{
    next();
   })
})




const studentSchema = new mongoose.Schema({
  name: { type: String, required: true,},
  address: { type: String, required: true,
  },
  email: { type: String, required: true, unique: true,
  },
  age: { type: Number, required: true,
  },
});

const Student = mongoose.model("students", studentSchema)


app.post("/api/students", async (req,res)=>{
    try{
     const {name, address, email, age} = req.body;
     const newStudent = await Student.create({name, address, email, age })
     res.json({sucess:true,mesage:"student created", data:newStudent})
    }catch{
       res.json({sucess:false,mesage:"Error creating student"})
    }
})


// app.get("/api/students", async (req,res)=>{
//     try{
//      const student1 = await Student.find();
//      res.json({sucess:true,mesage:"stundent fetched succefully", data:student1})
//     }catch{
//        res.json({sucess:false,mesage:"Error getting error"})
//     }
// })





// app.get("/api/students/:id", async (req,res) => {
//    try {
//       const student = await Student.findById(req.params.id);
//       res.json({succes:true,message:"student fetched succefully", data:student})
//    } catch (error) {
//       res.json({suces:false,message:"student fetching errror"})
//    }
// })

//  app.patch("/api/students/:id", async (req, res) => {
//     try {
//         const updatedStudent = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});

//         res.json({ sucess: true, mesage: "user updated  succefully using patch method", data: updatedStudent});
//     } catch {
//         res.json({ sucess: false, mesage: "user updating error", error:error });
//     }
// });

// app.put("/api/students/:id", async (req, res) => {
//     try {
//         const updatedStudent = await Student.findOneAndReplace(
//             { _id: req.params.id },  req.body, { new: true } );
//         res.json({ success: true,message: "Student updated successfully using PUT method", data: updatedStudent });
//     } catch (error) {
//         res.json({ success: false, message: "Student updating error", error: error.message });
//     }
// });


// app.delete("/api/students/:id", async (req, res) => {
//     try {
//          await Student.findByIdAndDelete(req.params.id);

//         res.json({ sucess: true, mesage: "user deleted succefully"});
//     } catch {
//         res.json({ sucess: false, mesage: "user deleting error" });
//     }
// });


app.listen(8000, () => console.log(`http://localhost:${PORT}`))
