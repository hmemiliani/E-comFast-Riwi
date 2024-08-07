"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    static async getAllProducts(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const products = await productService.getAllProducts();
            return res.status(200).json({
                status: 200,
                data: products
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async getProductById(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const product = await productService.getProductById(+req.params.id);
            if (!product) {
                return res.status(404).json({
                    status: 404,
                    message: "Product not found"
                });
            }
            return res.status(200).json(product);
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async createProduct(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const product = await productService.createProduct(req.body);
            return res.status(201).json(product);
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async updateProduct(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const affectedCount = await productService.updateProduct(+req.params.id, req.body);
            if (affectedCount === 0) {
                return res.status(404).json({
                    status: 404,
                    message: "Product not found"
                });
            }
            return res.status(200).json({
                status: 200,
                message: "Product updated successfully"
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
    static async deleteProduct(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const affectedCount = await productService.deleteProduct(+req.params.id);
            if (affectedCount === 0) {
                return res.status(404).json({
                    status: 404,
                    message: "Product not found"
                });
            }
            return res.status(200).json({
                status: 200,
                message: "Product deleted successfully"
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
exports.default = ProductController;
