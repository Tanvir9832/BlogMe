const express = require("express");
const controller = require("../controller/user");
const userRouter = express.Router();

userRouter.route("/register").post(controller.register);
userRouter.route("/login").post(controller.login);

module.exports = userRouter;