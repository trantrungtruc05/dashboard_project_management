export class SaveStatusReq {

    // tslint:disable-next-line:variable-name
    public id_: number;
    public name: string;
    public value: string;
    public type: string;
    public orderno: number;

    constructor(name: string,
                value: string,
                type: string,
                orderno: number) {
        this.name = name;
        this.value = value;
        this.type = type;
        this.orderno = orderno;
    }

    get id(): number {
        return this.id_;
    }
    set id(value: number) {
        this.id_ = value;
    }
}
