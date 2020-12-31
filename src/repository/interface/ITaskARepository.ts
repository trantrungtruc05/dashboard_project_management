import { ICommonRepository } from "./ICommonRepository";

export interface ITaskARepository extends ICommonRepository {

    findByTask(taskId: number): Promise<any>;

}