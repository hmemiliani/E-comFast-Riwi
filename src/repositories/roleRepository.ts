import { injectable } from "tsyringe";
import RoleModel from "../models/roleModel";

@injectable()
export default class RoleRepository {
    async findAll(): Promise<RoleModel[]> {
        return await RoleModel.findAll(); //Obtención de todos los roles
    }

    async findById(id: number): Promise<RoleModel | null> {
        return await RoleModel.findByPk(id); //Obtención de un rol por su id
    }

    async create(role: Partial<RoleModel>): Promise<RoleModel> {
        return await RoleModel.create(role as RoleModel); // Creación de un rol para quemarlos el inicio
    }
};