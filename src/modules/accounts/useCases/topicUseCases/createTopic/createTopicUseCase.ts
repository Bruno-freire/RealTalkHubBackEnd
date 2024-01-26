import { container, inject, injectable } from "tsyringe";
import { ITopicsRepository } from "@modules/accounts/interfaces/ITopicsRepository";
import { Topic } from "@modules/accounts/infra/entities/topic";
import { IUserRepository } from "@modules/accounts/interfaces/IUserRepository";

@injectable()
class CreateTopicUseCase {
    constructor(
        @inject("TopicsRepository")
        private topicsRepository: ITopicsRepository,
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ) {}

    async execute(title: string, userID: string): Promise<Topic> {
        try {
            const id = userID
            const user = await this.usersRepository.findById(id)
            const userWithTopic = await this.usersRepository.userWithTopics(user.email)
            const topic = await this.topicsRepository.createTopic(title, user) 
            userWithTopic.topics.push(topic)
            
            await this.usersRepository.updatedUser(userWithTopic)
            return topic
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export const createTopicUseCase = container.resolve(CreateTopicUseCase)