"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = require("express");
const cartController_1 = __importDefault(require("../controllers/cartController"));
exports.cartRouter = (0, express_1.Router)();
exports.cartRouter.get("/", cartController_1.default.getAllCarts);
exports.cartRouter.get("/:id", cartController_1.default.getCartById);
exports.cartRouter.post("/", cartController_1.default.createCart);
exports.cartRouter.put("/:id", cartController_1.default.updateCart);
exports.cartRouter.delete("/:id", cartController_1.default.deleteCart);
