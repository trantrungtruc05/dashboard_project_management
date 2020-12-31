export class SaveTaskAReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public task: number;
    public by: number;
    public when: string;
    public link: string;
    public filename: string;

    constructor(task: number,
                by: number,
                when: string,
                link: string,
                filename: string) {
        this.task = task;
        this.by = by;
        this.when = when;
        this.link = link;
        this.filename = filename;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
