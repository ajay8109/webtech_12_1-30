const express = require("express")
const fs = require("fs")
const users = require("./MOCK_DATA.json")


const app = express();
const PORT = 8000

app.use(express.urlencoded({extended:true})) //from data
app.use(express.json())
app.use((req,res,next) => {
     fs.appendFile("./log.txt",`\n${Date.now()}: ${req.url} : ${req.method}\n`,(err)=>{
            next();
         })
})


app.get("/api/users", (req,res) => {
    return res.json(users)
})



app.post("/api/users",(req,res) => {
   const body = req.body;
   let newUser = {...body, id:users.length+1};
   users.push(newUser);

   fs.writeFile(
      `${__dirname}/MOCK_DATA.json`,JSON.stringify(users), (err,data) => {
        if(data!== null){
            return res.json({status:"succes", id:users.length,data:newUser})
        } else{
           return res.json({status:"false", message:{err}});
        }   

      } )
})

// app.get("/api/users/:id", (req,res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => {
//        return user.id == id;
//     })
//     return res.json(user);
// })

// app.put("/api/users/:id",(req,res) => {
//    res.json({succes: "data updated succefulyy"})
// })

// app.delete("/api/users/:id", (req,res) => {
//    res.json({succes:"data deleted succesfully"})
// })



app.route("/api/users/:id").get((req,res)=>{
  const id = Number(req.params.id);
    const user = users.find((user) => {
       return user.id == id;
    })
    return res.json(user);
}).put((req,res) =>{
   res.json({succes: "data updated succefulyy"})
}).delete((req,res) => {
    res.json({succes:"data deleted succesfully"})
})




app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))
