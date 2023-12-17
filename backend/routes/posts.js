const express = require("express");
const controller = require("../controller/post");
const authCheck = require("../middleware/authCheck");

const postRouter = express.Router();

postRouter.route("/all-posts").get(authCheck ,controller.getAllPosts);

module.exports = postRouter;