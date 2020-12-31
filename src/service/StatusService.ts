import { StatusRepository } from "../repository/StatusRepository";
import { SaveStatusReq } from "../request/SaveStatusReq";

export class StatusService {

    public async getAll(): Promise<any> {
        const statusRepository = new StatusRepository();

        const status = await statusRepository.findAll();
        return status;
    }

    public async saveOrUpdate(saveStatusReq: SaveStatusReq): Promise<any> {
        const statusRepository = new StatusRepository();

        const status = await statusRepository.save(saveStatusReq);
        return status;
    }

    public async delete(id: number): Promise<void> {
        const statusRepository = new StatusRepository();
        await statusRepository.delete(id);
    }
}
