import express from "express";
import userRouter from "./modules/users/user.routes.js";

const app = express();

app.use(express.json());

app.use('/api/users', userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Mini Task Manager API"
  });
});
export default app;