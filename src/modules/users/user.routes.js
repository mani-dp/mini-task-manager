import express from "express";
import {
  getUsers,
  createUser,
} from "./user.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("/",authMiddleware, getUsers);
router.post("/", createUser);

export default router;