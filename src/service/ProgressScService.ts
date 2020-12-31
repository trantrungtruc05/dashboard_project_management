import { ProgressScRepository } from "../repository/ProgressScRepository";
import { SaveProgressScReq } from "../request/SaveProgressScReq";

export class ProgressScService {

  

    public async getByProgress(progressId: number): Promise<any> {
        const progressScRepo = new ProgressScRepository();

        const progressSc = await progressScRepo.findByProgress(progressId);
        return progressSc;
    }

    public async saveOrUpdate(saveProgressScReq: SaveProgressScReq): Promise<any> {
        const progressScRepo = new ProgressScRepository();

        const progressSc = await progressScRepo.save(saveProgressScReq);
        return progressSc;
    }

    public async delete(id: number): Promise<void> {
        const progressScRepo = new ProgressScRepository();
        await progressScRepo.delete(id);
    }
}
