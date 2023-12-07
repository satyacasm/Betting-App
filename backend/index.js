import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/user", router);
app.use("/api/blog",blogRouter);

mongoose
  .connect(
    "mongodb+srv://test:S7125s7125@cluster0.krcz6mp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("connect to database and listening at port at 5000"))
  .catch((err) => console.log(err));
