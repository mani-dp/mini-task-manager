import {
  getAllUsers,
  createUser as createUserService,
} from "./user.service.js";

export const getUsers = async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.json({
            success: true,
            data: users,
        })
    } catch (err) {
        next(err)
    }
};

export const createUser = async(req, res, next) => {
    try {
        const users = await createUserService();
        res.status(201).json({
            success : true,
            data : users,
        })
    } catch (err) {
        next(err);
    }
}