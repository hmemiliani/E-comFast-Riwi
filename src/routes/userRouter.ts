import { Router } from "express";
import UserController from "../controllers/userController";
import { roleRouter } from "./roleRouter";

export const userRouter = Router();

userRouter.get("/", UserController.getAllUsers);
userRouter.get("/:id", UserController.getUserById);
userRouter.put("/:id", UserController.updateUser);
userRouter.post("/", UserController.createUser);
userRouter.delete("/:id", UserController.deleteUser);

