import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "sections",
    timestamps: false,
})
export class Sections extends Model<Sections> {

    @Column({field: "name"})
    public name: string;

    @Column({field: "project"})
    public project: number;

}
