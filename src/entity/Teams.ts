import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "teams",
    timestamps: false,
})
export class Teams extends Model<Teams> {

    @Column({field: "name"})
    public name: string;

    @Column({field: "description", type: DataType.TEXT})
    public description: string;

    @Column({field: "manager"})
    public manager: string;

    @Column({field: "member"})
    public member: string;

    @Column({field: "status"})
    public status: number;
}
