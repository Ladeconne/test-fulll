import { ILocation, IVehicle } from "@/Domain/Types/models";

type Vehicle = {
  createVehicle: (vehicleId: any, plateNumber: string) => void;
  initiateVehicle: () => any;
  parkVehicle: (vehicle: IVehicle, location: ILocation) => void;
  getVehicleByPlateNumber: (plateNumber: string) => Promise<IVehicle>;
};

export const Vehicle: (db: any) => Vehicle = (db) => {
  const initiateVehicle = () => {
    return db.initiateVehicle();
  };

  const createVehicle = (vehicleId, plateNumber) => {
    db.createVehicle(vehicleId, plateNumber);
  };

  const parkVehicle = (vehicle, location) => {
    db.parkVehicle(vehicle, location);
  };

  const getVehicleByPlateNumber = async (plateNumber) => {
    return db.getVehicleByPlateNumber(plateNumber);
  };

  return {
    initiateVehicle,
    createVehicle,
    parkVehicle,
    getVehicleByPlateNumber,
  };
};
