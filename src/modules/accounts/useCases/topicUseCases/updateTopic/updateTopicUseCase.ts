import { container, inject, injectable } from "tsyringe";
import { ITopicsRepository } from "@modules/accounts/interfaces/ITopicsRepository";
import { Topic } from "@modules/accounts/infra/entities/topic";

@injectable()
class UpdateTopicUseCase {
    constructor(
        @inject("TopicsRepository")
        private topicsRepository: ITopicsRepository,
    ) {}

    async execute(topic: Topic): Promise<Topic> {
        try {
            await this.topicsRepository.updateTopic(topic)
            return this.topicsRepository.showTopic(topic.id)
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export const updateTopicUseCase = container.resolve(UpdateTopicUseCase)