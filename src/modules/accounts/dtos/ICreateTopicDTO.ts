export interface ICreateTopicDTO {
    title: string
    messages: Array<{
        content: string,
        author: string
    }>
}