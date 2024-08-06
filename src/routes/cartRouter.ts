import { Router } from "express";
import CartController from "../controllers/cartController";

export const cartRouter = Router();

cartRouter.get("/", CartController.getAllCarts);
cartRouter.get("/:id", CartController.getCartById);
cartRouter.post("/", CartController.createCart);
cartRouter.put("/:id", CartController.updateCart);
cartRouter.delete("/:id", CartController.deleteCart);

