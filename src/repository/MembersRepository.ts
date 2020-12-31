import { Members } from "../entity/Members";
import { SaveMemberReq } from "../request/SaveMemberReq";
import { IMembersRepository } from "./interface/IMembersRepository";

export class MembersRepository implements IMembersRepository {

    public async findAll(): Promise<any> {
        // tslint:disable-next-line:prefer-const
        let member = await Members.findAll<Members>({
            raw: true,
        });
        return member;
    }

    public findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async save(saveMemberReq: SaveMemberReq): Promise<void> {
        if (saveMemberReq.id) {

            const count = await Members.count({
                where: {
                    id: saveMemberReq.id,
                },
            });

            if (count > 0) {
                await Members.update<Members>(saveMemberReq, { where: { id: saveMemberReq.id } });

                const existMember = await Members.findOne<Members>({
                    where: {
                        id: saveMemberReq.id,
                    },
                    // tslint:disable-next-line:object-literal-sort-keys
                    raw: true,
                });

                return existMember;

            } else {
                const createMember = Members.create(saveMemberReq);
                return createMember;

            }
        } else {
            const createMember = Members.create(saveMemberReq);
            return createMember;
        }
    }

    public async delete(id: number): Promise<void> {
        await Members.destroy({
            where: {
                id,
            },
        });
    }

}
