import UserRepository from '../repositories/userRepository';
import {injectable, inject} from 'tsyringe';
import UserModel from '../models/userModel';
import { UserType } from '../interfaces/user';

@injectable()
export default class UserService{
    constructor(@inject('UserRepository') private userRepository: UserRepository){}

    async getAllUsers(): Promise<UserType[]>{
        return await this.userRepository.findAll(); // obener todos los usuarios
    }

    async getUserById(id: number): Promise<UserType | null>{
        return await this.userRepository.findById(id);// obtener un usuario por su id
    }

    async createUser(user: Partial<UserModel>): Promise<UserType | null>{
        return await this.userRepository.create(user);// crear un usuario
    }

    async updateUser(id: number, user: Partial<UserType>): Promise<[affectedCount: number]>{
        return await this.userRepository.update(id, user); // actualizar un usuario por id
    }

    async deleteUser(id: number) : Promise<number>{
        return await this.userRepository.delete(id);// eliminar un usuario por id
    }

    async getUserByEmail(email: string): Promise<UserType | null>{
        return await this.userRepository.findByEmail(email);// obtener un usuario por su email
    }

    async checkUserCredentials(email:string, password: string): Promise<Partial<UserModel> | undefined>{
        const user = await this.getUserByEmail(email);// Verificacion de credenciales
        if(user &&  user.password === password){
            return user;
        }
        throw new Error('Invalid credentials');
    }
}