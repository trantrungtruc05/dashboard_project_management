import { ICommonRepository } from "./ICommonRepository";

export interface ITeamsRepository extends ICommonRepository {

    findByUser(userId: number): Promise<any>;

}