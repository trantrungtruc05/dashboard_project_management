import {Column, Model, Table} from "sequelize-typescript";

@Table({
    tableName: "permission_api",
    timestamps: false,
})
export class PermissionApi extends Model<PermissionApi> {
    @Column({field: "api_method"})
    public apiMethod: string;

    @Column({field: "api_route"})
    public apiRoute: string;

    @Column({field: "permit"})
    public permit: string;

}
