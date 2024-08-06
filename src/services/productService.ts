import ProductRepository from "../repositories/productRepository";
import { injectable, inject } from "tsyringe";
import ProductModel from "../models/productModel";
import { ProductType } from "../interfaces/product";

@injectable()
export default class ProductService {
    constructor(@inject('ProductRepository') private productRepository: ProductRepository) {}

    async getAllProducts(): Promise<ProductType[]> {
        return await this.productRepository.findAll(); // obtener todos los productos
    }

    async getProductById(id: number): Promise<ProductType | null> {
        return await this.productRepository.findById(id); // obtener producto por su id
    }

    async createProduct(product: Partial<ProductModel>): Promise<ProductType | null> {
        return await this.productRepository.create(product); // Crear un producto
    }

    async updateProduct(id: number, product: Partial<ProductType>): Promise<[affectedCount: number]> {
        return await this.productRepository.update(id, product);// Actualizar un producto por id
    }

    async deleteProduct(id: number): Promise<number> {
        return await this.productRepository.delete(id);// Eliminar un producto por id
    }

}