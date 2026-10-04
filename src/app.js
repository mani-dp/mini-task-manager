import express from "express";
import userRouter from "./modules/users/user.routes.js";
import authRouter from "./modules/auth/auth.routes.js";
import projectRouter from "./modules/projects/project.routes.js";
import taskRouter from "./modules/task/task.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.get("/test-api", (rrq ,res) => {
  res.status(200).json({
    success : true,
    message : "Mini Task Manager API",
  })
})

app.use('/api/users', userRouter);
app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);
app.use("/api/tasks", taskRouter);

app.use(errorMiddleware);

export default app;