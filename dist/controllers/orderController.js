"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderService_1 = __importDefault(require("../services/orderService"));
const tsyringe_1 = require("tsyringe");
class OrderController {
    static async getAllOrders(_, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const orders = await orderService.getAllOrders();
            res.status(200).json({
                status: 200,
                orders: orders
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async getOrderById(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const id = parseInt(req.params.id);
            const order = await orderService.getOrderById(id);
            if (!order) {
                res.status(404).json({
                    status: 404,
                    message: 'Order not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                data: order
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async createOrder(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const order = req.body;
            const newOrder = await orderService.createOrder(order);
            res.status(201).json({
                status: 201,
                message: 'Order created successfully',
                data: newOrder
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async updateOrder(req, res) {
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        const id = parseInt(req.params.id);
        const order = req.body;
        try {
            const [affectedCount] = await orderService.updateOrder(id, order);
            if (affectedCount === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'Order not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'Order updated successfully',
                data: order
            });
        }
        catch (err) {
            res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async deleteOrder(req, res) {
        const orderService = tsyringe_1.container.resolve(orderService_1.default);
        const id = parseInt(req.params.id);
        try {
            const affectedCount = await orderService.deleteOrder(id);
            if (affectedCount === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'Order not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'Order deleted successfully'
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
exports.default = OrderController;
