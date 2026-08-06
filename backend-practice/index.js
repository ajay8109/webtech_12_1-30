const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');

const app = express();

app.use(express.json());

// Import routes
const studentRoutes = require("./routes/studentRoutes");

// Register routes
app.use(studentRoutes);