import { container, inject, injectable } from "tsyringe";
import { ITopicsRepository } from "@modules/accounts/interfaces/ITopicsRepository";
import { Topic } from "@modules/accounts/infra/entities/topic";

@injectable()
class ShowTopicUseCase {
    constructor(
        @inject("TopicsRepository")
        private topicsRepository: ITopicsRepository,
    ) {}

    async execute(id: string): Promise<Topic> {
        try {
            return await this.topicsRepository.showTopic(id)
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export const showTopicUseCase = container.resolve(ShowTopicUseCase)