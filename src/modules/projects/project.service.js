import {
    createProject as createProjectRepository,
    findProjectsByUserId,
    findProjectById,
    updateProject as updateProjectRepository,
    deleteProject as deleteProjectRepository,
} from "./project.repository.js";

export const createProject = async (userId, data) => {
    if (!data.title) {
        throw new Error("Project title is required");
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
        throw new Error("Project not found");
    }

    if (project.userId !== userId) {
        throw new Error("Access denied");
    }

    return project;
};

export const updateProject = async (userId, projectId, data) => {
    const project = await findProjectById(projectId);

    if (!project) {
        throw new Error("Project not found");
    }

    if (project.userId !== userId) {
        throw new Error("Access denied");
    }

    if (!data.title) {
        throw new Error("Project title is required");
    }

    return updateProjectRepository(projectId, {
        title: data.title,
    });
};

export const deleteProject = async (userId, projectId) => {
    const project = await findProjectById(projectId);

    if (!project) {
        throw new Error("Project not found");
    }

    if (project.userId !== userId) {
        throw new Error("Access denied");
    }

    return deleteProjectRepository(projectId);
};