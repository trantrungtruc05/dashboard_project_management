export class SaveUserReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public username: string;
    public email: string;
    public status: number;

    constructor(username: string, email: string, status: number) {
        this.username = username;
        this.email = email;
        this.status = status;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
