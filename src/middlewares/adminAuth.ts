import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import RoleService from "../services/roleService";
import UserService from "../services/userService";

interface CustomRequest extends Request {
    user?: any;
}

const AdminAuth = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const roleService = container.resolve(RoleService);
        const userService = container.resolve(UserService);

        const userEmail = req.user?.username;//se obtiene el email del usuario desocificado para buscar con email

        if (!userEmail) {
            res.status(401).json({
                status: 401,
                message: 'User email is required'
            });
            return;
        }

        const user = await userService.getUserByEmail(userEmail);

        if (!user) {
            res.status(404).json({
                status: 404,
                message: 'User not found'
            });
            return;
        }

        if (user.roleId === undefined) {
            res.status(400).json({
                status: 400,
                message: 'User role ID is undefined'
            });
            return;
        }

        const role = await roleService.getRoleById(user.roleId);

        if (role?.name === 'admin') {
            console.log("Authenticated as Administrator");
            next();
        } else {
            res.status(403).json({
                status: 403,
                message: 'Forbidden'
            });
        }
    } catch (error: any) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};

export default AdminAuth;
