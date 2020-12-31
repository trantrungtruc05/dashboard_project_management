import { ICommonRepository } from "./ICommonRepository";

export interface ILogRepository extends ICommonRepository {

    findByObject(objectType: string, objectId: number): Promise<any>;

}