import { RolePermission } from "../entity/RolePermission";

export class RolePermissionRepository {

    public findRolePermissionByRoleId = async (roleId: number) => {

        const rolePermission = await RolePermission.findOne<RolePermission>({
            where: {
                roleId: roleId
            }
        });

        return rolePermission;
    }
}
