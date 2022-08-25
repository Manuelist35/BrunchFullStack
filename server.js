require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); 

const app = express();

connectDB();

app.get("/", (req, res) => {
    console.log("hi")
    res.send(("<h1>Hi</h1>"))
})

const port = process.env.PORT || 5001;

app.listen(port, () => console.log("Node server started using nodemon", port));