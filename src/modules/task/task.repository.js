import { db } from "../../config/prisma.js";

export const createTask = async (data) => {
  return db.orm.public.Task.create({
    data,
  });
};

export const findTasksByProjectId = async (projectId) => {
  return db.orm.public.Task.all({
    where: {
      projectId,
    },
  });
};

export const findTaskById = async (id) => {
  return db.orm.public.Task.first({
    id,
  });
};

export const updateTask = async (id, data) => {
  return db.orm.public.Task.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteTask = async (id) => {
  return db.orm.public.Task.delete({
    where: {
      id,
    },
  });
};