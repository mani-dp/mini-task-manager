import express from "express";
import { loginUser } from "./auth.controller.js";
import { loginValidator } from "./auth.validator.js";
import { validationMiddleware } from "../../middleware/validation.middleware.js";

const authRouter = express.Router();

authRouter.post(
    "/login",
    loginValidator,
    validationMiddleware,
    loginUser
);

export default authRouter;
