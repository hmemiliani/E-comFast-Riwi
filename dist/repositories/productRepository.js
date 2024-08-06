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
const productModel_1 = __importDefault(require("../models/productModel"));
let ProductRepository = class ProductRepository {
    async findAll() {
        return await productModel_1.default.findAll(); //Obtención de todos los productos
    }
    async findById(id) {
        return await productModel_1.default.findByPk(id); //Obtención de un producto por su id
    }
    async create(product) {
        return await productModel_1.default.create(product); // Creación de producto
    }
    async update(id, product) {
        return await productModel_1.default.update(product, { where: { id } }); // Actualización de producto
    }
    async delete(id) {
        return await productModel_1.default.destroy({ where: { id } }); // Eliminación de producto
    }
};
ProductRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductRepository);
exports.default = ProductRepository;
