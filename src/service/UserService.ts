import jsonwebtoken from "jsonwebtoken";
import { UsersRepository } from "../repository/UsersRepository";
import { SaveUserReq } from "../request/SaveUserReq";

export class UserService {

    public async getAll(): Promise<any> {
        const userRepo = new UsersRepository();

        const user = await userRepo.findAll();
        return user;
    }

    public async getById(id: number): Promise<any> {
        const userRepo = new UsersRepository();

        const user = await userRepo.findById(id);
        return user;
    }

    public async getByUsername(username: string): Promise<any> {
        const userRepo = new UsersRepository();

        const user = await userRepo.findByUsername(username);
        return user;
    }

    public async saveOrUpdate(saveUserReq: SaveUserReq): Promise<any> {
        const userRepo = new UsersRepository();

        const user = await userRepo.save(saveUserReq);
        return user;
    }

    public async delete(id: number): Promise<void> {
        const userRepo = new UsersRepository();
        await userRepo.delete(id);
    }

    public async getUserFromToken(header: string): Promise<void> {
        const token = header.replace("Bearer", "").trim();
        const decodeToken = jsonwebtoken.verify(token, process.env.KEY_DECRYPT_TOKEN);
        const uid = (decodeToken as any).uid;

        const user = await this.getByUsername(uid);

        return user;

    }
}
