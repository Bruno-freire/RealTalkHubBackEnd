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
            await this.userRepository.update( {id: user.id}, user) 
            const userUpdated = await this.userRepository.findOne({where: { email: user.email}})
            return userUpdated
        } catch (error) {
            return Promise.reject(error)
        }   
    }

    async findByEmail(email: string): Promise<User> {
        try {
            console.log(email)
            const user = await this.userRepository.findOne({where: { email }})
            return user
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async findById(id: string): Promise<User> {
        try {
            return await this.userRepository.findOne({where: { id}})
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async userWithTopics(email: string): Promise<User> {
        try {
            const user = await this.userRepository.findOne({where: {email}, relations: ["topics"]})  
            return user
        } catch (error) {
            return Promise.reject(error)
        }
    }
}