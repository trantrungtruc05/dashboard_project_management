import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "progresscomments",
    timestamps: false,
})
export class ProgressSc extends Model<ProgressSc> {

    @Column({field: "progress"})
    public progress: number;

    @Column({field: "by_"})
    public by: number;

    @Column({field: "when_"})
    public when: string;

    @Column({field: "content"})
    public content: string;

    @Column({field: "replyto"})
    public replyto: number;
}
