import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "projects",
    timestamps: false,
})
export class Project extends Model<Project> {

    @Column({field: "name"})
    public name: string;

    @Column({field: "description", type: DataType.TEXT})
    public description: string;

    @Column({field: "teamid"})
    public teamid: number;

    @Column({field: "manager"})
    public manager: string;

    @Column({field: "doer"})
    public doer: string;

    @Column({field: "advisor"})
    public advisor: string;

    @Column({field: "repoid"})
    public repoid: number;

    @Column({field: "status"})
    public status: number;

}
