import {Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "roles",
    timestamps: false,
})
export class Roles extends Model<Roles> {

    @Column({field: "role_name"})
    public roleName: string;
}
