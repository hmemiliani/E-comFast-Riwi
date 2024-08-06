import { container } from "tsyringe";
import { Request, Response } from "express";
import { config } from "dotenv";
import { resolve } from "path";
import jwt from "jsonwebtoken";
import UserService from "../services/userService";

config({ path: resolve(__dirname, "../../.env") });


class AuthController {
    static async login(req: Request, res: Response) {
        try {
            console.log("entrando en el login");
            console.log(req.body);
            
            const { email, password } = req.body;
            const userService = container.resolve(UserService);
            const user = await userService.checkUserCredentials(email, password);
            if (!user || !user?.id || !user?.email) {
                return res.status(401).json({
                    status: 401,
                    message: "Invalid credentials"
                });
            }
            const token = AuthController.generateToken({ id: user?.id, username: user?.email });
            res.status(200).json({
                status: 200,
                token
            });

        } catch (err: any) {
            res.status(401).json({
                status: 401,
                message: err.message
            });
        }
    }

    static generateToken(user: { id: number; username: string }): any {

        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("Please provide a JWT secret!");
        }
        const token = jwt.sign(user, secret, { expiresIn: "1h" });
        return token;
    }

}

export default AuthController;
