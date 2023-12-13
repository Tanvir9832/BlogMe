const { database } = require("../config/db");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

const { queryWithValue } = require("../query/queryWithValue");


const register =async(req,res)=>{
    try {
        const {email, userName, password} = req.body;
        const q = "SELECT * FROM users WHERE email = ? OR userName = ?";
        
        const user = await queryWithValue(q,[email,userName]);
        if(user.length)return res.status(409).json({err : "user exists"});

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const insertQuery = "INSERT INTO users(`userName`,`email`,`password`) values (? , ? , ?)";
        const value = [
            userName, email , hash
        ];
        
        const data = await queryWithValue(insertQuery,value);

        if(data)return res.status(200).json({message : "registration successful"});
        else return res.status(500).json("failed");

    } catch (error) {
        return res.status(500).json({message : "registration failed"});
    }

}

const login =async(req,res)=>{
    try {
        const {email,password} = req.body;
        const q1 = "SELECT * FROM users WHERE email = ?"
        const user = await queryWithValue(q1,[email]);

        if(user.length===0)return res.status(404).json({message : "user not found"});

        const isPassMatched = bcrypt.compareSync(password,user[0].password);

        if(!isPassMatched)return res.status(400).json({message : "password not matched"});

        const token = await jwt.sign(user[0].email,process.env.SECRET);

        return res.status(200).json({
            message : "log in successful",
            token
        })

    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    register,
    login
}