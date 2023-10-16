import { IUser } from "@/Domain/Types/models";
import { Model, model, ObjectId, Schema } from "mongoose";

const userSchema: Schema<IUser> = new Schema<IUser>(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    fleets: [
      {
        type: Schema.Types.ObjectId,
        ref: "Fleet",
        required: true,
        default: [],
      },
    ],
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    collection: "users",
  }
);

const User: Model<IUser> = model<IUser>("User", userSchema);

export default User;
