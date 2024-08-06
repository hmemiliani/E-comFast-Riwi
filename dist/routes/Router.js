"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../middlewares/auth"));
const index_1 = require("./index");
const adminAuth_1 = __importDefault(require("../middlewares/adminAuth"));
const router = (0, express_1.Router)();
router.use("/auth", index_1.authRouter);
router.use("/users", adminAuth_1.default, auth_1.default, index_1.userRouter); //apagar AdminAuth, authJWT, para crear un usuario
router.use("/products", auth_1.default, index_1.productRouter);
router.use("/carts", auth_1.default, index_1.cartRouter);
router.use("/orders", auth_1.default, index_1.orderRouter);
router.use("/roles", adminAuth_1.default, index_1.roleRouter); //ya lo puedo borrar de aqui 
exports.default = router;
