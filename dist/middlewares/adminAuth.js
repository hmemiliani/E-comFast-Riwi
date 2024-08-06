"use strict";
//verificar el role del usuario y si es admin, permitir el acceso a el endpoint users.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
const tsyringe_1 = require("tsyringe");
;
//probando suerte
const AdminAuth = async (req, res, next) => {
    try {
        const userService = tsyringe_1.container.resolve(userService_1.default);
        const id = parseInt(req.params.id);
        const user = await userService.getUserById(id);
        //const role: RoleType | null = await RoleService.getRoleById(user?.roleId);
        if (user?.roleId === 1) {
            req.user = user;
            next();
        }
        else {
            res.status(401).json({
                status: 401,
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
