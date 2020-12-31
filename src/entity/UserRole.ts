import {Column, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Users} from "../entity/Users";
import {Roles} from "../entity/Roles";

@Table({
    tableName: "user_role",
    timestamps: false,
})
export class UserRole extends Model<UserRole> {

    @PrimaryKey
    @ForeignKey(() => Users)
    @Column({field: "user_id"})
    public userId!: number;

    @PrimaryKey
    @ForeignKey(() => Roles)
    @Column({field: "role_id"})
    public roleId!: number;
}
