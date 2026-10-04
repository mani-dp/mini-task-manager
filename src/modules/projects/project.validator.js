import { body } from "express-validator";

export const createProjectValidator = [
  body("title")
    .notEmpty()
    .withMessage("Project title is required"),
];

export const updateProjectValidator = [
  body("title")
    .notEmpty()
    .withMessage("Project title is required"),
];