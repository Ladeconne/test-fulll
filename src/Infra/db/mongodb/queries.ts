import Fleet from "./repositories/Fleet.models";
import User from "./repositories/User.models";
import Vehicle from "./repositories/Vehicle.models";

export const getUserById = async (userId) => {
  return User.findOne({ id: userId });
};

export const fetchFleetById = async (fleetId) => {
  return Fleet.findOne({ id: fleetId });
};

export const getVehicleByPlateNumber = async (plateNumber) => {
  return Vehicle.findOne({ plateNumber });
};
