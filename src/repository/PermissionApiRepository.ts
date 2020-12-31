import { PermissionApi } from "../entity/PermissionApi";

export class PermissionApiRepository {

    public findRoleByRouteAndMethod = async (apiRoute, apiMethod) => {

        const permissionApi = await PermissionApi.findOne<PermissionApi>({
            where: {
                apiRoute: apiRoute,
                apiMethod: apiMethod
            }
        });

        return permissionApi;
    }
}
