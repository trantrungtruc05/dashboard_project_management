import { ISectionsRepository } from "./interface/ISectionsRepository";
import { Sections } from "../entity/Sections";
import { SaveSectionReq } from "../request/SaveSectionReq";

export class SectionsRepository implements ISectionsRepository {

    public async findByProject(projectId: number): Promise<any> {
        const section = await Sections.findAll<Sections>({
            where: {
                project: projectId
            },
            raw: true
        });

        return section;
    }

    public findAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async save(saveSectionReq: SaveSectionReq): Promise<void> {
        if (saveSectionReq.id) {

            const count = await Sections.count({
                where: {
                    id: saveSectionReq.id
                }
            });

            if (count > 0) {
                await Sections.update<Sections>(saveSectionReq, { where: { id: saveSectionReq.id } });

                const existSection = await Sections.findOne<Sections>({
                    where: {
                        id: saveSectionReq.id
                    },
                    raw: true
                });

                return existSection;

            } else {
                const createSection = Sections.create(saveSectionReq);
                return createSection;

            }
        } else {
            const createSection = Sections.create(saveSectionReq);
            return createSection;
        }
    }

    public async delete(id: number): Promise<void> {
        await Sections.destroy({
            where: {
                id
            }
        });
    }
}
