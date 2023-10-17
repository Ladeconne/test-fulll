import Fleet from "./repositories/Fleet.models";
import User from "./repositories/User.models";
import Vehicle from "./repositories/Vehicle.models";

export const initiateUser = () => {
  return new User();
};

export const createUser = async (user) => {
  try {
    await user.save();
  } catch (error) {
    console.error(`Error creating user: ${error}`);
  }
};

export const initiateFleet = (userId) => {
  return new Fleet({
    userId,
  });
};

export const createFleet = async (fleet) => {
  await fleet.save();
};

export const registerVehicleToFleet = async (fleet, vehicle) => {
  fleet.vehicles.push(vehicle);
  await fleet.save();
};

export const initiateVehicle = (plateNumber, fleet) => {
  return new Vehicle({ plateNumber, fleetId: fleet.id });
};

export const createVehicle = async (vehicle) => {
  await vehicle.save();
};

export const parkVehicle = async (vehicle, location) => {
  vehicle.location = location;
  await vehicle.save();
};

export const addFleetIdToVehicle = async (vehicle, fleetId) => {
  vehicle.fleetId = fleetId;
  await vehicle.save();
};
