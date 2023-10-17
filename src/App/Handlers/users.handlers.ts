import { User } from "@/Domain/Entities/users.models";
import { db } from "@/Infra/db";

export const handleCreateUserCommand = (user) => {
  try {
    User(db).createUser(user);
  } catch (error: any) {
    console.error(`Error creating user: ${error.message}`);
  }
};

export const getUserById = async (userId) => {
  return await User(db).getUserById(userId);
};
