const express=require('express');
const bodyParser = require("body-parser");
const fs=require('fs');

const app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// route
const routes = require('./routes/Routes.js')
app.use('/', routes)
//start server
app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
}) 


