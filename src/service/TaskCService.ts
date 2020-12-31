import { TaskCRepository } from "../repository/TaskCRepository";
import { SaveTaskCReq } from "../request/SaveTaskCReq";

export class TaskCService {

    public async getByTask(taskId: number): Promise<any> {
        const taskCRepository = new TaskCRepository();

        const taskC = await taskCRepository.findByTask(taskId);
        return taskC;
    }

    public async saveOrUpdate(saveTaskCReq: SaveTaskCReq): Promise<any> {
        const taskCRepository = new TaskCRepository();

        const taskC = await taskCRepository.save(saveTaskCReq);
        return taskC;
    }

    public async delete(id: number): Promise<void> {
        const taskCRepository = new TaskCRepository();
        await taskCRepository.delete(id);
    }
}
