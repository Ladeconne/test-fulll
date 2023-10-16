import { Vehicle } from "../../Domain/Entities/vehicles.models";
import { handleCreateVehicleCommand } from "../Handlers/vehicles.handlers";
import { db } from "@/Infra/db";

export const createVehicle = (plateNumber) => {
  const vehicleId = Vehicle(db).initiateVehicle();

  handleCreateVehicleCommand({ vehicleId, plateNumber });

  return vehicleId;
};
