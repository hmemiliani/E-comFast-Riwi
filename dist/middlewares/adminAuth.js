"use strict";
//verificar el role del usuario y si es admin, permitir el acceso a el endpoint users.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const roleService_1 = __importDefault(require("../services/roleService"));
;
//probando suerte
const AdminAuth = async (req, res, next) => {
    try {
        const roleService = tsyringe_1.container.resolve(roleService_1.default);
        const id = parseInt(req.body.roleId);
        const role = await roleService.getRoleById(id);
        if (role?.name === 'admin') {
            console.log("Autenticado como Administrator");
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
