import { container, inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/accounts/interfaces/IUserRepository";
import { IMessageRepository } from "@modules/accounts/interfaces/IMessagesRespository";
import { Message } from "@modules/accounts/infra/entities/message";
import { ITopicsRepository } from "@modules/accounts/interfaces/ITopicsRepository";
import { User } from "@modules/accounts/infra/entities/user";
import { Topic } from "@modules/accounts/infra/entities/topic";

@injectable()
class CreateMessageUseCase {
    constructor(
        @inject("MessagesRepository")
        private MessagesRepository: IMessageRepository,
        @inject("TopicsRepository")
        private topicsRepository: ITopicsRepository,
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ) {}

    async execute({content, author, topic}: {content: string, author: User, topic: Topic}): Promise<Message> {
        try {
            const [userBd, topicBd] = await Promise.all([
                this.usersRepository.findByEmail(author.email),
                this.topicsRepository.showTopic(topic.id)
            ]);
            const message = await this.MessagesRepository.createMessage({content, author: userBd, topic: topicBd})
            return message
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export const createMessageUseCase = container.resolve(CreateMessageUseCase)