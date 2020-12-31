export class SaveProgressScReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public progress: number;
    public by: number;
    public when: string;
    public content: string;
    public replyto: number;

    constructor(progress: number, by: number, when: string, content: string, replyto: number) {
        this.progress = progress;
        this.by = by;
        this.when = when;
        this.content = content;
        this.replyto = replyto;

    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
