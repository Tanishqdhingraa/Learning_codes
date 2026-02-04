// controllers/userController.js

import * as User from "../models/userModel.js";

export const fetchUsers = (req, res) => {
  const users = User.getAllUsers();
  res.status(200).json(users);
};

export const fetchUser = (req, res) => {
  const user = User.getUserById(Number(req.params.id));

  if (!user)
    return res.status(404).json({ message: "User not found" });

  res.status(200).json(user);
};

export const addUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email)
    return res.status(400).json({ message: "All fields required" });

  const newUser = User.createUser({ name, email });
  res.status(201).json(newUser);
};
