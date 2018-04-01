
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Routers
const categoryRouter = require('./api/routers/categories');

//connecting to mongoDB
mongoose.connect('mongodb://localhost:27017/XKitchen');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/api/categories', categoryRouter);


app.use((req, res, next) => {
    console.log("Server is Running...");  
    res.status(200).json({
        message: "Hi, I'm learning Node JS"
    });
});


module.exports = app;