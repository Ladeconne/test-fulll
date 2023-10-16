import { IVehicle } from "@/Domain/Types/models";
import { Model, model, Schema } from "mongoose";

const vehicleSchema: Schema<IVehicle> = new Schema<IVehicle>(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    location: {
      type: Schema.Types.Mixed,
      required: false,
    },
    plateNumber: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    collection: "vehicles",
  }
);

const Vehicle: Model<IVehicle> = model<IVehicle>("Vehicle", vehicleSchema);

export default Vehicle;
