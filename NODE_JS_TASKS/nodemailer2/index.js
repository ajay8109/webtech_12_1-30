const express = require("express")
const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

dotenv.config()

const app = express();
const PORT = 8000;

 app.use(express.json());

app.post("/send-mail", async (req, res) => {
    try {
         const {to, subject, text} = req.body
         
         const transport = nodemailer.createTransport({
           service: "gmail",
           auth : {
                email : process.env.EMAIL_USER,
                user : process.env.EMAIL_PASS
           }

         })

         const mailOptions = {
            from : process.env.EMAIL_USER,
           to,
           subject,
           text

         }

         const info = await transport.sendMail(mailOptions);

         console.log("email sent", info.res)
         res.status(200).json({mesage : "email sent succecfully", info})

    } catch (error) {
        console.log("email failed", error)
        res.status(400).json({mesage: "email failed to send", error})
    }
})


app.listen(PORT, ()=> console.log(`server running on http://localhost:${PORT}`))
