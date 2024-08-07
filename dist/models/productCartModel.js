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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const cartModel_1 = __importDefault(require("./cartModel"));
const productModel_1 = __importDefault(require("./productModel"));
let ProductCartModel = class ProductCartModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], ProductCartModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => cartModel_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], ProductCartModel.prototype, "cartId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => cartModel_1.default),
    __metadata("design:type", cartModel_1.default)
], ProductCartModel.prototype, "cart", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => productModel_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], ProductCartModel.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => productModel_1.default),
    __metadata("design:type", productModel_1.default)
], ProductCartModel.prototype, "product", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], ProductCartModel.prototype, "quantity", void 0);
ProductCartModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'product_carts',
        timestamps: true
    })
], ProductCartModel);
exports.default = ProductCartModel;
