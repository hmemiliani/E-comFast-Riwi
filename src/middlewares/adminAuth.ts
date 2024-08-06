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

const AdminAuth =async (req: Customuser, res: Response, next: NextFunction) => {
    try {
        const userService: UserService = container.resolve(UserService);
        const id: number = parseInt(req.params.id);
        const user: UserType | null = await userService.getUserById(id);
        //const role: RoleType | null = await RoleService.getRoleById(user?.roleId);
        if(user?.roleId === 1){
            req.user = user;
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