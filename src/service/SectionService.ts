import { SectionsRepository } from "../repository/SectionsRepository";
import { SaveSectionReq } from "../request/SaveSectionReq";

export class SectionService {

    public async getByProject(projectId: number): Promise<any> {
        const sectionRepository = new SectionsRepository();

        const section = await sectionRepository.findByProject(projectId);
        return section;
    }

    public async saveOrUpdate(saveSectionReq: SaveSectionReq): Promise<any> {
        const sectionRepository = new SectionsRepository();

        const section = await sectionRepository.save(saveSectionReq);
        return section;
    }

    public async delete(id: number): Promise<void> {
        const sectionRepository = new SectionsRepository();
        await sectionRepository.delete(id);
    }
}
