import { IUser } from "../Types/models";

type User = {
  initiateUser: () => string;
  createUser: (userId: string) => void;
  getUserById: (userId: string) => IUser;
};

export const User: (db: any) => User = (db) => {
  const initiateUser = () => {
    return db.initiateUser();
  };

  const createUser = (userId: string) => {
    db.createUser(userId);
  };

  const getUserById = (userId: string) => {
    return db.getUserById(userId);
  };

  return {
    initiateUser,
    createUser,
    getUserById,
  };
};
