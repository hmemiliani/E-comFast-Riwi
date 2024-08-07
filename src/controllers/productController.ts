import { container } from "tsyringe";
import { Request, Response } from "express";
import ProductService from "../services/productService";

class ProductController {
    static async getAllProducts(req: Request, res: Response): Promise<Response> {
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.getAllProducts();
            return res.status(200).json({
                status: 200,
                data: products
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async getProductById(req: Request, res: Response): Promise<Response> {
        try {
            const productService = container.resolve(ProductService);
            const product = await productService.getProductById(+req.params.id);
            if (!product) {
                return res.status(404).json({
                    status: 404,
                    message: "Product not found"
                });
            }
            return res.status(200).json(product);
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async createProduct(req: Request, res: Response): Promise<Response> {
        try {
            const productService = container.resolve(ProductService);
            const product = await productService.createProduct(req.body);
            return res.status(201).json(product);
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async updateProduct(req: Request, res: Response): Promise<Response> {
        try {
            const productService = container.resolve(ProductService);
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
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async deleteProduct(req: Request, res: Response): Promise<Response> {
        try {
            const productService = container.resolve(ProductService);
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
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
}

export default ProductController;
