 import { CreateUserUseCase } from "./CreateUserUseCase";
 import  { CreateUserController } from "./CreateUserController";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";

 const postgresUsersRepository = new PostgresUsersRepository;
 const mailTrapMailProvider = new MailTrapMailProvider;

 const createUserUseCase = new CreateUserUseCase(
   postgresUsersRepository,
   mailTrapMailProvider,
 )

 const createUserController = new CreateUserController(
  createUserUseCase,
 );

 export { createUserUseCase, createUserController};