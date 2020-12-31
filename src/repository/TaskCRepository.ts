import { ITaskCRepository } from "./interface/ITaskCRepository";
import { TaskC } from "../entity/TaskC";
import { SaveTaskCReq } from "../request/SaveTaskCReq";

export class TaskCRepository implements ITaskCRepository {

    public async findByTask(taskId: number): Promise<any> {
        const taskC = await TaskC.findAll<TaskC>({
            where: {
                task: taskId
            },
            raw: true
        });

        return taskC;
    }

    public findAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async save(saveTaskCReq: SaveTaskCReq): Promise<void> {
        if (saveTaskCReq.id) {

            const count = await TaskC.count({
                where: {
                    id: saveTaskCReq.id
                }
            });

            if (count > 0) {
                await TaskC.update<TaskC>(saveTaskCReq, { where: { id: saveTaskCReq.id } });

                const existTaskC = await TaskC.findOne<TaskC>({
                    where: {
                        id: saveTaskCReq.id
                    },
                    raw: true
                });

                return existTaskC;

            } else {
                const createTaskC = TaskC.create(saveTaskCReq);
                return createTaskC;

            }
        } else {
            const createTaskC = TaskC.create(saveTaskCReq);
            return createTaskC;
        }
    }

    public async delete(id: number): Promise<void> {
        await TaskC.destroy({
            where: {
                id
            }
        });
    }
}
