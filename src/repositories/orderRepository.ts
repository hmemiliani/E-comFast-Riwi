import { injectable } from "tsyringe";
import { OrderModel } from "../models/orderModel";

@injectable()
export default class OrderRepository {
    async findAll(): Promise<OrderModel[]> {
        return await OrderModel.findAll(); //Obtención de órdenes
    }

    async findById(id: number): Promise<OrderModel | null> {
        return await OrderModel.findByPk(id); //Obtención de órdenes por su id
    }

    async create(order: Partial<OrderModel>): Promise<OrderModel> {
        return await OrderModel.create(order as OrderModel); // Creación de órdenes
    }

    async update(id: number, order: Partial<OrderModel>): Promise<[number]> {
        return await OrderModel.update(order, { where: { id } }); // Actualizacion de orden por id
    }

    async delete(id: number): Promise<number> {
        return await OrderModel.destroy({ where: { id } }); // Eliminación de orden por id
    }
}