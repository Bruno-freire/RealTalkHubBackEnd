import { Message } from "../infra/entities/message";

export interface IMessageRepository {
    createMessage({content, author, topic}): Promise<Message>
    updateMessage({content, author, topic, messageId}): Promise<Message>
    getMessagesByTopic(topicId: string): Promise<Message[]>
}