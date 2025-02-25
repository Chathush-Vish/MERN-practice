import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.listen(7070, () => {
   console.log("server is running");
});

const uri = process.env.MONGO_URI;

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
