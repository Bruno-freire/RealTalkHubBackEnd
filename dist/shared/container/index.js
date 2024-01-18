"use strict";

var _TopicsRepository = require("../../modules/accounts/infra/repositories/TopicsRepository");
var _UsersRepository = require("../../modules/accounts/infra/repositories/UsersRepository");
var _tsyringe = require("tsyringe");
// import { AuthenticationRepository } from "@modules/accounts/infra/repositories/AuthenticationRepository";

// import { IAuthenticationRepository } from "@modules/accounts/interfaces/IAuthenticationRepository";

_tsyringe.container.registerSingleton("UsersRepository", _UsersRepository.UserRepository);

// container.registerSingleton<IAuthenticationRepository>(
//     "AuthenticationRepository", AuthenticationRepository 
// )

_tsyringe.container.registerSingleton("TopicsRepository", _TopicsRepository.TopicsRepository);