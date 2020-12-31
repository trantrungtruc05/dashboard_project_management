export interface ICommonRepository {

    findAll(): Promise<any>;

    findById(id: number): Promise<any>;

    save(info: any): Promise<void>;

    delete(id: number): Promise<void>;
};
