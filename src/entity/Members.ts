import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "members",
    timestamps: false,
})
export class Members extends Model<Members> {

    @Column({field: "userid"})
    public userid: number;

    @Column({field: "teamid"})
    public teamid: number;

    @Column({field: "reportto"})
    public reportto: number;

    @Column({field: "status"})
    public status: number;
}
