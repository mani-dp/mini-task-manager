import express from "express";
import userRouter from "./modules/users/user.routes.js";
import authRouter from "./modules/auth/auth.routes.js";
import { db } from "./config/prisma.js";
import projectRouter from "./modules/projects/project.routes.js";

const app = express();

app.use(express.json());

app.use('/api/users', userRouter);
app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter)

app.get("/", (req, res) => {
  res.json({
    message: "Mini Task Manager API"
  });
});


export default app;