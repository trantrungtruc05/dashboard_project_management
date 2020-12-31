import {Log} from "../entity/Log";
import {SaveLogReq} from "../request/SaveLogReq";
import {ILogRepository} from "./interface/ILogRepository";

export class LogRepository implements ILogRepository {
    public async findByObject(objectType: string, objectId: number): Promise<any> {
        const log = await Log.findAll<Log>({
            where: {
                objecttype: objectType,
                objectid: objectId,
            },
            // tslint:disable-next-line:object-literal-sort-keys
            raw: true,
        });

        return log;
    }

    public async findAll(): Promise<any> {
        const log = await Log.findAll<Log>({
            raw: true,
        });
        return log;
    }

    public findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async save(saveLogReq: SaveLogReq): Promise<void> {
        if (saveLogReq.id) {

            const count = await Log.count({
                where: {
                    id: saveLogReq.id,
                },
            });

            if (count > 0) {
                await Log.update<Log>(saveLogReq, { where: { id: saveLogReq.id } });

                const existLog = await Log.findOne<Log>({
                    where: {
                        id: saveLogReq.id,
                    },
                    // tslint:disable-next-line:object-literal-sort-keys
                    raw: true,
                });

                return existLog;

            } else {
                const createLog = Log.create(saveLogReq);
                return createLog;

            }
        } else {
            const createLog = Log.create(saveLogReq);
            return createLog;
        }
    }

    public delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
