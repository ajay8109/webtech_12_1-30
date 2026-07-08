const express = require('express')
const dotenv=require('dotenv')
const nodemailer =require('nodemailer')

dotenv.config();

// express app init
const app = express();
const PORT = 8000;


app.use(express.json());


app.post("/send-email", async (req,res)=>{
try {
    
    
    const {to,subject,text,imagePath} = req.body;

    
    const transporter = nodemailer.createTransport({
        service:"gmail", 
        auth:{
            user : process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
     })

    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      attachments: imagePath
        ? [
            {
              filename: imagePath.split("/").pop(),
              path:imagePath,
            },
          ]
        : [],
    };

      
      const info =await transporter.sendMail(mailOptions)
  
      console.log("Email sent + ", info.response);
      res.status(200).json({message:"Email sent Sucessfully ",info})
} catch (error) {
        console.log("Email sent + ", info.response);
      res.status(400).json({message:"Email failed sent ",error})
}
      
});

app.get("/",(req,res)=>{
    res.send("Email server is running.....");
})


app.listen(PORT, ()=> console.log(`server running on http://localhost:${PORT}`))




