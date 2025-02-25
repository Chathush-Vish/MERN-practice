import { response } from "express";
import User from "../models/user.js";

const getUser = (req, res) => {
   User.find()
      .then((response) => {
         res.json(response);
      })
      .catch((error) => {
         res.json(error);
      });
};

const addUser = (req, res) => {
   const user = new User({
      id: req.body.id,
      name: req.body.name,
      age: req.body.age,
      position: req.body.position,
   });

   user
      .save()
      .then((response) => {
         res.json(response);
      })
      .catch((error) => {
         res.json(error);
      });
};

const deleteUser = (req, res) => {
   const id = req.body.id;
   User.deleteOne({ id: id })
      .then((response) => {
         res.json(response);
      })
      .catch((error) => {
         res.json(error);
      });
};

const updateUser = (req, res) => {
   const { id, name, age, position } = req.body;
   User.updateOne(
      { id: id },
      { $set: { name: name, age: age, position: position } }
   )
      .then((response) => {
         res.json(response);
      })
      .catch((error) => {
         res.json(error);
      });
};

export default { getUser, addUser, deleteUser, updateUser };
