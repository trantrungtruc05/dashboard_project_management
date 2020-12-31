import {SaveRoleReq} from "../request/SaveRoleReq";
import { IRoleRepository } from "./interface/IRoleRepository";
import { Roles } from "../entity/Roles";

export class RoleRepository implements IRoleRepository {
    public async delete(id: number): Promise<void> {
        await Roles.destroy({
            where: {
                id
            },
        });
    }

    public async findAll(): Promise<any> {
        const role = await Roles.findAll<Roles>({
            raw: true
        });
        return role;
    }

    public async findById(id: number): Promise<any> {
        const role = await Roles.findOne<Roles>({
            raw: true,
            where: {
                id
            }
        });
        return role;
    }

    public async save(saveRoleReq: SaveRoleReq): Promise<void> {
        if (saveRoleReq.id) {

            const count = await Roles.count({
                where: {
                    id: saveRoleReq.id,
                },
            });

            if (count > 0) {
                Roles.update<Roles>(saveRoleReq, { where: { id: saveRoleReq.id } });

                const existRole = await Roles.findOne<Roles>({
                    raw: true,
                    where: {
                        id: saveRoleReq.id,
                    },
                });

                return existRole;

            } else {
                // tslint:disable-next-line:no-shadowed-variable
                const createRole = Roles.create(saveRoleReq);
                return createRole;

            }
        } else {
            // tslint:disable-next-line:no-shadowed-variable
            const createRole = Roles.create(saveRoleReq);
            return createRole;
        }
    }
}
