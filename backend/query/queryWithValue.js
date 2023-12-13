const { database } = require("../config/db")

const queryWithValue = (q,value)=>{
    return new Promise((resolve,reject)=>{
        database.query(q,value,(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

module.exports = {
    queryWithValue
}