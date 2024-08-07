import OrderService from "../services/orderService";
import { container } from "tsyringe";
import { Request, Response } from "express";
import { OrderType } from "../interfaces/order";

export default class OrderController {

    static async getAllOrders(_: Request, res: Response): Promise<Response> {
        try {
            const orderService: OrderService = container.resolve(OrderService);
            const orders: OrderType[] = await orderService.getAllOrders();
            return res.status(200).json({
                status: 200,
                orders: orders
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async getOrderById(req: Request, res: Response): Promise<Response> {
        try {
            const orderService: OrderService = container.resolve(OrderService);
            const id: number = parseInt(req.params.id);
            const order: OrderType | null = await orderService.getOrderById(id);
            if (!order) {
                return res.status(404).json({
                    status: 404,
                    message: 'Order not found'
                });
            }
            return res.status(200).json({
                status: 200,
                data: order
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async createOrder(req: Request, res: Response): Promise<Response> {
        try {
            const orderService: OrderService = container.resolve(OrderService);
            const order: Partial<OrderType> = req.body;
            const newOrder: OrderType | null = await orderService.createOrder(order);
            return res.status(201).json({
                status: 201,
                message: 'Order created successfully',
                data: newOrder
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async updateOrder(req: Request, res: Response): Promise<Response> {
        try {
            const orderService: OrderService = container.resolve(OrderService);
            const id: number = parseInt(req.params.id);
            const order: Partial<OrderType> = req.body;
            const affectedCount: number = await orderService.updateOrder(id, order);
            if (affectedCount === 0) {
                return res.status(404).json({
                    status: 404,
                    message: 'Order not found'
                });
            }
            const updatedOrder: OrderType | null = await orderService.getOrderById(id);
            return res.status(200).json({
                status: 200,
                message: 'Order updated successfully',
                data: updatedOrder
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async deleteOrder(req: Request, res: Response): Promise<Response> {
        try {
            const orderService: OrderService = container.resolve(OrderService);
            const id: number = parseInt(req.params.id);
            const affectedCount: number = await orderService.deleteOrder(id);
            if (affectedCount === 0) {
                return res.status(404).json({
                    status: 404,
                    message: 'Order not found'
                });
            }
            return res.status(200).json({
                status: 200,
                message: 'Order deleted successfully'
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    //las promesas que faltaban
    
    static async getOrdersByUserId(req: Request, res: Response): Promise<Response> {
        try {
            const orderService: OrderService = container.resolve(OrderService);
            const userId: number = parseInt(req.params.userId);
            const orders: OrderType[] = await orderService.getOrdersByUserId(userId);
            return res.status(200).json({
                status: 200,
                data: orders
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async createOrderForUser(req: Request, res: Response): Promise<Response> {
        try {
            const orderService: OrderService = container.resolve(OrderService);
            const userId: number = parseInt(req.params.userId);
            const order: Partial<OrderType> = { ...req.body, userId };
            const newOrder: OrderType | null = await orderService.createOrder(order);
            return res.status(201).json({
                status: 201,
                message: 'Order created successfully',
                data: newOrder
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

}
