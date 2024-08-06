"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const orderModel_1 = require("../models/orderModel");
let OrderRepository = class OrderRepository {
    async findAll() {
        return await orderModel_1.OrderModel.findAll(); //Obtención de órdenes
    }
    async findById(id) {
        return await orderModel_1.OrderModel.findByPk(id); //Obtención de órdenes por su id
    }
    async create(order) {
        return await orderModel_1.OrderModel.create(order); // Creación de órdenes
    }
    async update(id, order) {
        return await orderModel_1.OrderModel.update(order, { where: { id } }); // Actualizacion de orden por id
    }
    async delete(id) {
        return await orderModel_1.OrderModel.destroy({ where: { id } }); // Eliminación de orden por id
    }
};
OrderRepository = __decorate([
    (0, tsyringe_1.injectable)()
], OrderRepository);
exports.default = OrderRepository;
