import { User } from "@/Domain/Entities/users.models";
import { db } from "@/Infra/db";

export const handleCreateUserCommand = (userId) => {
  try {
    User(db).createUser(userId);
  } catch (error: any) {
    console.error(`Error creating user: ${error.message}`);
  }
};

export const getUserById = (userId) => {
  return User(db).getUserById(userId);
};
