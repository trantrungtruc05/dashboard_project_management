import { TeamsRepository } from "../repository/TeamsRepository";
import { SaveTeamReq } from "../request/SaveTeamReq";

export class TeamService {

    public async getAll(): Promise<any> {
        const teamRepo = new TeamsRepository();

        const team = await teamRepo.findAll();
        return team;
    }

    public async getById(id: number): Promise<any> {
        const teamRepo = new TeamsRepository();

        const team = await teamRepo.findById(id);
        return team;
    }

    public async getByManager(userId: number): Promise<any> {
        const teamRepo = new TeamsRepository();

        const team = await teamRepo.findByUser(userId);
        return team;
    }

    public async saveOrUpdate(saveTeamReq: SaveTeamReq): Promise<any> {
        const teamRepo = new TeamsRepository();

        const team = await teamRepo.save(saveTeamReq);
        return team;
    }

    public async delete(id: number): Promise<void> {
        const teamRepo = new TeamsRepository();
        await teamRepo.delete(id);
    }
}
