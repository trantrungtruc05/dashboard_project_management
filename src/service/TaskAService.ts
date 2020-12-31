import { TaskARepository } from "../repository/TaskARepository";
import { SaveTaskAReq } from "../request/SaveTaskAReq";

export class TaskAService {

    public async getByTask(taskId: number): Promise<any> {
        const taskARepository = new TaskARepository();

        const taskA = await taskARepository.findByTask(taskId);
        return taskA;
    }

    public async saveOrUpdate(saveTaskAReq: SaveTaskAReq): Promise<any> {
        const taskARepository = new TaskARepository();

        const taskA = await taskARepository.save(saveTaskAReq);
        return taskA;
    }

    public async delete(id: number): Promise<void> {
        const taskARepository = new TaskARepository();
        await taskARepository.delete(id);
    }
}
