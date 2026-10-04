import { body } from "express-validator";

export const createTaskValidator = [
  body("title")
    .notEmpty()
    .withMessage("Task title is required"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
];

export const updateTaskValidator = [
  body("title")
    .optional()
    .notEmpty()
    .withMessage("Task title cannot be empty"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be a boolean"),
];