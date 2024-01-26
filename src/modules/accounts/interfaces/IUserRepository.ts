import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/entities/user";

export interface IUserRepository {
    showUsers(): Promise<User[]>
    createUser(data: ICreateUserDTO): Promise<User>
    updatedUser(user: User): Promise<User>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
    userWithTopics(email: string): Promise<User>
}