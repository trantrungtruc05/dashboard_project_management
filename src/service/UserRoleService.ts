import {ProjectRepository} from "../repository/ProjectRepository";
import { UserRoleRepository } from "../repository/UserRoleRepository";
import { RoleRepository } from "../repository/RoleRepository";
import { UsersRepository } from "../repository/UsersRepository";

export class UserRoleService {

    public async getRoleByUserId(userId: number): Promise<any> {
        const userRoleRepository = new UserRoleRepository();
        const roleRepository = new RoleRepository();

        const userRoles = await userRoleRepository.findByUserId(userId);

        const roles = new Array();

        for (const userRole of userRoles) {
            const role = await roleRepository.findById((userRole as any).roleId);
            roles.push(role);
        }

        return roles;
    }

    public async getUserByRoleId(roleId: number): Promise<any> {
        const userRoleRepository = new UserRoleRepository();
        const usersRepository = new UsersRepository();

        const userRoles = await userRoleRepository.findByRoleId(roleId);

        const users = new Array();

        for (const userRole of userRoles) {
            const user = await usersRepository.findById((userRole as any).userId);
            users.push(user);
        }

        return users;
    }

    public async getAll(): Promise<any> {
        const userRoleRepository = new UserRoleRepository();

        const userRole = await userRoleRepository.findAll();
        return userRole;
    }

}
