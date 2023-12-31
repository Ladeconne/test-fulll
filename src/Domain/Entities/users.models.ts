import { IUser } from "../Types/models";

type User = {
  initiateUser: () => IUser;
  createUser: (userId: string) => void;
  getUserById: (userId: string) => Promise<IUser>;
};

export const User: (db: any) => User = (db) => {
  const initiateUser = () => {
    return db.initiateUser();
  };

  const createUser = (userId: string) => {
    db.createUser(userId);
  };

  const getUserById = async (userId: string) => {
    return await db.getUserById(userId);
  };

  return {
    initiateUser,
    createUser,
    getUserById,
  };
};
