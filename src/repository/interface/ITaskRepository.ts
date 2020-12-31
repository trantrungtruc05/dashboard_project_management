import { ICommonRepository } from "./ICommonRepository";

export interface ITaskRepository extends ICommonRepository {

    findByTeam(teamId: number): Promise<any>;

    findByProject(projectId: number): Promise<any>;

    findByUser(ownerId: number): Promise<any>;

}