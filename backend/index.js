const express = require("express");
const { database } = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/user");
const postRouter = require("./routes/posts");


const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors({}));

app.use("/api/user",userRouter);
app.use("/api/post",postRouter);



app.listen(8080,()=>{console.log("server connected")});