import {
  createTask as createTaskRepository,
  findTasksByProjectId,
  findTaskById,
  updateTask as updateTaskRepository,
  deleteTask as deleteTaskRepository,
} from "./task.repository.js";

import { findProjectById } from "../projects/project.repository.js";
import { AppError } from "../../utils/AppError.js";

export const createTask = async (userId, projectId, data) => {
  const project = await findProjectById(projectId);

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  if (project.userId !== userId) {
    throw new AppError("Access denied", 403);
  }

  if (!data.title) {
    throw new AppError("Task title is required", 400);
  }

  return createTaskRepository({
    title: data.title,
    description: data.description || null,
    projectId,
  });
};

export const getTasksByProject = async (userId, projectId) => {
  const project = await findProjectById(projectId);

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  if (project.userId !== userId) {
    throw new AppError("Access denied", 403);
  }

  return findTasksByProjectId(projectId);
};

export const getTaskById = async (userId, taskId) => {
  const task = await findTaskById(taskId);

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  const project = await findProjectById(task.projectId);

  if (!project || project.userId !== userId) {
    throw new AppError("Access denied", 403);
  }

  return task;
};

export const updateTask = async (userId, taskId, data) => {
  const task = await findTaskById(taskId);

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  const project = await findProjectById(task.projectId);

  if (!project || project.userId !== userId) {
    throw new AppError("Access denied", 403);
  }

  const updateData = {};

  if (data.title !== undefined) {
    updateData.title = data.title;
  }

  if (data.description !== undefined) {
    updateData.description = data.description;
  }

  if (data.completed !== undefined) {
    updateData.completed = data.completed;
  }

  return updateTaskRepository(taskId, updateData);
};

export const deleteTask = async (userId, taskId) => {
  const task = await findTaskById(taskId);

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  const project = await findProjectById(task.projectId);

  if (!project || project.userId !== userId) {
    throw new AppError("Access denied", 403);
  }

  return deleteTaskRepository(taskId);
};