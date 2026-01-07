const mongoose = require('mongoose');
const express = require('express');
const connectDb = require("./config/db");
const allroutes = require('./routes/allroutes');
const app = express();
const cors =require ('cors');
app.use(cors({
    origin: ['http://localhost:3000',
        'http://192.168.100.7:3000'
    ],
      credentials: true
}));

app.use(express.json());
app.use('/api', allroutes);
connectDb();

app.listen(5000,"0.0.0.0", () => {
    console.log("the backend is running on the port", 5000)
})

// app.listen(5000, () => {
//     console.log("the backend is running on the port", 5000)
// })
