import {
  createTask as createTaskService,
  getTasksByProject,
  getTaskById,
  updateTask as updateTaskService,
  deleteTask as deleteTaskService,
} from "./task.service.js";

export const createTask = async (req, res, next) => {
  try {
    const task = await createTaskService(
      req.user.userId,
      req.params.projectId,
      req.body
    );

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await getTasksByProject(
      req.user.userId,
      req.params.projectId
    );

    res.json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req, res, next) => {
  try {
    const task = await getTaskById(
      req.user.userId,
      req.params.id
    );

    res.json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await updateTaskService(
      req.user.userId,
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await deleteTaskService(
      req.user.userId,
      req.params.id
    );

    res.json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};