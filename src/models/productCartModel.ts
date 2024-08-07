import {
    AutoIncrement,
    Column,
    Model,
    DataType,
    ForeignKey,
    PrimaryKey,
    Table,
    BelongsTo
} from "sequelize-typescript";
import CartModel from "./cartModel";
import ProductModel from "./productModel";

@Table({
    tableName: 'product_carts',
    timestamps: true
})
export default class ProductCartModel extends Model<ProductCartModel> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => CartModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    cartId!: number;

    @BelongsTo(() => CartModel)
    cart!: CartModel;

    @ForeignKey(() => ProductModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productId!: number;

    @BelongsTo(() => ProductModel)
    product!: ProductModel;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity!: number;
}
