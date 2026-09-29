import { db } from "../../config/prisma.js"

export const findAllUsers = async () => {
    return db.orm.public.User.all();
}

export const createUser = async (data) => {
    return db.orm.public.User.create({
        data,
    });
};