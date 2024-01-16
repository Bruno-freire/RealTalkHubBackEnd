import { IUserRepository } from "@modules/accounts/interfaces/IUserRepository";
import { Repository } from "typeorm";
import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

import { User } from "../entities/user";

export class UserRepository implements IUserRepository {
        private userRepository: Repository<User>

    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    async showUsers(): Promise<User[]> {
        try {
            const users = await this.userRepository.find()
            return users
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async createUser(data: ICreateUserDTO): Promise<User> {
        try {
            return await this.userRepository.save(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async updatedUser(user: User): Promise<User> {
        try {
            return await this.userRepository.save(user) 
        } catch (error) {
            return Promise.reject(error)
        }   
    }

    async findByEmail(email: string): Promise<User> {
        try {
            const user = await this.userRepository.findOne({where: { email }})
            return user
        } catch (error) {
            return Promise.reject(error)
        }
    }
}