import { User } from "@modules/accounts/infra/entities/user";
import { IUserRepository } from "@modules/accounts/interfaces/IUserRepository";
import { container, inject, injectable } from "tsyringe";

@injectable()
class ShowUserWithTopicsUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ) {}

    async execute(email: string): Promise<User> {
        try {
            const user = await this.usersRepository.userWithTopics(email);
            return user;
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export const showUserWithTopicsUseCase = container.resolve(ShowUserWithTopicsUseCase);