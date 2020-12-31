export class SaveProjectReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public name: string;
    public description: string;
    public teamid: number;
    public manager: string;
    public doer: string;
    public advisor: string;
    public repoid: number;
    public status: number;

    constructor(name: string, description: string, teamid: number, manager: string, doer: string, advisor: string, repoid: number, status: number) {
        this.name = name;
        this.description = description;
        this.teamid = teamid;
        this.manager = manager;
        this.doer = doer;
        this.advisor = advisor;
        this.repoid = repoid;
        this.status = status;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
