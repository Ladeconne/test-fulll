import { isObjectIdOrHexString } from "mongoose";
import Fleet from "./repositories/Fleet.models";
import User from "./repositories/User.models";
import Vehicle from "./repositories/Vehicle.models";

export const getUserById = async (userId) => {
  if (!isObjectIdOrHexString(userId)) return null;
  return User.findOne({ _id: userId });
};

export const fetchFleetById = async (fleetId) => {
  return Fleet.findOne({ _id: fleetId }).populate("vehicles");
};

export const getVehicleByPlateNumber = async (plateNumber) => {
  return Vehicle.findOne({ plateNumber });
};
