const express = require("express");
const controller = require("../controller/user");
const authCheck = require("../middleware/authCheck");
const userRouter = express.Router();

userRouter.route("/register").post(controller.register);
userRouter.route("/login").post(controller.login);
userRouter.route("/checkOut").get(authCheck,controller.checkOut);
userRouter.route("/search").get(controller.searchUser);

module.exports = userRouter;