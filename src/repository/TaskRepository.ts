import { ITaskRepository } from "./interface/ITaskRepository";
import { Task } from "../entity/Task";
import { SaveTaskReq } from "../request/SaveTaskReq";

export class TaskRepository implements ITaskRepository {

    public findByTeam(teamId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public findByProject(projectId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async findByUser(ownerId: number): Promise<any> {
        const task = await Task.findAll<Task>({
            where: {
                owner: ownerId
            },
            raw: true
        });

        return task;
    }

    public findAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async save(saveTaskReq: SaveTaskReq): Promise<void> {
        if (saveTaskReq.id) {

            const count = await Task.count({
                where: {
                    id: saveTaskReq.id
                }
            });

            if (count > 0) {
                await Task.update<Task>(saveTaskReq, { where: { id: saveTaskReq.id } });

                const existTask = await Task.findOne<Task>({
                    where: {
                        id: saveTaskReq.id
                    },
                    raw: true
                });

                return existTask;

            } else {
                const createTask = Task.create(saveTaskReq);
                return createTask;

            }
        } else {
            const createTask = Task.create(saveTaskReq);
            return createTask;
        }
    }

    public async delete(id: number): Promise<void> {
        await Task.destroy({
            where: {
                id
            }
        });
    }

}
