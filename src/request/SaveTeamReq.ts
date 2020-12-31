export class SaveTeamReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public name: string;
    public description: string;
    public manager: string;
    public member: string;
    public status: number;

    constructor(name: string, description: string, manager: string, member: string, status: number) {
        this.name = name;
        this.description = description;
        this.manager = manager;
        this.member = member;
        this.status = status;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
