import { ICommonRepository } from "./ICommonRepository";

export interface IUsersRepository extends ICommonRepository {

    findByUsername(username: string): Promise<any>;

}
