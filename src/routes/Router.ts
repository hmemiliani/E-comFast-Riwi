import { Router } from "express";
import authJWT from "../middlewares/auth";
import { authRouter, userRouter, productRouter, cartRouter, orderRouter, roleRouter } from "./index";
import AdminAuth from "../middlewares/adminAuth";

const router: Router = Router();
router.use("/auth", authRouter)
router.use("/users", /*AdminAuth, authJWT,*/ userRouter)
router.use("/products", authJWT, productRouter)
router.use("/carts", authJWT, cartRouter)
router.use("/orders", orderRouter)
router.use("/roles", roleRouter)

export default router;