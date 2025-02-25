import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   id: Number,
   name: String,
   age: String,
   position: String,
});

const user = mongoose.model("User", userSchema);

export default user;
