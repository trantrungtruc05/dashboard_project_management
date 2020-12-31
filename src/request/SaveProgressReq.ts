export class SaveProgressReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public title: string;
    public content: string;
    public project: number;
    public by: number;
    public when: string;

    constructor(title: string, content: string, project: number, by: number, when: string) {
        this.title = title;
        this.content = content;
        this.project = project;
        this.by = by;
        this.when = when;

    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
