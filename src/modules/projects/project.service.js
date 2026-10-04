import { AppError } from "../../utils/AppError.js";
import {
    createProject as createProjectRepository,
    findProjectsByUserId,
    findProjectById,
    updateProject as updateProjectRepository,
    deleteProject as deleteProjectRepository,
} from "./project.repository.js";

export const createProject = async (userId, data) => {
    if (!data.title) {
        throw new AppError("Project title is required", 400);
    }

    return createProjectRepository({
        title: data.title,
        userId,
    });
};

export const getProjects = async (userId) => {
    return findProjectsByUserId(userId);
};

export const getProjectById = async (userId, projectId) => {
    const project = await findProjectById(projectId);
    
    if (!project) {
        throw new AppError("Project not found", 404);
    }
    
    if (project.userId !== userId) {
        throw new AppError("Access denied", 403);
    }

    return project;
};

export const updateProject = async (userId, projectId, data) => {
    const project = await findProjectById(projectId);

    if (!project) {
        throw new Error("Project not found");
    }

    if (project.userId !== userId) {
        throw new AppError("Access denied", 403);
    }

    if (!data.title) {
        throw new AppError("Project title is required", 400);
    }

    return updateProjectRepository(projectId, {
        title: data.title,
    });
};

export const deleteProject = async (userId, projectId) => {
    const project = await findProjectById(projectId);

    if (!project) {
        throw new AppError("Project not found", 404);
    }

    if (project.userId !== userId) {
        throw new AppError("Access denied", 403);
    }

    return deleteProjectRepository(projectId);
};