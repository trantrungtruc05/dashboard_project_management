import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "taskcomments",
    timestamps: false,
})
export class TaskC extends Model<TaskC> {

    @Column({field: "task"})
    public task: number;

    @Column({field: "by_"})
    public by: number;

    @Column({field: "when_"})
    public when: string;

    @Column({field: "content"})
    public content: string;

    @Column({field: "replyto"})
    public replyto: number;

    @Column({field: "attachment"})
    public attachment: string;

}
