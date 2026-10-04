import {
  createTask as createTaskRepository,
  findTasksByProjectId,
  findTaskById,
  updateTask as updateTaskRepository,
  deleteTask as deleteTaskRepository,
} from "./task.repository.js";

import { findProjectById } from "../projects/project.repository.js";

export const createTask = async (userId, projectId, data) => {
  const project = await findProjectById(projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  if (project.userId !== userId) {
    throw new Error("Access denied");
  }

  if (!data.title) {
    throw new Error("Task title is required");
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
    throw new Error("Project not found");
  }

  if (project.userId !== userId) {
    throw new Error("Access denied");
  }

  return findTasksByProjectId(projectId);
};

export const getTaskById = async (userId, taskId) => {
  const task = await findTaskById(taskId);

  if (!task) {
    throw new Error("Task not found");
  }

  const project = await findProjectById(task.projectId);

  if (!project || project.userId !== userId) {
    throw new Error("Access denied");
  }

  return task;
};

export const updateTask = async (userId, taskId, data) => {
  const task = await findTaskById(taskId);

  if (!task) {
    throw new Error("Task not found");
  }

  const project = await findProjectById(task.projectId);

  if (!project || project.userId !== userId) {
    throw new Error("Access denied");
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
    throw new Error("Task not found");
  }

  const project = await findProjectById(task.projectId);

  if (!project || project.userId !== userId) {
    throw new Error("Access denied");
  }

  return deleteTaskRepository(taskId);
};