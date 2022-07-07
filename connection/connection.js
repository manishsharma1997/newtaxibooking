const mongoose = require('mongoose');

var connect=()=>{
    const url = process.env.DB_PORT_NUMBER;
    return mongoose.connect(url,{useNewUrlParser:true}, (err,data)=>{
        if(err){throw err}
        else{return console.log('Database Connected Successfully')}
    })
}
module.exports = connect();