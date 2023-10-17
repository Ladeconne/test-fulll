import { ILocation, IVehicle } from "@/Domain/Types/models";

type Vehicle = {
  createVehicle: (vehicle: IVehicle) => void;
  initiateVehicle: (plateNumber, fleet) => IVehicle;
  parkVehicle: (vehicle: IVehicle, location: ILocation) => void;
  getVehicleByPlateNumber: (plateNumber: string) => Promise<IVehicle>;
  addFleetIdToVehicle: (vehicle: IVehicle, fleetId: string) => void;
};

export const Vehicle: (db: any) => Vehicle = (db) => {
  const initiateVehicle = (plateNumber, fleet) => {
    return db.initiateVehicle(plateNumber, fleet);
  };

  const createVehicle = (vehicle) => {
    db.createVehicle(vehicle);
  };

  const parkVehicle = (vehicle, location) => {
    db.parkVehicle(vehicle, location);
  };

  const getVehicleByPlateNumber = async (plateNumber) => {
    return db.getVehicleByPlateNumber(plateNumber);
  };

  const addFleetIdToVehicle = (vehicle, fleetId) => {
    db.addFleetIdToVehicle(vehicle, fleetId);
  };

  return {
    initiateVehicle,
    createVehicle,
    parkVehicle,
    getVehicleByPlateNumber,
    addFleetIdToVehicle,
  };
};
