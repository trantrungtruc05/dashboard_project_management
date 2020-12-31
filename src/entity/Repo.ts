import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "repo",
    timestamps: false,
})
export class Repo extends Model<Repo> {

    @Column({field: "name"})
    public name: string;

    @Column({field: "parent"})
    public parent: number;

    @Column({field: "orderno"})
    public orderno: number;

    @Column({field: "status"})
    public status: number;
}
