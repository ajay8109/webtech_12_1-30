// let arr = [
//     {id: 1, name: 'John', salary: 50000},
//     {id: 2, name: 'Jane', salary: 60000},
//     {id: 3, name: 'Jim', salary: 55000},
//     {id: 4, name: 'Jill', salary: 70000},
// ]

// let arr1 = arr.reduce((acc, curr) => {
//     return acc.salary > curr.salary ? acc : curr; // acc = 50000 > curr = 60000 ? acc : curr , returns curr = 60000
//                                                  // acc = 60000 > curr = 55000 ? acc : curr , returns acc = 60000
//                                                  // acc = 60000 > curr = 70000 ? acc : curr , returns curr = 70000
//                                                  // acc = 70000 > curr = undefined ? acc : curr , returns acc = 70000
//                                                  // highest salary is 70000
// });
// console.log(arr1);



// const students = [
//   { id: 1, name: "Ajay" },
//   { id: 2, name: "Rahul" },
//   { id: 3, name: "Rohit" }
// ];

// // Use find() here to get the student with id 2

// const student = students.find((student) => {
//         if (student.id == 2){
//             return true;
//         }
// })

// console.log(student);


app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find((student) => {
        return student.id == id;
    })

    res.send(student);
});



// -------------------------------------------------------------------------------------

const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());


const students = [];


app.post("/student", (req,res) => {
      const student = req.body;
      
      students.push(student)
     
      res.send("student added sucessfully");
})

app.get("/student", (req,res) => {
    
     res.send(students)

});


app.get("/student/:id", (req, res) => {
     const id = Number(req.params.id);

     const student = students.find((student) => {
            return student.id == id;
     })

     res.send(student);
})


app.put("/student/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex((student) => {
    return student.id === id;
});

const updatedStudent = req.body;


if (index === -1) {
    return res.status(404).send("Student not found");
}
console.log(req.body);
students[index].name = updatedStudent.name;
students[index].age = updatedStudent.age;

res.send("Student updated successfully");
});


app.delete("/student/:id", (req, res) => {
     const id = Number(req.params.id);

     const index = students.findIndex((student) => {
    return student.id === id;
});

if (index === -1) {
    return res.status(404).send("Student not found");
}
  
students.splice(index, 1);

res.send("Student deleted successfully");
   
})





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





app.post("/student", async (req, res) => {
    try {
        
const student = await Student.create(req.body);

        res.send(student);
    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }
});

// ------------------------------------------------------------------------



const express = require("express");
const mongoose = require("mongoose");


const app = express();
const PORT = 3000

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

  const studentSchema = new mongoose.Schema({
     name: String,
    age: Number,
    course: String
  })

  const Student = mongoose.model("Student", studentSchema);

  app.post("/student", async (req,res) => {
    const student = await Student.create(req.body);

    res.send(student)
  })

  app.get("/student", async (req,res) => {
        const students = await Student.find();
         
        if (students.length === 0) {
    return res.status(404).json({
        message: "No students found"
    });
}
    res.send(students);
  })

  app.get("/student/:id", async (req,res) => {
    const student = await Student.findById(req.params.id)
      
    if(!student){
      return res.status(400).json({message: "student not found"})
    }
  res.send(student)

  })

   app.put("/student/:id", async (req,res) => {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new : true})

        if(!student){
            return res.status(404).json({
    message: "Student not found"
       });
        }
     
        res.send(student);
    })

app.delete("/student/:id" , async (req,res) => {
    const student = await Student.findByIdAndDelete(req.params.id)

    if(!student){
      return  res.status(404).json({
          message:  "student not found"
        })
    }

    res.send("student deleted succecfully")
})
     
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

