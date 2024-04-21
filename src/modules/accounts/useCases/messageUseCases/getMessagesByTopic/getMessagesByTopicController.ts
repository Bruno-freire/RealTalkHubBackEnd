import { container, inject, injectable } from "tsyringe";
import { IMessageRepository } from "@modules/accounts/interfaces/IMessagesRespository";
import { Message } from "@modules/accounts/infra/entities/message";

@injectable()
class GetMessageByTopicUseCase {
    constructor(
        @inject("MessagesRepository")
        private MessagesRepository: IMessageRepository
    ) {}

    async execute(id: string): Promise<Message[]> {
        try {
            const messages = await this.MessagesRepository.getMessagesByTopic(id)
            return messages
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export const getMessageByTopicUseCase = container.resolve(GetMessageByTopicUseCase)