import { ITaskARepository } from "./interface/ITaskARepository";
import { TaskA } from "../entity/TaskA";
import { SaveTaskAReq } from "../request/SaveTaskAReq";

export class TaskARepository implements ITaskARepository {
    public async findByTask(taskId: number): Promise<any> {
        const taskA = await TaskA.findAll<TaskA>({
            where: {
                task: taskId
            },
            raw: true
        });

        return taskA;
    }
    public findAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async save(saveTaskAReq: SaveTaskAReq): Promise<void> {
        if (saveTaskAReq.id) {

            const count = await TaskA.count({
                where: {
                    id: saveTaskAReq.id
                }
            });

            if (count > 0) {
                await TaskA.update<TaskA>(saveTaskAReq, { where: { id: saveTaskAReq.id } });

                const existTaskA = await TaskA.findOne<TaskA>({
                    where: {
                        id: saveTaskAReq.id
                    },
                    raw: true
                });

                return existTaskA;

            } else {
                const createTaskA = TaskA.create(saveTaskAReq);
                return createTaskA;

            }
        } else {
            const createTaskA = TaskA.create(saveTaskAReq);
            return createTaskA;
        }
    }

    public async delete(id: number): Promise<void> {
        await TaskA.destroy({
            where: {
                id
            }
        });
    }
}
