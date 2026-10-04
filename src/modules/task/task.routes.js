import express from "express";

import { authMiddleware } from "../../middleware/auth.middleware.js";

import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from "./task.controller.js";

const taskRouter = express.Router();

taskRouter.use(authMiddleware);

taskRouter.post("/projects/:projectId/tasks", createTask);
taskRouter.get("/projects/:projectId/tasks", getTasks);
taskRouter.get("/:id", getTask);
taskRouter.patch("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;