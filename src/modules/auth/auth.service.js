import bcrypt from "bcrypt";
import { db } from "../../config/prisma.js";
import { generateToken } from "../../utils/jwt.js";
import { AppError } from "../../utils/AppError.js";

export const login = async (email, password) => {
  const user = await db.orm.public.User.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

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