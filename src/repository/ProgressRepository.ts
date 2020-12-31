import { Progress } from "../entity/Progress";
import { SaveProgressReq } from "../request/SaveProgressReq";
import { IProgressRepository } from "./interface/IProgressRepository";

export class ProgressRepository implements IProgressRepository {

    public async findByProject(projectId: number): Promise<any> {
        const progress = await Progress.findAll<Progress>({
            where: {
                project: projectId,
            },
            // tslint:disable-next-line:object-literal-sort-keys
            raw: true,
        });

        return progress;
    }

    public async findAll(): Promise<any> {
        const progress = await Progress.findAll<Progress>({
            raw: true,
        });
        return progress;
    }

    public findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async save(saveProgressReq: SaveProgressReq): Promise<void> {
        if (saveProgressReq.id) {

            const count = await Progress.count({
                where: {
                    id: saveProgressReq.id,
                },
            });

            if (count > 0) {
                await Progress.update<Progress>(saveProgressReq, { where: { id: saveProgressReq.id } });

                const existProgress = await Progress.findOne<Progress>({
                    where: {
                        id: saveProgressReq.id,
                    },
                    // tslint:disable-next-line:object-literal-sort-keys
                    raw: true,
                });

                return existProgress;

            } else {
                const createProgress = Progress.create(saveProgressReq);
                return createProgress;

            }
        } else {
            const createProgress = Progress.create(saveProgressReq);
            return createProgress;
        }
    }

    public async delete(id: number): Promise<void> {
        await Progress.destroy({
            where: {
                id,
            },
        });
    }

}
