import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwt.js";
import { findUserByEmail } from "./auth.repository.js";
import { AppError } from "../../utils/AppError.js";

export const login = async (email, password) => {
  if (!email || !password) {
    throw new AppError("Email and password are required", 400);
  }

  const user = await findUserByEmail(email);

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = generateToken({
    userId: user.id,
    email: user.email,
  });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
    },
  };
};