import { MembersRepository } from "../repository/MembersRepository";
import { SaveMemberReq } from "../request/SaveMemberReq";

export class MemberService {

    public async getAll(): Promise<any> {
        const memberRepo = new MembersRepository();

        const member = await memberRepo.findAll();
        return member;
    }

    public async saveOrUpdate(saveMemberReq: SaveMemberReq): Promise<any> {
        const memberRepo = new MembersRepository();

        const member = await memberRepo.save(saveMemberReq);
        return member;
    }

    public async delete(id: number): Promise<void> {
        const memberRepo = new MembersRepository();
        await memberRepo.delete(id);
    }
}
