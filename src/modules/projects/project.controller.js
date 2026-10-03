import {
    createProject as createProjectService,
    getProjects,
    getProjectById,
    updateProject as updateProjectService,
    deleteProject as deleteProjectService,
} from "./project.service.js";

export const createProject = async (req, res, next) => {
    try {
        const project = await createProjectService(
            req.user.userId,
            req.body
        );

        res.status(201).json({
            success: true,
            data: project,
        });
    } catch (error) {
        next(error);
    }
};

export const getProjectsController = async (req, res, next) => {
    try {
        const projects = await getProjects(req.user.userId);

        res.json({
            success: true,
            data: projects,
        });
    } catch (error) {
        next(error);
    }
};

export const getProjectByIdController = async (req, res, next) => {
    try {
        const project = await getProjectById(
            req.user.userId,
            req.params.id
        );

        res.json({
            success: true,
            data: project,
        });
    } catch (error) {
        next(error);
    }
};

export const updateProject = async (req, res, next) => {
    try {
        const project = await updateProjectService(
            req.user.userId,
            req.params.id,
            req.body
        );

        res.json({
            success: true,
            data: project,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteProject = async (req, res, next) => {
    try {
        const project = await deleteProjectService(
            req.user.userId,
            req.params.id
        );

        res.json({
            success: true,
            data: project,
        });
    } catch (error) {
        next(error);
    }
};