import { LogRepository } from "../repository/LogRepository";
import { SaveLogReq } from "../request/SaveLogReq";

export class LogService {

    public async getAll(): Promise<any> {
        const logRepository = new LogRepository();

        const log = await logRepository.findAll();
        return log;
    }

    public async getByObject(objecttype: string, objectid: number): Promise<any> {
        const logRepository = new LogRepository();

        const log = await logRepository.findByObject(objecttype, objectid);
        return log;
    }

    public async saveOrUpdate(saveLogReq: SaveLogReq): Promise<any> {
        const logRepository = new LogRepository();

        const log = await logRepository.save(saveLogReq);
        return log;
    }
}
