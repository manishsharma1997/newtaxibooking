const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"})
const bodyParser = require('body-parser');
require('./connection/connection');
const user = require('./models/taxiRegister').taxi;
const image = require('./models/taxiRegister').pic;
const registerer = require('./models/taxiBooking')
const { json } = require('express/lib/response');
const functions = require('./controller/userController');
const newPerson = require('./models/taxiBooking')
const userImage = require('./models/register').userImage;
const multer = require('multer');
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./views');
    },filename:(req,file,cb)=>{
        cb(null,Date.now()+'_pk_'+file.originalname)
    }
})
const upload=multer({storage});

app.get('/alltaxi',functions.alltaxis)
app.post('/newtaxi',upload.single('file'),functions.registerTaxi)
// app.post('/updatetaxi',functions.updatetaxi)
app.post('/booktaxi',functions.booktaxi)
app.post('/registeruser',upload.single('file'),functions.registerUser)
app.post('/login',functions.login)
// app.post('/taxiImage',upload.single('file'),functions.taxiImage)




app.listen(process.env.WEB_PORT_NUMBER,()=>{
    console.log(`Server is listening on Port`)
})