import { IProjectRepository } from "./interface/IProjectRepository";
import { Project } from "../entity/Project";
import { SaveProjectReq } from "../request/SaveProjectReq";
import { sequelize } from "../sequelize";

export class ProjectRepository implements IProjectRepository {

    public async findByTeam(teamId: number): Promise<any> {
        const project = await Project.findAll<Project>({
            where: {
                teamid: teamId
            },
            raw: true
        });

        return project;
    }

    public async findByUser(userId: number): Promise<any> {
        const project = await Project.findAll<Project>({
            where: {
                manager: userId
            },
            raw: true
        });

        return project;
    }

    public async findAll(): Promise<any> {
        const project = await Project.findAll<Project>({
            raw: true
        });
        return project;
    }

    public async findAllByUser(userId: number): Promise<any> {


        const query = "with t as (select  *, json_array_elements(doer::json)::varchar as target from projects union  select  *, json_array_elements(manager::json)::varchar as target from projects ) select * from t where target = :userId;";

        const project = await sequelize.query(query,
            { replacements: { userId: userId.toString() } }
        );

        return project[0];
    }

    public async findById(id: number): Promise<any> {
        const project = await Project.findAll<Project>({
            where: {
                id
            },
            raw: true
        });

        return project;
    }

    public async save(saveProjectReq: SaveProjectReq): Promise<void> {
        if (saveProjectReq.id) {

            const count = await Project.count({
                where: {
                    id: saveProjectReq.id
                }
            });

            if (count > 0) {
                await Project.update<Project>(saveProjectReq, { where: { id: saveProjectReq.id } });

                const existProject = await Project.findOne<Project>({
                    where: {
                        id: saveProjectReq.id
                    },
                    raw: true
                });

                return existProject;

            } else {
                const createProject = Project.create(saveProjectReq);
                return createProject;

            }
        } else {
            const createProject = Project.create(saveProjectReq);
            return createProject;
        }
    }

    public async delete(id: number): Promise<void> {
        await Project.destroy({
            where: {
                id
            }
        });
    }
}
