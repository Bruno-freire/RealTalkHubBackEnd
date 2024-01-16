import { User } from "../infra/entities/user"

export interface ICreateTopicDTO {
    title: string
    content: string
    userId: string
}