import { Router } from "express";
import UserController from "../controllers/userController";
import OrderController from "../controllers/orderController";

export const userRouter = Router();

userRouter.get("/", UserController.getAllUsers);
userRouter.get("/:id", UserController.getUserById);
userRouter.put("/:id", UserController.updateUser);
userRouter.post("/", UserController.createUser);
userRouter.delete("/:id", UserController.deleteUser);

// rutas para orders dentro de users
userRouter.get("/:userId/orders", OrderController.getOrdersByUserId);
userRouter.post("/:userId/orders", OrderController.createOrderForUser);
