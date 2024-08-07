import CartService from "../services/cartService";
import { container } from "tsyringe";
import { Request, Response } from "express";
import { cartType } from "../interfaces/cart";

export default class CartController {

    static async getAllCarts(_: Request, res: Response): Promise<Response> {
        try {
            const cartService: CartService = container.resolve(CartService);
            const carts: cartType[] = await cartService.getAllCarts();
            return res.status(200).json({
                status: 200,
                data: carts
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async getCartById(req: Request, res: Response): Promise<Response> {
        try {
            const cartService: CartService = container.resolve(CartService);
            const id: number = parseInt(req.params.id);
            const cart: cartType | null = await cartService.getCartById(id);
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
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async createCart(req: Request, res: Response): Promise<Response> {
        try {
            const cartService: CartService = container.resolve(CartService);
            const cart: Partial<cartType> = req.body;
            const newCart: cartType | null = await cartService.createCart(cart);
            return res.status(201).json({
                status: 201,
                message: 'Cart created successfully',
                data: newCart
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async updateCart(req: Request, res: Response): Promise<Response> {
        try {
            const cartService: CartService = container.resolve(CartService);
            const id: number = parseInt(req.params.id);
            const cart: Partial<cartType> = req.body;
            const affectedCount: number = await cartService.updateCart(id, cart);
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
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async deleteCart(req: Request, res: Response): Promise<Response> {
        try {
            const cartService: CartService = container.resolve(CartService);
            const id: number = parseInt(req.params.id);
            const affectedCount: number = await cartService.deleteCart(id);
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
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }
}
