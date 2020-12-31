import { ICommonRepository } from "./ICommonRepository";

export interface ITaskCRepository extends ICommonRepository {

    findByTask(taskId: number): Promise<any>;

}