import { UserRole } from "../entity/UserRole";
import {IUserRoleRepository} from "./interface/IUserRoleRepository";

export class UserRoleRepository implements IUserRoleRepository {
    public async delete(id: number): Promise<void> {
        return undefined;
    }

    public async findAll(): Promise<any> {
        const userRole = await UserRole.findAll<UserRole>({
            raw: true
        });

        return userRole;
    }

    public async findById(id: number): Promise<any> {
        return undefined;
    }

    public async findByRoleId(roleId: number): Promise<any> {
        const userRole = await UserRole.findAll<UserRole>({
            where: {
                roleId: roleId
            }
        });

        return userRole;
    }

    public async findByUserId(userId: number): Promise<any> {
        const userRole = await UserRole.findAll<UserRole>({
            where: {
                userId: userId
            }
        });

        return userRole;
    }

    public async save(info: any): Promise<void> {
        return undefined;
    }

}
