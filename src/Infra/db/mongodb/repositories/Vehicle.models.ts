import { IVehicle } from "@/Domain/Types/models";
import { Model, model, Schema } from "mongoose";

const vehicleSchema: Schema<IVehicle> = new Schema<IVehicle>(
  {
    location: {
      type: Schema.Types.Mixed,
      required: false,
    },
    plateNumber: {
      type: Schema.Types.String,
      required: true,
    },
    fleetId: {
      type: Schema.Types.ObjectId,
      ref: "Fleet",
      required: false,
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

vehicleSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

vehicleSchema.set("toObject", { virtuals: true });
vehicleSchema.set("toJSON", { virtuals: true });

const Vehicle: Model<IVehicle> = model<IVehicle>("Vehicle", vehicleSchema);

export default Vehicle;
