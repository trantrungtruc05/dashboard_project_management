import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Roles} from "./Roles";

@Table({
    tableName: "role_permission",
    timestamps: false,
})
export class RolePermission extends Model<RolePermission> {

    @ForeignKey(() => Roles)
    @Column({field: "role_id"})
    public roleId!: number;

    @Column({field: "can_read"})
    public canRead: boolean;

    @Column({field: "can_write"})
    public canWrite: boolean;

    @Column({field: "can_update"})
    public canUpdate: boolean;

    @Column({field: "can_delete"})
    public canDelete: boolean;

}
