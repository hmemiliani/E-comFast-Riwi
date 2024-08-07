import { injectable } from "tsyringe";
import UserModel from "../models/userModel";
import { OrderModel } from "../models/orderModel";

@injectable()
export default class UserRepository {
    async findAll(): Promise<UserModel[]> {
        return await UserModel.findAll(); // Obtención de todos los usuarios
    }

    async findById(id: number): Promise<UserModel | null> {
        return await UserModel.findByPk(id); // Obtención de un usuario por su id
    }

    async create(user: Partial<UserModel>): Promise<UserModel> {
        return await UserModel.create(user as UserModel); // Creación de un usuario
    }

    async update(id: number, user: Partial<UserModel>): Promise<number> {
        const [affectedCount] = await UserModel.update(user, { where: { id } }); // Actualización de un usuario por su id
        return affectedCount;
    }

    async delete(id: number): Promise<number> {
        return await UserModel.destroy({ where: { id } }); // Eliminación de un usuario por su id
    }

    async findByEmail(email: string): Promise<UserModel | null> {
        return await UserModel.findOne({ where: { email } }); // Obtención de un usuario por su email
    }

    async findOrdersWithUser(id: number): Promise<UserModel | null> {
        return await UserModel.findByPk(id, { include: [OrderModel] }); // Obtención de todas las órdenes de un usuario
    }
}
