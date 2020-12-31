import { TaskRepository } from "../repository/TaskRepository";
import { SaveTaskReq } from "../request/SaveTaskReq";

export class TaskService {

    public async getByUser(ownerId: number): Promise<any> {
        const taskRepository = new TaskRepository();

        const task = await taskRepository.findByUser(ownerId);
        return task;
    }

    public async saveOrUpdate(saveTaskReq: SaveTaskReq): Promise<any> {
        const taskRepository = new TaskRepository();

        const task = await taskRepository.save(saveTaskReq);
        return task;
    }

    public async delete(id: number): Promise<void> {
        const taskRepository = new TaskRepository();
        await taskRepository.delete(id);
    }
}
