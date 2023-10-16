import { IFleet } from "@/Domain/Types/models";
import { Model, model, Schema } from "mongoose";

const fleetSchema: Schema<IFleet> = new Schema<IFleet>(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
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

const Fleet: Model<IFleet> = model<IFleet>("Fleet", fleetSchema);

export default Fleet;
