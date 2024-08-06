"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRouter = void 0;
const express_1 = require("express");
const roleController_1 = __importDefault(require("../controllers/roleController"));
exports.roleRouter = (0, express_1.Router)();
exports.roleRouter.get("/", roleController_1.default.getAllRoles);
exports.roleRouter.get("/:id", roleController_1.default.getRoleById);
exports.roleRouter.post("/", roleController_1.default.createRole);
