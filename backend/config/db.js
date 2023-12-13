const mysql = require("mysql2");
require("dotenv").config();

const database = mysql.createConnection({
    host : "localhost",
    user:"root",
    password: process.env.DB_KEY,
    database:"blogme"
})

database.connect((err,data)=>{
    if(!err){
        console.log("connected");
    }else{
        console.log(err)
    }
})

module.exports = {
    database
}