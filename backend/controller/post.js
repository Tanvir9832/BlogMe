const { queryWithValue } = require("../query/queryWithValue");


const getAllPosts = async(req,res)=>{
    try {
        const q = "SELECT * FROM posts";
        const posts = await queryWithValue(q);
        return res.status(200).json({
            posts
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

module.exports ={
    getAllPosts
}