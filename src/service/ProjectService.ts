import { ProjectRepository } from "../repository/ProjectRepository";
import { SaveProjectReq } from "../request/SaveProjectReq";

export class ProjectService {

    public async getAll(): Promise<any> {
        const projectRepo = new ProjectRepository();

        const project = await projectRepo.findAll();
        return project;
    }

    public async getById(id: number): Promise<any> {
        const projectRepo = new ProjectRepository();

        const project = await projectRepo.findById(id);
        return project;
    }

    public async getByTeam(teamId: number): Promise<any> {
        const projectRepo = new ProjectRepository();

        const project = await projectRepo.findByTeam(teamId);
        return project;
    }

    public async getByManager(userId: number): Promise<any> {
        const projectRepo = new ProjectRepository();

        const project = await projectRepo.findByUser(userId);
        return project;
    }

    public async getAllByUser(userId: number): Promise<any> {
        const projectRepo = new ProjectRepository();

        const project = await projectRepo.findAllByUser(userId);
        return project;
    }

    public async saveOrUpdate(saveProjectReq: SaveProjectReq): Promise<any> {
        const projectRepo = new ProjectRepository();

        const project = await projectRepo.save(saveProjectReq);
        return project;
    }

    public async delete(id: number): Promise<void> {
        const projectRepo = new ProjectRepository();
        await projectRepo.delete(id);
    }
}
