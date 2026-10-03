import express from "express";

import { authMiddleware } from "../../middleware/auth.middleware.js";

import {
  createProject,
  getProjectsController,
  getProjectByIdController,
  updateProject,
  deleteProject,
} from "./project.controller.js";

const projectRouter = express.Router();

projectRouter.use(authMiddleware);

projectRouter.post("/", createProject);
projectRouter.get("/", getProjectsController);
projectRouter.get("/:id", getProjectByIdController);
projectRouter.patch("/:id", updateProject);
projectRouter.delete("/:id", deleteProject);

export default projectRouter;