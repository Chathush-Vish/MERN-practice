import express from "express";
import userController from "../controllers/userController.js";

const route = express.Router();

route.get("/user", userController.getUser);
route.post("/adduser", userController.addUser);
route.post("/deleteuser", userController.deleteUser);
route.post("/updateuser", userController.updateUser);

export default route;
