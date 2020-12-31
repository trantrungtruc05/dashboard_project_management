export class SaveMemberReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public userid: number;
    public teamid: number;
    public reportto: number;
    public status: number;

    constructor(userid: number, teamid: number, reportto: number, status: number) {
        this.userid = userid;
        this.teamid = teamid;
        this.reportto = reportto;
        this.status = status;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
