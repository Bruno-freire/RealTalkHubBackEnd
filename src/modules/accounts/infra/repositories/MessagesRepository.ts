import { Repository } from "typeorm";
import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

import { User } from "../entities/user";
import { ITopicsRepository } from "@modules/accounts/interfaces/ITopicsRepository";
import { Topic } from "../entities/topic";
import { IMessageRepository } from "@modules/accounts/interfaces/IMessagesRespository";
import { Message } from "../entities/message";

export class MessageRepository implements IMessageRepository {
        private messageRepository: Repository<Message>

    constructor() {
        this.messageRepository = AppDataSource.getRepository(Message)
    }

    async createMessage({ content, author, topic }): Promise<Message> {
        try {
            const message = await this.messageRepository.save({content, author, topic})
            return message
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async getMessagesByTopic(topicId: string): Promise<Message[]> {
        const messages = await this.messageRepository.find({where: {topic: {id: topicId}}})
        return messages
    }
    
    async updateMessage({ content, author, topic, messageId }: { content: any; author: any; topic: any; messageId: any; }): Promise<Message> {
       try {
            const message = await this.messageRepository.findOne({where: { id: messageId}})
            await this.messageRepository.update(message, {author, topic, content})
            return message
       } catch (error) {
        
       } 
    }


}