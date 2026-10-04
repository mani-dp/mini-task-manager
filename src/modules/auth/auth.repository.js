import { db } from "../../config/prisma.js";

export const findUserByEmail = async (email) => {
  return db.orm.public.User.first({
    email,
  });
};