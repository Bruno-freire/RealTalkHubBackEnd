import { User } from "@modules/accounts/infra/entities/user";
import { IUserRepository } from "@modules/accounts/interfaces/IUserRepository";
import { container, inject, injectable } from "tsyringe";

@injectable()
class ShowUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ) {}

    async execute(): Promise<User[]> {
        try {
            const users = await this.usersRepository.showUsers();
            return users;
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export const showUsersUseCase = container.resolve(ShowUsersUseCase);