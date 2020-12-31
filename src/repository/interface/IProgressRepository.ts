import { ICommonRepository } from "./ICommonRepository";

export interface IProgressRepository extends ICommonRepository {

    findByProject(projectId: number): Promise<any>;


}