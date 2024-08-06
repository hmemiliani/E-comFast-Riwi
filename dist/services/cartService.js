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
const cartRepository_1 = __importDefault(require("../repositories/cartRepository"));
const tsyringe_1 = require("tsyringe");
let CartService = class CartService {
    constructor(cartRepository) {
        this.cartRepository = cartRepository;
    }
    async getAllCarts() {
        return await this.cartRepository.findAll(); // obtener todos los carritos
    }
    async getCartById(id) {
        return await this.cartRepository.findById(id); // obtener un carrito por su id
    }
    async createCart(cart) {
        return await this.cartRepository.create(cart); // crear un carrito
    }
    async updateCart(id, cart) {
        return await this.cartRepository.update(id, cart); // actualizar un carrito por id
    }
    async deleteCart(id) {
        return await this.cartRepository.delete(id); // eliminar un carrito por id
    }
};
CartService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("CartRepository")),
    __metadata("design:paramtypes", [cartRepository_1.default])
], CartService);
exports.default = CartService;
