import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "taskattachments",
    timestamps: false,
})
export class TaskA extends Model<TaskA> {

    @Column({field: "task"})
    public task: number;

    @Column({field: "by_"})
    public by: number;

    @Column({field: "when_"})
    public when: string;

    @Column({field: "link"})
    public link: string;

    @Column({field: "filename"})
    public filename: string;

}
