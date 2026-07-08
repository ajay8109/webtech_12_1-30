const express = require("express");
const multer = require("multer");
const patth = require("path");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));

const storage = multer.diskStorage({
    destination : function (req,file,cb){
          return cb(null,"./uploads")
    },

    filename: function(req,file, cb){
        return cb(null,`${Date.now()} - ${file.originalname}`)
    }
})