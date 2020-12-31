export class SaveLogReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public subject: string;
    public objecttype: string;
    public objectid: number;
    public when: string;
    public content: string;

    constructor(subject: string,
                objecttype: string,
                objectid: number,
                when: string,
                content: string) {
        this.subject = subject;
        this.objecttype = objecttype;
        this.objectid = objectid;
        this.when = when;
        this.content = content;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
