import { 
    AutoIncrement,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import UserModel from "./userModel";
import ProductCartModel from "./productCartModel";

@Table({
    tableName: 'orders',
    timestamps: true
})

export class OrderModel extends Model<OrderModel> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id!: number;

    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number;

    @ForeignKey(() => ProductCartModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productCartId!: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    total!: number;
}