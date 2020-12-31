import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "users",
    timestamps: false,
})
export class Users extends Model<Users> {

    @Column({field: "username"})
    public username: string;

    @Column({field: "email"})
    public email: string;

    @Column({field: "status"})
    public status: number;

    @Column({field: "userid_op"})
    public useridOp: number;
}
