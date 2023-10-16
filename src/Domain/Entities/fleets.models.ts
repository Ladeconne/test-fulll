import { IFleet, IVehicle } from "../Types/models";

type Fleet = {
  initiateFleet: () => string;
  createFleet: (fleetId: string, userId: string) => void;
  fetchFleetById: (fleetId: string) => Promise<IFleet>;
  registerVehicle: (fleet: IFleet, vehicle: IVehicle) => void;
};

export const Fleet: (db?: any) => Fleet = (db) => {
  const initiateFleet = () => {
    return db.initiateFleet();
  };

  const createFleet = (fleetId: string, userId: string) => {
    db.createFleet(fleetId, userId);
  };

  const fetchFleetById = async (fleetId: string) => {
    return db.fetchFleetById(fleetId);
  };

  const registerVehicle = (fleet: IFleet, vehicle: IVehicle) => {
    if (!fleet.vehicles.find((vehicle) => vehicle.id === vehicle.id)) {
      db.registerVehicleToFleet(fleet.id, vehicle);
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
