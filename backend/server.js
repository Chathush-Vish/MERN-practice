import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemon from "nodemon";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(7070, () => {
   console.log("server is running");
});

const uri =
   "mongodb+srv://Chathush:Rwvcvr0905@cluster.ziy1q.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster";

const connect = async () => {
   try {
      await mongoose.connect(uri);
      console.log("db connected");
   } catch (error) {
      console.log("db not connected", error);
   }
};

connect();

app.use("/api/user", userRoute);
