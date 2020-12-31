import jsonwebtoken from "jsonwebtoken";
import {PermissionApiRepository} from "../repository/PermissionApiRepository";
import {UsersRepository} from "../repository/UsersRepository";
import {UserRoleRepository} from "../repository/UserRoleRepository";
import {RolePermissionRepository} from "../repository/RolePermissionRepository";

export default  function permit(apiRoute: string, apiMethod: string) {

    // return a middleware
    return async (request, response, next) => {

        const permissionApiRepository = new PermissionApiRepository();
        const permissionApi  = await permissionApiRepository.findRoleByRouteAndMethod(apiRoute, apiMethod);
        const permit = (permissionApi as any).permit;

        const token = request.headers.authorization.replace("Bearer", "").trim();
        const decodeToken = jsonwebtoken.verify(token, "ZETYY5JGK5NTYOVE");

        const  usersRepository = new UsersRepository();
        const user = await usersRepository.findByUsername((decodeToken as any).username);

        const userId = (user as any).id;

        const userRoleRepository = new UserRoleRepository();
        const lsUserRole = await userRoleRepository.findByUserId(userId);

        const lsRolePermission = new Array();
        for (const userRole of lsUserRole) {
            const roleId = (userRole as any).roleId;
            const rolePermissionRepository = new RolePermissionRepository();
            const rolePermission = await  rolePermissionRepository.findRolePermissionByRoleId(roleId);
            lsRolePermission.push(rolePermission);
        }

        if (checkRolePermission(lsRolePermission, permit) === true) {
            next();
        } else {
            response.status(403).json({ message: "Forbidden" }); // user is forbidden
        }

    };

    function checkRolePermission(lsRolePermission: any, permit: string) {
        let check = false;

        switch (permit) {
            case "READ": {
                for (const rolePermission of lsRolePermission) {
                    if ((rolePermission as any).canRead === true) {
                        check = true;
                        break;
                    }
                }

                break;
            }
            case "WRITE": {
                for (const rolePermission of lsRolePermission) {
                    if ((rolePermission as any).canWrite === true) {
                        check = true;
                        break;
                    }
                }
                break;
            }
            case "UPDATE": {
                for (const rolePermission of lsRolePermission) {
                    if ((rolePermission as any).canUpdate === true) {
                        check = true;
                        break;
                    }
                }
                break;
            }
            case "DELETE": {
                for (const rolePermission of lsRolePermission) {
                    if ((rolePermission as any).canDelete === true) {
                        check = true;
                        break;
                    }
                }
                break;
            }
            default: {
                return false;
            }
        }

        return check;

    }
}
