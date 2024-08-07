import { injectable } from "tsyringe";
import { OrderModel } from "../models/orderModel";

@injectable()
export default class OrderRepository {
    async findAll(): Promise<OrderModel[]> {
        return await OrderModel.findAll(); // Obtención de todas las órdenes
    }

    async findById(id: number): Promise<OrderModel | null> {
        return await OrderModel.findByPk(id); // Obtención de una orden por su id
    }

    async create(order: Partial<OrderModel>): Promise<OrderModel> {
        return await OrderModel.create(order as OrderModel); // Creación de una orden
    }

    async update(id: number, order: Partial<OrderModel>): Promise<number> {
        const [affectedCount] = await OrderModel.update(order, { where: { id } }); // Actualización de una orden por su id
        return affectedCount;
    }

    async delete(id: number): Promise<number> {
        return await OrderModel.destroy({ where: { id } }); // Eliminación de una orden por su id
    }
}
