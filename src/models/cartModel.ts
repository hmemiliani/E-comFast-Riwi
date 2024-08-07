import ProductCartModel from "./productCartModel";
import UserModel from "./userModel";
import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';

@Table({
    tableName: 'carts',
    timestamps: true
})
export default class CartModel extends Model<CartModel> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number;

    @BelongsTo(() => UserModel)
    user!: UserModel;

    @HasMany(() => ProductCartModel)
    productCarts!: ProductCartModel[];
}
