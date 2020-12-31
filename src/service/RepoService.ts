import { RepoRepository } from "../repository/RepoRepository";
import { SaveRepoReq } from "../request/SaveRepoReq";

export class RepoService {

    public async getAll(): Promise<any> {
        const repoRepository = new RepoRepository();

        const repo = await repoRepository.findAll();
        return repo;
    }

    public async getById(id: number): Promise<any> {
        const repoRepository = new RepoRepository();

        const repo = await repoRepository.findById(id);
        return repo;
    }

    public async saveOrUpdate(saveRepoReq: SaveRepoReq): Promise<any> {
        const repoRepository = new RepoRepository();

        const repo = await repoRepository.save(saveRepoReq);
        return repo;
    }

    public async delete(id: number): Promise<void> {
        const repoRepository = new RepoRepository();
        await repoRepository.delete(id);
    }
}
