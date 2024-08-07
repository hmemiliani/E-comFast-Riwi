import RoleService from "../services/roleService";
import { container } from "tsyringe";
import { Request, Response } from "express";
import { RoleType } from "../interfaces/role";

export default class RoleController {

    static async getAllRoles(_: Request, res: Response): Promise<Response> {
        try {
            const roleService: RoleService = container.resolve(RoleService);
            const roles: RoleType[] = await roleService.getAllRoles();
            return res.status(200).json({
                status: 200,
                data: roles
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async getRoleById(req: Request, res: Response): Promise<Response> {
        try {
            const roleService: RoleService = container.resolve(RoleService);
            const id: number = parseInt(req.params.id);
            const role: RoleType | null = await roleService.getRoleById(id);
            if (!role) {
                return res.status(404).json({
                    status: 404,
                    message: 'Role not found'
                });
            }
            return res.status(200).json({
                status: 200,
                data: role
            });
        } catch (err: any) {
            return res.status(500).json({
                status: 500,
                message: err.message
            });
        }
    }

    static async createRole(req: Request, res: Response): Promise<Response> {
        try {
            const roleService: RoleService = container.resolve(RoleService);
            const role: RoleType = req.body;
            const newRole: RoleType | null = await roleService.createRole(role);
            return res.status(201).json({
                status: 201,
                message: 'Role created successfully',
                data: newRole
            });
        } catch (err: any) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        }
    }
}
