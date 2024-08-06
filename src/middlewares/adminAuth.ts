//verificar el role del usuario y si es admin, permitir el acceso a el endpoint users.

import { Request, Response, NextFunction } from "express";
import UserService from "../services/userService";
import { UserType } from "../interfaces/user";
import { container } from "tsyringe";
import { RoleType } from "../interfaces/role";
import RoleService from "../services/roleService";

interface Customuser extends Request {
    user?: any;
};
//probando suerte

const AdminAuth =async (req: Request, res: Response, next: NextFunction) => {
    try {

        const roleService: RoleService = container.resolve(RoleService);     
        const id: number = parseInt(req.body.roleId);      
        const role: RoleType | null  = await roleService.getRoleById(id);
        
        if(role?.name === 'admin'){
            console.log("Autenticado como Administrator");
            next();
        }else{
            res.status(401).json({
                status: 401,
                message: 'Forbidden'
            });
        }
    } catch (error: any) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}


export default AdminAuth;