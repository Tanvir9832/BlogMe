const express = require("express");
const controller = require("../controller/post");

const postRouter = express.Router();

postRouter.route("/all-posts").get(controller.getAllPosts);

module.exports = postRouter;