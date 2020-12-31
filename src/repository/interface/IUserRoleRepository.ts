import { ICommonRepository } from "./ICommonRepository";

export interface IUserRoleRepository extends ICommonRepository {

    findByUserId(userId: number): Promise<any>;
    findByRoleId(roleId: number): Promise<any>;
}
