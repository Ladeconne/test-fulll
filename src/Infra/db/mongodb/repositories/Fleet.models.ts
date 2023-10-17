import { IFleet } from "@/Domain/Types/models";
import { Model, model, Schema } from "mongoose";

const fleetSchema: Schema<IFleet> = new Schema<IFleet>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    vehicles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
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
    collection: "fleets",
  }
);

fleetSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

fleetSchema.set("toObject", { virtuals: true });
fleetSchema.set("toJSON", { virtuals: true });

const Fleet: Model<IFleet> = model<IFleet>("Fleet", fleetSchema);

export default Fleet;
