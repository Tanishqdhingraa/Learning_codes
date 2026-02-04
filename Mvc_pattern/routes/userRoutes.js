// routes/userRoutes.js

import express from "express";
import { fetchUsers, fetchUser, addUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", fetchUsers);       // GET all users
router.get("/:id", fetchUser);     // GET single user
router.post("/", addUser);         // CREATE user

export default router;
