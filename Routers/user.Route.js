import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../Controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/getuser", getUser);

export default router;
