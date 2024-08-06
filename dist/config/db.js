"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const userModel_1 = __importDefault(require("../models/userModel"));
const productModel_1 = __importDefault(require("../models/productModel"));
const cartModel_1 = __importDefault(require("../models/cartModel"));
const orderModel_1 = require("../models/orderModel");
const productCartModel_1 = __importDefault(require("../models/productCartModel"));
const roleModel_1 = __importDefault(require("../models/roleModel"));
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, "../../.env") });
const dialect = process.env.DB_DIALECT;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
if (!dialect || !dbHost || !dbUser || !dbPassword || !dbName) {
    throw new Error("Please provide all the environment variables for the database connection!");
}
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: dialect,
    host: dbHost,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    models: [userModel_1.default, productModel_1.default, cartModel_1.default, orderModel_1.OrderModel, productCartModel_1.default, roleModel_1.default]
});
exports.default = sequelize;
