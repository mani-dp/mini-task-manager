import express from "express";

import { authMiddleware } from "../../middleware/auth.middleware.js";

import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from "./task.controller.js";
import { createTaskValidator, updateTaskValidator } from "./task.validator.js";
import { validationMiddleware } from "../../middleware/validation.middleware.js";

const taskRouter = express.Router();

taskRouter.use(authMiddleware);

taskRouter.post("/projects/:projectId/tasks",createTaskValidator, validationMiddleware, createTask);
taskRouter.get("/projects/:projectId/tasks", getTasks);
taskRouter.get("/:id", getTask);
taskRouter.patch("/:id", updateTaskValidator, validationMiddleware, updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;