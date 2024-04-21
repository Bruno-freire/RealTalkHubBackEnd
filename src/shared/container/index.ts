
// import { AuthenticationRepository } from "@modules/accounts/infra/repositories/AuthenticationRepository";
import { MessageRepository } from "@modules/accounts/infra/repositories/MessagesRepository";
import { TopicsRepository } from "@modules/accounts/infra/repositories/TopicsRepository";
import { UserRepository } from "@modules/accounts/infra/repositories/UsersRepository";
import { IMessageRepository } from "@modules/accounts/interfaces/IMessagesRespository";
// import { IAuthenticationRepository } from "@modules/accounts/interfaces/IAuthenticationRepository";
import { ITopicsRepository } from "@modules/accounts/interfaces/ITopicsRepository";
import { IUserRepository } from "@modules/accounts/interfaces/IUserRepository";

import { container } from "tsyringe";


container.registerSingleton<IUserRepository>(
    "UsersRepository", UserRepository
)

// container.registerSingleton<IAuthenticationRepository>(
//     "AuthenticationRepository", AuthenticationRepository 
// )

container.registerSingleton<IMessageRepository>(
    "MessagesRepository", MessageRepository
)

container.registerSingleton<ITopicsRepository>(
    "TopicsRepository", TopicsRepository
)