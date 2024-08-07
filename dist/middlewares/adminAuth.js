"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const roleService_1 = __importDefault(require("../services/roleService"));
const userService_1 = __importDefault(require("../services/userService"));
const AdminAuth = async (req, res, next) => {
    try {
        const roleService = tsyringe_1.container.resolve(roleService_1.default);
        const userService = tsyringe_1.container.resolve(userService_1.default);
        // Obtener el email del usuario del token decodificado
        const userEmail = req.user?.username;
        if (!userEmail) {
            res.status(401).json({
                status: 401,
                message: 'User email is required'
            });
            return;
        }
        const user = await userService.getUserByEmail(userEmail);
        if (!user) {
            res.status(404).json({
                status: 404,
                message: 'User not found'
            });
            return;
        }
        if (user.roleId === undefined) {
            res.status(400).json({
                status: 400,
                message: 'User role ID is undefined'
            });
            return;
        }
        const role = await roleService.getRoleById(user.roleId);
        if (role?.name === 'admin') {
            console.log("Authenticated as Administrator");
            next();
        }
        else {
            res.status(403).json({
                status: 403,
                message: 'Forbidden'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};
exports.default = AdminAuth;
