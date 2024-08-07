"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cartService_1 = __importDefault(require("../services/cartService"));
const tsyringe_1 = require("tsyringe");
class CartController {
    static async getAllCarts(_, res) {
        try {
            const cartService = tsyringe_1.container.resolve(cartService_1.default);
            const carts = await cartService.getAllCarts();
            return res.status(200).json({
                status: 200,
                data: carts
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async getCartById(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(cartService_1.default);
            const id = parseInt(req.params.id);
            const cart = await cartService.getCartById(id);
            if (!cart) {
                return res.status(404).json({
                    status: 404,
                    message: 'Cart not found'
                });
            }
            return res.status(200).json({
                status: 200,
                data: cart
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async createCart(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(cartService_1.default);
            const cart = req.body;
            const newCart = await cartService.createCart(cart);
            return res.status(201).json({
                status: 201,
                message: 'Cart created successfully',
                data: newCart
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async updateCart(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(cartService_1.default);
            const id = parseInt(req.params.id);
            const cart = req.body;
            const affectedCount = await cartService.updateCart(id, cart);
            if (affectedCount === 0) {
                return res.status(404).json({
                    status: 404,
                    message: 'Cart not found'
                });
            }
            return res.status(200).json({
                status: 200,
                message: 'Cart updated successfully',
                data: cart
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async deleteCart(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(cartService_1.default);
            const id = parseInt(req.params.id);
            const affectedCount = await cartService.deleteCart(id);
            if (affectedCount === 0) {
                return res.status(404).json({
                    status: 404,
                    message: 'Cart not found'
                });
            }
            return res.status(200).json({
                status: 200,
                message: 'Cart deleted successfully'
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
exports.default = CartController;
