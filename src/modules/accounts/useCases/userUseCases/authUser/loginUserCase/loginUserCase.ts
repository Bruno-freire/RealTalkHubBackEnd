import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/entities/user";
import { IUserRepository } from "@modules/accounts/interfaces/IUserRepository";
import { AppError } from "@shared/errors/AppError";
import { container, inject, injectable } from "tsyringe";
import { z } from "zod"
import bcrypt from 'bcrypt';
import { ILoginUserDTO } from "@modules/accounts/dtos/ILoginUserDTO";

const validationDatas = z.object({
    email: z.string().trim().toLowerCase().email(),
    password: z.string().trim().toLowerCase().min(8).refine((password) => (password.match(/\d/g) || []).length >= 2, {
        message: 'The password must contain at least two numbers.',
    }).refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
        message: 'The password must contain at least one special character.',
    })
});

@injectable()
class LoginUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository,
    ) {}

    private async validateLoginData(email: string, password: string): Promise<{ email: string; password: string }> {
        const validatedData = validationDatas.parse({ email, password }) as ILoginUserDTO;
        return validatedData;
    }

    async execute(email: string, password: string): Promise<User> {
        try {
            const validatedData = await this.validateLoginData(email, password);
            
            const user = await this.usersRepository.findByEmail(validatedData.email)
            
            if(!user){
                throw new AppError("User doesn't exist!", 400)
            }
            
            const isPasswordValid = await bcrypt.compare(validatedData.password, user.password);
            
            if (!isPasswordValid) {
                throw new AppError("Invalid password!", 401);
            }

            return user
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export const loginUserUseCase = container.resolve(LoginUserUseCase)