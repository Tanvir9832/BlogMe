const express = require("express");
const controller = require("../controller/post");
const authCheck = require("../middleware/authCheck");

const postRouter = express.Router();

postRouter.route("/all-posts").get(controller.getAllPosts);
postRouter.route("/single-post/:id").get(controller.getSinglePost);
postRouter.route("/create-post").post(authCheck, controller.createPost);
postRouter.route("/delete/:id").delete(controller.deletePost);
postRouter.route("/updateData/:id").patch(controller.updateData);
postRouter.route("/userPost").get(authCheck , controller.userPost);


module.exports = postRouter;