import OrderRepository from "../repositories/orderRepository";
import { OrderType } from "../interfaces/order";
import { OrderModel } from "../models/orderModel";
import { injectable, inject } from "tsyringe";

@injectable()
export default class OrderService {
    constructor(@inject("OrderRepository") private orderRepository: OrderRepository) {}

    async getAllOrders(): Promise<OrderType[]> {
        return await this.orderRepository.findAll(); // obtener todos los pedidos
    }

    async getOrderById(id: number): Promise<OrderType | null> {
        return await this.orderRepository.findById(id); // obtener un pedido por su id
    }

    async createOrder(order: Partial<OrderModel>): Promise<OrderType | null> {
        return await this.orderRepository.create(order); // crear un pedido
    }

    async updateOrder(id: number, order: Partial<OrderType>): Promise<[affectedCount: number]> {
        return await this.orderRepository.update(id, order); // actualizar un pedido por id
    }

    async deleteOrder(id: number): Promise<number> {
        return await this.orderRepository.delete(id); // eliminar un pedido por id
    }
}