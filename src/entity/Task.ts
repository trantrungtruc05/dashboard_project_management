import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "tasks",
    timestamps: false,
})
export class Task extends Model<Task> {

    @Column({field: "name"})
    public name: string;

    @Column({field: "description"})
    public description: string;

    @Column({field: "sectionid"})
    public sectionid: number;

    @Column({field: "owner"})
    public owner: number;

    @Column({field: "assignee"})
    public assignee: string;

    @Column({field: "follower"})
    public follower: string;

    @Column({field: "parent"})
    public parent: number;

    @Column({field: "status"})
    public status: number;
}
