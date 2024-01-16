import { container, inject, injectable } from "tsyringe";
import { ITopicsRepository } from "@modules/accounts/interfaces/ITopicsRepository";
import { Topic } from "@modules/accounts/infra/entities/topic";

@injectable()
class ShowTopicsUseCase {
    constructor(
        @inject("TopicsRepository")
        private topicsRepository: ITopicsRepository,
    ) {}

    async execute(): Promise<Topic[]> {
        try {
            return await this.topicsRepository.showTopics()
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export const showTopicsUseCase = container.resolve(ShowTopicsUseCase)