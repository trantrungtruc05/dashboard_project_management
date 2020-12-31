import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "log",
    timestamps: false,
})
export class Log extends Model<Log> {

    @Column({field: "subject"})
    public subject: string;

    @Column({field: "objecttype"})
    public objecttype: string;

    @Column({field: "objectid"})
    public objectid: number;

    @Column({field: "when_"})
    public when: string;

    @Column({field: "content"})
    public content: string;

}
