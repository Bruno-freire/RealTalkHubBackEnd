import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/entities/user";
import { IUserRepository } from "@modules/accounts/interfaces/IUserRepository";
import { AppError } from "@shared/errors/AppError";
import { container, inject, injectable } from "tsyringe";
import { z } from "zod"
import bcrypt from 'bcrypt';

const validationDatas = z.object({
    name: z.string(),
    email: z.string().trim().toLowerCase().email(),
    password: z.string().trim().toLowerCase().min(8).refine((password) => (password.match(/\d/g) || []).length >= 2, {
        message: 'The password must contain at least two numbers.',
      }).refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
        message: 'The password must contain at least one special character.',
      })
})

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository,
        // @inject("AuthenticationRepository")
        // private authenticationRepository: IAuthenticationRepository
    ) {}

    private async validateUserData(data: ICreateUserDTO): Promise<ICreateUserDTO> {
        const validatedData = validationDatas.parse(data) as ICreateUserDTO;
        return validatedData;
    }

    private async checkIfUserExists(email: string): Promise<void> {
        const existingUser = await this.usersRepository.findByEmail(email);
        if (existingUser) {
            throw new AppError("E-mail already registered", 400);
        }
    }

    private async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    private async createUser(data: ICreateUserDTO): Promise<User> {
        const user = await this.usersRepository.createUser(data);

        // const authentication = await this.authenticationRepository.createAuthentication(user.id);
        // user.authentication = authentication;
        // await this.usersRepository.updatedUser(user);
        
        return user;
    }

    async execute(data: ICreateUserDTO): Promise<User> {
        try {
            const validatedData = await this.validateUserData(data);
            await this.checkIfUserExists(validatedData.email);

            validatedData.password = await this.hashPassword(validatedData.password);

            const user = await this.createUser(validatedData);

            return user;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export const createUserUseCase = container.resolve(CreateUserUseCase)