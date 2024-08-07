"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const orderController_1 = __importDefault(require("../controllers/orderController"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/", userController_1.default.getAllUsers);
exports.userRouter.get("/:id", userController_1.default.getUserById);
exports.userRouter.put("/:id", userController_1.default.updateUser);
exports.userRouter.post("/", userController_1.default.createUser);
exports.userRouter.delete("/:id", userController_1.default.deleteUser);
// rutas para orders dentro de users
exports.userRouter.get("/:userId/orders", orderController_1.default.getOrdersByUserId);
exports.userRouter.post("/:userId/orders", orderController_1.default.createOrderForUser);
