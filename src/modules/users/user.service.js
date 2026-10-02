import {
  findAllUsers,
  createUser as createUserRepository,
} from "./user.repository.js";

import bcrypt from "bcrypt";

export const getAllUsers = async () => {
  return findAllUsers();
};

export const createUser = async (data) => {
  if (!data.email || !data.password) {
    throw new Error("Email and password are required");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return createUserRepository({
    email: data.email,
    password: data.password,
  });
};