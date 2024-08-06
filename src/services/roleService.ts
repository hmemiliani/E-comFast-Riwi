import RoleModel from "../models/roleModel";
import RoleRepository from "../repositories/roleRepository";
import { RoleType } from "../interfaces/role";
import { injectable, inject } from "tsyringe";

@injectable()
export default class RoleService {
    constructor(@inject("RoleRepository") private roleRepository: RoleRepository) {}

    async getAllRoles(): Promise<RoleType[]> {
        return await this.roleRepository.findAll(); // obtener todos los roles
    }

    async getRoleById(id: number): Promise<RoleType | null> {
        return await this.roleRepository.findById(id); // obtener un rol por su id
    }

    async createRole(role: Partial<RoleModel>): Promise<RoleType | null> {
        return await this.roleRepository.create(role); // crear un rol, solo dos, client/admin
    }
}
