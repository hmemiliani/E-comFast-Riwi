import ProductModel from './productModel';
import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey
} from 'sequelize-typescript';
import RoleModel from './roleModel';

@Table({
    tableName: 'users',
    timestamps: true
})

export default class UserModel extends Model<UserModel> {
    static attributes(arg0: string, attributes: any, arg2: {}) {
        throw new Error("Method not implemented.");
    }
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    @ForeignKey(() => RoleModel)
    @Column({
        type: DataType.INTEGER
    })
    roleid!: number;

    // @HasMany(() => ProductModel)
    // products!: ProductModel[];

}
