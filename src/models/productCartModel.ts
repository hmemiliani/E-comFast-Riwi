import { 
    AutoIncrement, 
    Column,
    Model,
    DataType, 
    ForeignKey, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import CartModel from "./cartModel";
import ProductModel from "./productModel";

@Table({
    tableName: 'carts',
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

    @ForeignKey(() => ProductModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productId!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity!: number;
}