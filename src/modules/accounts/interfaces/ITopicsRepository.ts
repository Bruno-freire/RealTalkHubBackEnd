import { Topic } from "../infra/entities/topic";
import { User } from "../infra/entities/user";

export interface ITopicsRepository {
    showTopics(): Promise<Topic[]>
    showTopic(id: string): Promise<Topic>
    createTopic(title: string, content: string, user: User): Promise<Topic>
    deleteTopic(id: string): Promise<Topic>
}