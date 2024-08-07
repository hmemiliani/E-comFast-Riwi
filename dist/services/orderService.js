"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderModel_1 = require("../models/orderModel");
const orderRepository_1 = __importDefault(require("../repositories/orderRepository"));
const tsyringe_1 = require("tsyringe");
let OrderService = class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async getAllOrders() {
        return await this.orderRepository.findAll(); // obtener todas las órdenes
    }
    async getOrderById(id) {
        return await this.orderRepository.findById(id); // obtener una orden por su id
    }
    async createOrder(order) {
        return await this.orderRepository.create(order); // crear una orden
    }
    async updateOrder(id, order) {
        return await this.orderRepository.update(id, order); // actualizar una orden por id
    }
    async deleteOrder(id) {
        return await this.orderRepository.delete(id); // eliminar una orden por id
    }
    //el servicio que me faltaba
    async getOrdersByUserId(userId) {
        return await orderModel_1.OrderModel.findAll({ where: { userId } }); // Obtención de todas las ordenes de un usuario
    }
};
OrderService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("OrderRepository")),
    __metadata("design:paramtypes", [orderRepository_1.default])
], OrderService);
exports.default = OrderService;
