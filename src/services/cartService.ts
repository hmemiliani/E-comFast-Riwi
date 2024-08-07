import CartModel from "../models/cartModel";
import CartRepository from "../repositories/cartRepository";
import { cartType } from "../interfaces/cart";
import { injectable, inject } from "tsyringe";

@injectable()
export default class CartService {
    constructor(@inject("CartRepository") private cartRepository: CartRepository) {}

    async getAllCarts(): Promise<cartType[]> {
        return await this.cartRepository.findAll(); // obtener todos los carritos
    }

    async getCartById(id: number): Promise<cartType | null> {
        return await this.cartRepository.findById(id); // obtener un carrito por su id
    }

    async createCart(cart: Partial<CartModel>): Promise<cartType | null> {
        return await this.cartRepository.create(cart); // crear un carrito
    }

    async updateCart(id: number, cart: Partial<cartType>): Promise<number> {
        return await this.cartRepository.update(id, cart); // actualizar un carrito por id
    }

    async deleteCart(id: number): Promise<number> {
        return await this.cartRepository.delete(id); // eliminar un carrito por id
    }
}
