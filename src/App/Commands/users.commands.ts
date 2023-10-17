import { User } from "@/Domain/Entities/users.models";
import * as userHandler from "@/App/Handlers/users.handlers";
import { db } from "@/Infra/db";

export const createUser = () => {
  const user = User(db).initiateUser();
  userHandler.handleCreateUserCommand(user);

  return user;
};
