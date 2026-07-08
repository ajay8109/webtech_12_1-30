const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

 dotenv.config();

 const app = express();
 const PORT = 4000;

 app.use(express.json());




 app.post("/node-mailer", async (req, res) => {
      try {
         const {to , subject, text, imagePath, cc, bcc} = req.body;

    const transport = nodemailer.createTransport({
        service : "gmail",
        auth : {

            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS            
        }
 })


    const mailOptions = {
     from: process.env.EMAIL_USER,
      to,
      cc,
      bcc,
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
    }
     
    const info = await transport.sendMail(mailOptions);

       console.log("Email sent + ", info.response);
      res.status(200).json({message:"Email sent Sucessfully ",info})
      } catch (error) {
         console.log("email failed");
      res.status(400).json({message:"Email failed sent ",error})
      }
 })



app.listen(PORT, ()=> console.log(`server running on http://localhost:${PORT}`))
