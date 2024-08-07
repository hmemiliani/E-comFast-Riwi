import { OrderModel } from "../models/orderModel";
import OrderRepository from "../repositories/orderRepository";
import { OrderType } from "../interfaces/order";
import { injectable, inject } from "tsyringe";

@injectable()
export default class OrderService {
    constructor(@inject("OrderRepository") private orderRepository: OrderRepository) {}

    async getAllOrders(): Promise<OrderType[]> {
        return await this.orderRepository.findAll(); // obtener todas las órdenes
    }

    async getOrderById(id: number): Promise<OrderType | null> {
        return await this.orderRepository.findById(id); // obtener una orden por su id
    }

    async createOrder(order: Partial<OrderModel>): Promise<OrderType | null> {
        return await this.orderRepository.create(order); // crear una orden
    }

    async updateOrder(id: number, order: Partial<OrderType>): Promise<number> {
        return await this.orderRepository.update(id, order); // actualizar una orden por id
    }

    async deleteOrder(id: number): Promise<number> {
        return await this.orderRepository.delete(id); // eliminar una orden por id
    }

    //el servicio que me faltaba
    async getOrdersByUserId(userId: number): Promise<OrderType[]> {
        return await OrderModel.findAll({ where: { userId } }); // Obtención de todas las ordenes de un usuario
    }

}
