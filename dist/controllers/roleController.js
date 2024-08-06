"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roleService_1 = __importDefault(require("../services/roleService"));
const tsyringe_1 = require("tsyringe");
class RoleController {
    static async getAllRoles(_, res) {
        try {
            const roleService = tsyringe_1.container.resolve(roleService_1.default);
            const roles = await roleService.getAllRoles();
            res.status(200).json({
                status: 200,
                roles: roles
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async getRoleById(req, res) {
        try {
            const roleService = tsyringe_1.container.resolve(roleService_1.default);
            const id = parseInt(req.params.id);
            const role = await roleService.getRoleById(id);
            if (!role) {
                res.status(404).json({
                    status: 404,
                    message: 'Role not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                data: role
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async createRole(req, res) {
        try {
            const roleService = tsyringe_1.container.resolve(roleService_1.default);
            const role = req.body;
            const newRole = await roleService.createRole(role);
            res.status(201).json({
                status: 201,
                message: 'Role created successfully',
                data: newRole
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
}
exports.default = RoleController;