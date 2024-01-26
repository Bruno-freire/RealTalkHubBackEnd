import { IUserRepository } from "@modules/accounts/interfaces/IUserRepository";
import { container, inject, injectable } from "tsyringe";

@injectable()
class ShowUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository,
    ) {}

    async execute(email: string) {
        try {
            const user = await this.usersRepository.findByEmail(email)
            return user
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export const showUserUseCase = container.resolve(ShowUserUseCase)