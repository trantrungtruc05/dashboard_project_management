import { ICommonRepository } from "./ICommonRepository";

export interface ISectionsRepository extends ICommonRepository {

    findByProject(projectId: number): Promise<any>;

}