import { ICommonRepository } from "./ICommonRepository";

export interface IProgressScRepository extends ICommonRepository {

    findByProgress(progressId: number): Promise<any>;

}