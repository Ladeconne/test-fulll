import Fleet from "./repositories/Fleet.models";
import User from "./repositories/User.models";
import Vehicle from "./repositories/Vehicle.models";

export const initiateUser = () => {
  return new User();
};

export const createUser = async (user) => {
  await user.save();
};

export const initiateFleet = () => {
  return new Fleet();
};

export const createFleet = async (fleet, userId) => {
  fleet.userId = userId;
  await fleet.save();
};

export const registerVehicleToFleet = async (fleetId, vehicle) => {
  const fleet = await Fleet.findOne({ id: fleetId });
  if (!fleet) {
    throw new Error("Fleet not found");
  }
  fleet.vehicles.push(vehicle);
  await fleet.save();
};

export const initiateVehicle = () => {
  return new Vehicle();
};

export const createVehicle = async (vehicle, plateNumber) => {
  vehicle.plateNumber = plateNumber;
  await vehicle.save();
};

export const parkVehicle = async (vehicle, location) => {
  vehicle.location = location;
  await vehicle.save();
};
