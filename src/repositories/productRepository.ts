import { injectable } from "tsyringe";
import ProductModel from "../models/productModel";

@injectable()
export default class ProductRepository {
    async findAll(): Promise<ProductModel[]> {
        return await ProductModel.findAll(); // Obtención de todos los productos
    }

    async findById(id: number): Promise<ProductModel | null> {
        return await ProductModel.findByPk(id); // Obtención de un producto por su id
    }

    async create(product: Partial<ProductModel>): Promise<ProductModel> {
        return await ProductModel.create(product as ProductModel); // Creación de un producto
    }

    async update(id: number, product: Partial<ProductModel>): Promise<number> {
        const [affectedCount] = await ProductModel.update(product, { where: { id } }); // Actualización de un producto por su id
        return affectedCount;
    }

    async delete(id: number): Promise<number> {
        return await ProductModel.destroy({ where: { id } }); // Eliminación de un producto por su id
    }
}
