import ProductModel from "../models/productModel";
import ProductRepository from "../repositories/productRepository";
import { ProductType } from "../interfaces/product";
import { injectable, inject } from "tsyringe";

@injectable()
export default class ProductService {
    constructor(@inject("ProductRepository") private productRepository: ProductRepository) {}

    async getAllProducts(): Promise<ProductType[]> {
        return await this.productRepository.findAll(); // obtener todos los productos
    }

    async getProductById(id: number): Promise<ProductType | null> {
        return await this.productRepository.findById(id); // obtener un producto por su id
    }

    async createProduct(product: Partial<ProductModel>): Promise<ProductType | null> {
        return await this.productRepository.create(product); // crear un producto
    }

    async updateProduct(id: number, product: Partial<ProductType>): Promise<number> {
        return await this.productRepository.update(id, product); // actualizar un producto por id
    }

    async deleteProduct(id: number): Promise<number> {
        return await this.productRepository.delete(id); // eliminar un producto por id
    }
}
