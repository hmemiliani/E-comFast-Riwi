import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';
import { resolve } from 'path';
import { Dialect } from 'sequelize';
import UserModel from '../models/userModel';
import ProductModel from '../models/productModel';
import CartModel from '../models/cartModel';
import { OrderModel } from '../models/orderModel';
import ProductCartModel from '../models/productCartModel';
import RoleModel from '../models/roleModel';

config({path: resolve(__dirname, "../../.env")});

const dialect: Dialect | undefined = process.env.DB_DIALECT as Dialect;
const dbHost: string | undefined = process.env.DB_HOST;
const dbUser: string | undefined = process.env.DB_USER;
const dbPassword: string | undefined = process.env.DB_PASSWORD;
const dbName: string | undefined = process.env.DB_NAME;

if (!dialect || !dbHost || !dbUser || !dbPassword || !dbName) {
        throw new Error("Please provide all the environment variables for the database connection!");
}

const sequelize: Sequelize = new Sequelize({
    dialect: dialect,
    host: dbHost,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    models: [UserModel, ProductModel, CartModel, OrderModel, ProductCartModel, RoleModel]
});

export default sequelize;