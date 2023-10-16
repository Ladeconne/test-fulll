import { Fleet } from "@/Domain/Entities/fleets.models";
import { db } from "@/Infra/db";

export const handleCreateFleetCommand = ({ userId, fleetId }) => {
  try {
    Fleet(db).createFleet(userId, fleetId);
    return fleetId;
  } catch (error: any) {
    console.error(`Error creating fleet: ${error.message}`);
  }
};

export const handleRegisterVehicleCommand = ({ fleet, vehicle }) => {
  try {
    Fleet(db).registerVehicle(fleet, vehicle);
  } catch (error: any) {
    console.error(`Error registering vehicle: ${error.message}`);
  }
};

export const fetchFleetById = (fleetId) => {
  return Fleet(db).fetchFleetById(fleetId);
};
