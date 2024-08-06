import { Router } from "express";
import authJWT from "../middlewares/auth";
import { authRouter, userRouter, productRouter, cartRouter, orderRouter, roleRouter } from "./index";
import AdminAuth from "../middlewares/adminAuth";

const router: Router = Router();
router.use("/auth", authRouter)

//Rutas privadas, para entrar requieren token
router.use("/users", AdminAuth, authJWT,userRouter)//apagar /*AdminAuth, authJWT,*/ para crear un usuario
router.use("/products", authJWT, productRouter)
router.use("/carts", authJWT, cartRouter)
router.use("/orders", authJWT, orderRouter)
router.use("/roles", AdminAuth, roleRouter)//ya lo puedo borrar de aqui 

export default router;