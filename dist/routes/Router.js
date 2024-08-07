"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../middlewares/auth"));
const adminAuth_1 = __importDefault(require("../middlewares/adminAuth"));
const index_1 = require("./index");
const router = (0, express_1.Router)();
router.use("/auth", index_1.authRouter);
// Rutas privadas, para entrar requieren token
router.use("/users", auth_1.default, adminAuth_1.default, index_1.userRouter); //apagar /*authJWT, AdminAuth,*/ para crear el primer user
router.use("/products", auth_1.default, index_1.productRouter);
router.use("/carts", auth_1.default, index_1.cartRouter);
router.use("/orders", auth_1.default, index_1.orderRouter);
router.use("/roles", auth_1.default, adminAuth_1.default, index_1.roleRouter); //organice el orden y ahora solo el admin logeado podra crear o modificar roles
exports.default = router;
