import { db } from "../../config/prisma.js"

export const createProject = async (data) => {
    return db.orm.public.Project.create({
        data,
    })
};

export const findProjectsByUserId = async (userId) => {
    return db.orm.public.Project.all({
        where: {
            userId,
        },
    });
};

export const findProjectById = async (id) => {
    return db.orm.public.Project.first({
        id,
    })
};

export const updateProject = async (id, data) => {
    return db.orm.public.Project.update({
        where: {
            id,
        }, data
    });
}

export const deleteProject = async (id) => {
    return db.orm.public.Project.delete({
        where: {
            id,
        }
    })
}