import mongoose from "mongoose";
import { mongo } from "@/App/Configs/mongo";

export default async () => {
  console.log("Init mongo connection...", mongo.url);
  const instance = await mongoose.connect(mongo.url, {
    user: mongo.user,
    pass: mongo.password,
    dbName: mongo.dbName,
  });

  console.log("Mongo connected!");
  return instance;
};
