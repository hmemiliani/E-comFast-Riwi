import { injectable } from "tsyringe";
import ProductModel from "../models/productModel";
import { ProductType } from "../interfaces/product";

@injectable()
export default class ProductRepository {
    async findAll(): Promise<ProductType[]> { 
        return await ProductModel.findAll();//Obtención de todos los productos
    }

    async findById(id: number): Promise<ProductType | null> {
        return await ProductModel.findByPk(id);//Obtención de un producto por su id
    }

    async create(product: Partial<ProductType>): Promise<ProductType> {
        return await ProductModel.create(product as ProductModel);// Creación de producto
    }

    async update(id: number, product: Partial<ProductType>): Promise<[number]> {
        return await ProductModel.update(product, { where: { id } });// Actualización de producto
    }

    async delete(id: number): Promise<number> {
        return await ProductModel.destroy({ where: { id } }); // Eliminación de producto
    }


}