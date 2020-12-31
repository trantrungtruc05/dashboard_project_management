export class SaveSectionReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public name: string;
    public project: number;

    constructor(name: string, project: number) {
        this.name = name;
        this.project = project;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
