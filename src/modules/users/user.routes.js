import express from "express";
import {
  getUsers,
  createUser,
} from "./user.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { validationMiddleware } from "../../middleware/validation.middleware.js";
import { createUserValidator } from "./user.validator.js";

const router = express.Router();

router.get("/",authMiddleware, getUsers);
router.post("/",createUserValidator, validationMiddleware, createUser);

export default router;