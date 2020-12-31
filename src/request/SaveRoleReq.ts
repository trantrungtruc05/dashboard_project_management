export class SaveRoleReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public roleName: string;

    constructor(roleName: string) {
        this.roleName = roleName;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
