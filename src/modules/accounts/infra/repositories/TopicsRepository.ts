import { Repository } from "typeorm";
import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

import { User } from "../entities/user";
import { ITopicsRepository } from "@modules/accounts/interfaces/ITopicsRepository";
import { Topic } from "../entities/topic";
import { Message } from "../entities/message";

export class TopicsRepository implements ITopicsRepository {
        private topicRepository: Repository<Topic>
        private messageRepository: Repository<Message>

    constructor() {
        this.topicRepository = AppDataSource.getRepository(Topic)
        this.messageRepository = AppDataSource.getRepository(Message)
    }

    async showTopics(): Promise<Topic[]> {
        try {
            return await this.topicRepository.find()
        } catch (error) {
            return Promise.reject(error)
        }
    }
    
    async showTopic(id: string): Promise<Topic> {
        try {
            return await this.topicRepository.findOne({where: { id }, relations: ["messages"]})
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async createTopic(title: string, user: User): Promise<Topic> {
        try {
            return await this.topicRepository.save({title, user})
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async updateTopic(topic: Topic): Promise<Topic> {
        try {
            await this.topicRepository.update({id: topic.id}, topic)
            return await this.topicRepository.findOne({where: { id: topic.id}})
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async deleteTopic(id: string): Promise<Topic> {
        try {
            const topicDelete = await this.topicRepository.findOne( { where: { id }, relations: ["messages"] } )
            
            await this.topicRepository.delete(id)
            return topicDelete
        } catch (error) {
            return Promise.reject(error)
        }
    }
}