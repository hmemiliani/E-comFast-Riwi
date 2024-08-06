import { injectable } from "tsyringe";
import UserModel from "../models/userModel";
import { OrderModel } from "../models/orderModel";


@injectable()
export default class UserRepository {
        async findAll(){
                return await UserModel.findAll(); // Obtención de todos los usuarios
        }

        async findById(id: number){
                return await UserModel.findByPk(id); // Obtención de un usuario por su id
        }

        async create(user: Partial<UserModel>): Promise<UserModel>{
            return await UserModel.create(user as UserModel); // Creacion de un usuario
        }

        async update(id: number, user: Partial<UserModel>){
            return await UserModel.update(user, {where: {id}}); // Actualizar un usuario
        }

        async delete(id: number){
            return await UserModel.destroy({where: {id}}); // Eliminar un usuario
        }

        async findByEmail(email: string){
            return await UserModel.findOne({where: {email}}); // Obtención de un usuario por su email
        }

        async findOrdersWithUser(id: number){
            return await UserModel.findByPk(id, {include: [OrderModel]}); // Obtención de todas las ordenes de un usuario
        }

}