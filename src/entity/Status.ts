import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "statuses",
    timestamps: false,
})
export class Status extends Model<Status> {

    @Column({field: "name"})
    public name: string;

    @Column({field: "value"})
    public value: string;

    @Column({field: "type"})
    public type: string;

    @Column({field: "orderno"})
    public orderno: number;

}
