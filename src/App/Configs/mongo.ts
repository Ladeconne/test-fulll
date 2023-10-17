require("dotenv").config();

export const mongo = {
  url: process.env.MONGO_URL || "",
  dbName: process.env.MONGO_DB_NAME || "",
  user: process.env.MONGO_USER || "",
  password: process.env.MONGO_PASSWORD || "",
};
