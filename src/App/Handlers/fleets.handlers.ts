import { Fleet } from "@/Domain/Entities/fleets.models";
import { db } from "@/Infra/db";

export const handleCreateFleetCommand = (fleet) => {
  try {
    Fleet(db).createFleet(fleet);
  } catch (error: any) {
    console.error(`Error creating fleet: ${error.message}`);
  }
};

export const handleRegisterVehicleCommand = (fleet, vehicle) => {
  try {
    Fleet(db).registerVehicle(fleet, vehicle.id);
  } catch (error: any) {
    console.error(`Error registering vehicle: ${error.message}`);
  }
};

export const fetchFleetById = async (fleetId) => {
  return Fleet(db).fetchFleetById(fleetId);
};
