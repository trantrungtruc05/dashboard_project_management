import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "progress",
    timestamps: false,
})
export class Progress extends Model<Progress> {

    @Column({ field: "title" })
    public title: string;

    @Column({ field: "content" })
    public content: string;

    @Column({ field: "project" })
    public project: number;

    @Column({ field: "by_" })
    public by: number;

    @Column({ field: "when_" })
    public when: string;
}
