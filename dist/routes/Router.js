"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../middlewares/auth"));
const index_1 = require("./index");
const router = (0, express_1.Router)();
router.use("/auth", index_1.authRouter);
router.use("/users", /*AdminAuth, authJWT,*/ index_1.userRouter);
router.use("/products", auth_1.default, index_1.productRouter);
router.use("/carts", auth_1.default, index_1.cartRouter);
router.use("/orders", index_1.orderRouter);
router.use("/roles", index_1.roleRouter);
exports.default = router;
