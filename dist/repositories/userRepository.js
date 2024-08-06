"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const userModel_1 = __importDefault(require("../models/userModel"));
const orderModel_1 = require("../models/orderModel");
let UserRepository = class UserRepository {
    async findAll() {
        return await userModel_1.default.findAll(); // Obtención de todos los usuarios
    }
    async findById(id) {
        return await userModel_1.default.findByPk(id); // Obtención de un usuario por su id
    }
    async create(user) {
        return await userModel_1.default.create(user); // Creacion de un usuario
    }
    async update(id, user) {
        return await userModel_1.default.update(user, { where: { id } }); // Actualizar un usuario
    }
    async delete(id) {
        return await userModel_1.default.destroy({ where: { id } }); // Eliminar un usuario
    }
    async findByEmail(email) {
        return await userModel_1.default.findOne({ where: { email } }); // Obtención de un usuario por su email
    }
    async findOrdersWithUser(id) {
        return await userModel_1.default.findByPk(id, { include: [orderModel_1.OrderModel] }); // Obtención de todas las ordenes de un usuario
    }
};
UserRepository = __decorate([
    (0, tsyringe_1.injectable)()
], UserRepository);
exports.default = UserRepository;
