export class SaveTaskReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public name: string;
    public description: string;
    public sectionid: number;
    public owner: number;
    public assignee: string;
    public follower: string;
    public parent: number;
    public status: number;

    constructor(
        name: string,
        description: string,
        sectionid: number,
        owner: number,
        assignee: string,
        follower: string,
        parent: number,
        status: number ) {
        this.name = name;
        this.description = description;
        this.sectionid = sectionid;
        this.owner = owner;
        this.assignee = assignee;
        this.follower = follower;
        this.parent = parent;
        this.status = status;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
