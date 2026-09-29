import {
  findAllUsers,
  createUser as createUserRepository,
} from "./user.repository.js";

export const getAllUsers = async () => {
  return findAllUsers();
};

export const createUser = async (data) => {
  if (!data.email || !data.password) {
    throw new Error("Email and password are required");
  }

  return createUserRepository({
    email: data.email,
    password: data.password,
  });
};