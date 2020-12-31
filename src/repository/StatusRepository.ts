import { IStatusRepository } from "./interface/IStatusRepository";
import { Status } from "../entity/Status";
import { SaveStatusReq } from "../request/SaveStatusReq";

export class StatusRepository implements IStatusRepository {
    public async findAll(): Promise<any> {
        const status = await Status.findAll<Status>({
            raw: true
        });

        return status;
    }
    public findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async save(saveStatusReq: SaveStatusReq): Promise<void> {
        if (saveStatusReq.id) {

            const count = await Status.count({
                where: {
                    id: saveStatusReq.id
                }
            });

            if (count > 0) {
                await Status.update<Status>(saveStatusReq, { where: { id: saveStatusReq.id } });

                const existStatus = await Status.findOne<Status>({
                    where: {
                        id: saveStatusReq.id
                    },
                    raw: true
                });

                return existStatus;

            } else {
                const createStatus = Status.create(saveStatusReq);
                return createStatus;

            }
        } else {
            const createStatus = Status.create(saveStatusReq);
            return createStatus;
        }
    }

    public async delete(id: number): Promise<void> {
        await Status.destroy({
            where: {
                id
            }
        });
    }

}
