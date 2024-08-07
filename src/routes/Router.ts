import { Router } from "express";
import authJWT from "../middlewares/auth";
import AdminAuth from "../middlewares/adminAuth";
import { authRouter, userRouter, productRouter, cartRouter, orderRouter, roleRouter } from "./index";

const router: Router = Router();

router.use("/auth", authRouter);

// Rutas privadas, para entrar requieren token
router.use("/users", authJWT, AdminAuth, userRouter);//apagar /*authJWT, AdminAuth,*/ para crear el primer user
router.use("/products", authJWT, productRouter);
router.use("/carts", authJWT, cartRouter);
router.use("/orders", authJWT, orderRouter);
router.use("/roles", authJWT, AdminAuth, roleRouter);//solo el admin logeado podra crear o modificar roles

export default router;
