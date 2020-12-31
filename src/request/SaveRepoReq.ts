export class SaveRepoReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public name: string;
    public parent: number;
    public orderno: number;
    public status: number;

    constructor(name: string, parent: number, orderno: number, status: number) {
        this.name = name;
        this.parent = parent;
        this.orderno = orderno;
        this.status = status;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
