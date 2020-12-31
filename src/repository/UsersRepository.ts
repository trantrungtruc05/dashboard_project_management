import { Users } from "../entity/Users";
import { SaveUserReq } from "../request/SaveUserReq";
import { IUsersRepository } from "./interface/IUsersRepository";

export class UsersRepository implements IUsersRepository {

    public async findAll(): Promise<any> {
        const user = await Users.findAll<Users>({
            raw: true,
        });
        return user;
    }

    public async findById(id: number): Promise<any> {
        const user = await Users.findOne<Users>({
            raw: true,
            where: {
                id,
            }

        });

        return user;
    }

    public async save(saveUserReq: SaveUserReq): Promise<void> {
        if (saveUserReq.id) {

            const count = await Users.count({
                where: {
                    id: saveUserReq.id,
                },
            });

            if (count > 0) {
                Users.update<Users>(saveUserReq, { where: { id: saveUserReq.id } });

                const existUser = await Users.findOne<Users>({
                    raw: true,
                    where: {
                        id: saveUserReq.id,
                    },
                });

                return existUser;

            } else {
                // tslint:disable-next-line:no-shadowed-variable
                const createUser = Users.create(saveUserReq);
                return createUser;

            }
        } else {
            // tslint:disable-next-line:no-shadowed-variable
            const createUser = Users.create(saveUserReq);
            return createUser;
        }
    }

    public async delete(id: number): Promise<void> {
        await Users.destroy({
            where: {
                id,
            },
        });
    }

    public  findByUsername = async (username: string) => {
        const user = await Users.findOne<Users>({
            raw: true,
            where: {
                username: username
            },

        });

        return user;
    }
}
