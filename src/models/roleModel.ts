import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany
} from 'sequelize-typescript';
import UserModel from './userModel';

@Table({
    tableName: 'roles',
    timestamps: true
})
export default class RoleModel extends Model<RoleModel> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @HasMany(() => UserModel)
    users!: UserModel[];
}
