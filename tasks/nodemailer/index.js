const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json);

app.post("/send-email", async (req, res) =>{
   try {
      const {to,text,subject} = req.body
     
      const transport = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
})

    const mailOptions = {
        from: process.env.USER_EMAIL,
        to,
        text,
        subject
    }


    const info = await transport.sendMail(mailOptions);

      console.log("Email sent + ", info.response);
      res.status(200).json({message:"Email sent Sucessfully ",info})
      } catch (error) {
         console.log("email failed");
      res.status(400).json({message:"Email failed sent ",error})
      }
    
   }
)

app.listen(PORT, ()=> console.log(`server running on http://localhost:${PORT}`))