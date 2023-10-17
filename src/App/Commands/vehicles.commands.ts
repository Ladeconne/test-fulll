import { Vehicle } from "../../Domain/Entities/vehicles.models";
import { handleCreateVehicleCommand } from "../Handlers/vehicles.handlers";
import { db } from "@/Infra/db";

export const createVehicle = (plateNumber, fleet) => {
  const vehicle = Vehicle(db).initiateVehicle(plateNumber, fleet);

  handleCreateVehicleCommand(vehicle);

  return vehicle;
};
