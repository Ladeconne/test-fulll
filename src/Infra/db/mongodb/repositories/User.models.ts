import { IUser } from "@/Domain/Types/models";
import { Model, model, Schema } from "mongoose";

const userSchema: Schema<IUser> = new Schema<IUser>(
  {
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

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

const User: Model<IUser> = model<IUser>("User", userSchema);

export default User;
