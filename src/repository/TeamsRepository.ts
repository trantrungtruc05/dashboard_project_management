import { Teams } from "../entity/Teams";
import { SaveTeamReq } from "../request/SaveTeamReq";
import { ITeamsRepository } from "./interface/ITeamsRepository";

export class TeamsRepository implements ITeamsRepository {

    public async findByUser(userId: number): Promise<any> {
        const team = await Teams.findAll<Teams>({
            raw: true,
            where: {
                manager: userId,
            }

        });

        return team;
    }

    public async findAll(): Promise<any> {
        const team = await Teams.findAll<Teams>({
            raw: true
        });
        return team;
    }

    public async findById(id: number): Promise<any> {
        const team = await Teams.findAll<Teams>({
            where: {
                id
            },
            raw: true
        });

        return team;
    }

    public async save(saveTeamReq: SaveTeamReq): Promise<void> {
        if (saveTeamReq.id) {

            const count = await Teams.count({
                where: {
                    id: saveTeamReq.id
                }
            });

            if (count > 0) {
                await Teams.update<Teams>(saveTeamReq, { where: { id: saveTeamReq.id } });

                const existTeam = await Teams.findOne<Teams>({
                    where: {
                        id: saveTeamReq.id
                    },
                    raw: true
                });

                return existTeam;

            } else {
                const createTeam = Teams.create(saveTeamReq);
                return createTeam;

            }
        } else {
            const createTeam = Teams.create(saveTeamReq);
            return createTeam;
        }
    }

    public async delete(id: number): Promise<void> {
        await Teams.destroy({
            where: {
                id
            }
        });
    }

}
