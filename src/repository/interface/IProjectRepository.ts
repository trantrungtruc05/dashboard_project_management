import { ICommonRepository } from "./ICommonRepository";

export interface IProjectRepository extends ICommonRepository {

    findByTeam(teamId: number): Promise<any>;

    findByUser(userId: number): Promise<any>;

}