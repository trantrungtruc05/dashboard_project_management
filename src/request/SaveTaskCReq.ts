export class SaveTaskCReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public task: number;
    public by: number;
    public when: string;
    public content: string;
    public replyto: number;
    public attachment: string;

    constructor(
        task: number,
        by: number,
        when: string,
        content: string,
        replyto: number,
        attachment: string) {
        this.task = task;
        this.by = by;
        this.when = when;
        this.content = content;
        this.replyto = replyto;
        this.attachment = attachment;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
