import { User } from "@/Domain/Entities/users.models";
import * as userHandler from "@/App/Handlers/users.handlers";
import { db } from "@/Infra/db";

export const createUser = () => {
  const userId = User(db).initiateUser();
  userHandler.handleCreateUserCommand(userId);

  return userId;
};
