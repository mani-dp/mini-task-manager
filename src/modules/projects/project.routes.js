import express from "express";

import { authMiddleware } from "../../middleware/auth.middleware.js";

import {
  createProject,
  getProjectsController,
  getProjectByIdController,
  updateProject,
  deleteProject,
} from "./project.controller.js";
import { validationMiddleware } from "../../middleware/validation.middleware.js";
import { createProjectValidator, updateProjectValidator } from "./project.validator.js";

const projectRouter = express.Router();

projectRouter.use(authMiddleware);

projectRouter.post(
  "/",
  createProjectValidator,
  validationMiddleware,
  createProject
);

projectRouter.get("/", getProjectsController);
projectRouter.get("/:id", getProjectByIdController);

projectRouter.patch(
  "/:id",
  updateProjectValidator,
  validationMiddleware,
   updateProject
  );

projectRouter.delete("/:id", deleteProject);

export default projectRouter;