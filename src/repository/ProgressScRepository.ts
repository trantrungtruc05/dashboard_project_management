import { ProgressSc } from "../entity/ProgressSc";
import { SaveProgressScReq } from "../request/SaveProgressScReq";
import { IProgressScRepository } from "./interface/IProgressScRepository";

export class ProgressScRepository implements IProgressScRepository {

    public async findByProgress(progressId: number): Promise<any> {

        const progressSc = await ProgressSc.findAll<ProgressSc>({
            where: {
                progress: progressId,
            },
            // tslint:disable-next-line:object-literal-sort-keys
            raw: true,
        });

        return progressSc;
    }

    public findAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async save(saveProgressScReq: SaveProgressScReq): Promise<void> {
        if (saveProgressScReq.id) {

            const count = await ProgressSc.count({
                where: {
                    id: saveProgressScReq.id,
                },
            });

            if (count > 0) {
                await ProgressSc.update<ProgressSc>(saveProgressScReq, { where: { id: saveProgressScReq.id } });

                const existProgressSc = await ProgressSc.findOne<ProgressSc>({
                    where: {
                        id: saveProgressScReq.id,
                    },
                    // tslint:disable-next-line:object-literal-sort-keys
                    raw: true,
                });

                return existProgressSc;

            } else {
                const createProgressSc = ProgressSc.create(saveProgressScReq);
                return createProgressSc;

            }
        } else {
            const createProgressSc = ProgressSc.create(saveProgressScReq);
            return createProgressSc;
        }
    }

    public async delete(id: number): Promise<void> {
        await ProgressSc.destroy({
            where: {
                id,
            },
        });
    }

}
