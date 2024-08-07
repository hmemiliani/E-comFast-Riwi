"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
const tsyringe_1 = require("tsyringe");
class UserController {
    static async getAllUsers(_, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const users = await userService.getAllUsers();
            return res.status(200).json({
                status: 200,
                data: users
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async getUserById(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const id = parseInt(req.params.id);
            const user = await userService.getUserById(id);
            if (!user) {
                return res.status(404).json({
                    status: 404,
                    message: 'User not found'
                });
            }
            user.password = '********';
            return res.status(200).json({
                status: 200,
                data: user
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async createUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const user = req.body;
            const createdUser = await userService.createUser(user);
            return res.status(201).json({
                status: 201,
                message: 'User created successfully',
                data: createdUser
            });
        }
        catch (err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        }
    }
    static async updateUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const id = parseInt(req.params.id);
            const user = req.body;
            const affectedCount = await userService.updateUser(id, user);
            if (affectedCount === 0) {
                return res.status(404).json({
                    status: 404,
                    message: 'User not found'
                });
            }
            const updatedUser = await userService.getUserById(id);
            return res.status(200).json({
                status: 200,
                message: 'User updated successfully',
                data: updatedUser
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async deleteUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const id = parseInt(req.params.id);
            const affectedCount = await userService.deleteUser(id);
            if (affectedCount === 0) {
                return res.status(404).json({
                    status: 404,
                    message: 'User not found'
                });
            }
            return res.status(200).json({
                status: 200,
                message: 'User deleted successfully'
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
}
exports.default = UserController;
