import { IRepoRepository } from "./interface/IRepoRepository";
import { Repo } from "../entity/Repo";
import { SaveRepoReq } from "../request/SaveRepoReq";

export class RepoRepository implements IRepoRepository {

    public async findAll(): Promise<any> {
        const repo = await Repo.findAll<Repo>({
            raw: true
        });
        return repo;
    }
    public async findById(id: number): Promise<any> {
        const repo = await Repo.findAll<Repo>({
            where: {
                id
            },
            raw: true
        });

        return repo;
    }

    public async save(saveRepoReq: SaveRepoReq): Promise<void> {
        if (saveRepoReq.id) {

            const count = await Repo.count({
                where: {
                    id: saveRepoReq.id
                }
            });

            if (count > 0) {
                await Repo.update<Repo>(saveRepoReq, { where: { id: saveRepoReq.id } });

                const existRepo = await Repo.findOne<Repo>({
                    where: {
                        id: saveRepoReq.id
                    },
                    raw: true
                });

                return existRepo;

            } else {
                const createRepo = Repo.create(saveRepoReq);
                return createRepo;

            }
        } else {
            const createRepo = Repo.create(saveRepoReq);
            return createRepo;
        }
    }

    public async delete(id: number): Promise<void> {
        await Repo.destroy({
            where: {
                id
            }
        });
    }
}
