import { ProgressRepository } from "../repository/ProgressRepository";
import { SaveProgressReq } from "../request/SaveProgressReq";

export class ProgressService {

    public async getAll(): Promise<any> {
        const progressRepo = new ProgressRepository();

        const progress = await progressRepo.findAll();
        return progress;
    }

    public async getByProject(projectId: number): Promise<any> {
        const progressRepo = new ProgressRepository();

        const progress = await progressRepo.findByProject(projectId);
        return progress;
    }

    public async saveOrUpdate(saveProgressReq: SaveProgressReq): Promise<any> {
        const progressRepo = new ProgressRepository();

        const progress = await progressRepo.save(saveProgressReq);
        return progress;
    }

    public async delete(id: number): Promise<void> {
        const progressRepo = new ProgressRepository();
        await progressRepo.delete(id);
    }
}
