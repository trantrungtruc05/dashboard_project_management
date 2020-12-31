import { RoleRepository } from "../repository/RoleRepository";
import { SaveRoleReq } from "../request/SaveRoleReq";

export class RoleService {

    public async getAll(): Promise<any> {
        const roleRepository = new RoleRepository();

        const role = await roleRepository.findAll();
        return role;
    }

    public async getById(id: number): Promise<any> {
        const roleRepository = new RoleRepository();

        const role = await roleRepository.findById(id);
        return role;
    }

    public async saveOrUpdate(saveRoleReq: SaveRoleReq): Promise<any> {
        const roleRepository = new RoleRepository();

        const role = await roleRepository.save(saveRoleReq);
        return role;
    }

    public async delete(id: number): Promise<void> {
        const roleRepository = new RoleRepository();
        await roleRepository.delete(id);
    }
}
