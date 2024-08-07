import UserModel from "../models/userModel";
import UserRepository from "../repositories/userRepository";
import { UserType } from "../interfaces/user";
import { injectable, inject } from "tsyringe";

@injectable()
export default class UserService {
    constructor(@inject("UserRepository") private userRepository: UserRepository) {}

    async getAllUsers(): Promise<UserType[]> {
        return await this.userRepository.findAll(); // obtener todos los usuarios
    }

    async getUserById(id: number): Promise<UserType | null> {
        return await this.userRepository.findById(id); // obtener un usuario por su id
    }

    async createUser(user: Partial<UserModel>): Promise<UserType | null> {
        return await this.userRepository.create(user); // crear un usuario
    }

    async updateUser(id: number, user: Partial<UserType>): Promise<number> {
        return await this.userRepository.update(id, user); // actualizar un usuario por id
    }

    async deleteUser(id: number): Promise<number> {
        return await this.userRepository.delete(id); // eliminar un usuario por id
    }

    async getUserByEmail(email: string): Promise<UserType | null> {
        return await this.userRepository.findByEmail(email); // obtener un usuario por su email
    }

    async getUserOrders(id: number): Promise<UserType | null> {
        return await this.userRepository.findOrdersWithUser(id); // obtener todas las órdenes de un usuario
    }

    async checkUserCredentials(email:string, password: string): Promise<Partial<UserModel> | undefined>{
        const user = await this.getUserByEmail(email);// Verificacion de credenciales
        if(user &&  user.password === password){
            return user;
        }
        throw new Error('Invalid credentials');
    }
}
