import {
  findAllUsers,
  createUser as createUserRepository,
} from "./user.repository.js";

import bcrypt from "bcrypt";

export const getAllUsers = async () => {
    const users = await findAllUsers;

    return users.map(({password, ...users}) => users)
};

export const createUser = async (data) => {
  if (!data.email || !data.password) {
    throw new AppError("Email and password are required", 400);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
    
  const user = await createUserRepository({
    email : data.email,
    password : hashedPassword,
  }) 

  const {password , ...userWithoutPassword} = user;

  return userWithoutPassword;
  
};