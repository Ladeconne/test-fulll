import { Vehicle } from "@/Domain/Entities/vehicles.models";
import { db } from "@/Infra/db";

export const fetchVehicleByPlateNumber = (plateNumber) => {
  return Vehicle(db).getVehicleByPlateNumber(plateNumber);
};
