import { injectable } from "tsyringe";
import CartModel from "../models/cartModel";

@injectable()
export default class CartRepository {
    async findAll(): Promise<CartModel[]> {
        return await CartModel.findAll(); //Obtención de todos los carritos
    }

    async findById(id: number): Promise<CartModel | null> {
        return await CartModel.findByPk(id); //Obtención de un carrito por su id
    }

    async create(cart: Partial<CartModel>): Promise<CartModel> {
        return await CartModel.create(cart as CartModel); // Creación de carrito
    }

    async update(id: number, cart: Partial<CartModel>): Promise<[number]> {
        return await CartModel.update(cart, { where: { id } }); // Actualización de carrito
    }

    async delete(id: number): Promise<number> {
        return await CartModel.destroy({ where: { id } }); // Eliminación de carrito
    }

}