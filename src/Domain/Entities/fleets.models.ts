import mongoose from "mongoose";
import { IFleet, IVehicle } from "../Types/models";

type Fleet = {
  initiateFleet: (userId: any) => IFleet;
  createFleet: (fleet: IFleet) => void;
  fetchFleetById: (fleetId: string) => Promise<IFleet>;
  registerVehicle: (fleet: IFleet, vehicleId: any) => void;
};

export const Fleet: (db?: any) => Fleet = (db) => {
  const initiateFleet = (userId) => {
    return db.initiateFleet(userId);
  };

  const createFleet = (fleet: IFleet) => {
    db.createFleet(fleet);
  };

  const fetchFleetById = async (fleetId: string) => {
    return db.fetchFleetById(fleetId);
  };

  const registerVehicle = (fleet: IFleet, vehicleId: any) => {
    if (
      !fleet.vehicles.find((vehicle) =>
        vehicle.equals(new mongoose.Types.ObjectId(vehicleId))
      )
    ) {
      db.registerVehicleToFleet(fleet, vehicleId);
    } else {
      throw new Error("Vehicle already registered in this fleet");
    }
  };

  return {
    initiateFleet,
    createFleet,
    fetchFleetById,
    registerVehicle,
  };
};
