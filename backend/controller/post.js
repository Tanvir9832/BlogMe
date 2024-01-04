const { queryWithValue } = require("../query/queryWithValue");
const { v4 } = require("uuid");

const getAllPosts = async (req, res) => {
  try {
    const q = "SELECT * FROM posts order by postid";
    const posts = await queryWithValue(q);
    return res.status(200).json({
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

const getSinglePost = async (req, res) => {
  try {
    const q = `SELECT * from posts where postid =${req.params.id}`;
    const post = await queryWithValue(q);
    return res.status(200).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// http://localhost:8080/api/post/create-post
// {
// "postid" : 1,
// "title" : "tan@gmail.com",
// "description" : "123456789",
// "image" : "sfgsfs"
// }
const createPost = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const uuid = v4();
    const qu = `SELECT * from users where email = "${req.useremail}"`;
    const data2 = await queryWithValue(qu, [title, description, image, uuid]);
    const q =
      "insert into posts(`title`,`description`,`image`,`uuid` , `userid`) values (? , ? , ? , ? , ?)";
    const data = await queryWithValue(q, [
      title,
      description,
      image,
      uuid,
      data2[0]?.userid,
    ]);
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const q = `DELETE from posts where postid = ${req.params.id}`;
    const data = await queryWithValue(q);
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateData = async (req, res) => {
  try {
    const { title, decscription } = req.body;
    let q;
    if (title && decscription) {
      q = `UPDATE posts SET title=${title} , description= ${decscription} where postid = ${req.params.id}`;
    }
    if (title) {
      q = `UPDATE posts SET title= "${title}" where postid = "${req.params.id}"`;
    }
    if (decscription) {
      q = `UPDATE posts SET description= "${decscription}" where postid = "${req.params.id}"`;
    }

    const data = await queryWithValue(q);
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const userPost = async (req, res) => {
  try {
    const qu = `SELECT * from users where email = "${req.useremail}"`;
    const data2 = await queryWithValue(qu);
    const x = `SELECT * FROM users LEFT JOIN posts ON ${data2[0].userid} = posts.userid`;
    const data = await queryWithValue(x);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  deletePost,
  updateData,
  userPost
};
