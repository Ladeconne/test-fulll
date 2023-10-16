import { Fleet } from "./repositories/Fleet.class";
import { User } from "./repositories/User.class";
import { Vehicle } from "./repositories/Vehicle.class";

const users: User[] = [];
const fleets: Fleet[] = [];
const vehicles: Vehicle[] = [];

export const initiateUser = () => {
  return new User(users.length + 1);
};

export const createUser = (user: User) => {
  users.push(user);
};

export const initiateFleet = () => {
  return new Fleet(fleets.length + 1);
};

export const createFleet = async (fleet: Fleet, userId) => {
  fleet.userId = userId;
  fleets.push(fleet);
};

export const registerVehicleToFleet = async (fleetId, vehicle: Vehicle) => {
  const fleet = fleets.find((fleet) => fleet.fleetId === fleetId);
  if (!fleet) {
    throw new Error("Fleet not found");
  }
  fleet.vehicles.push(vehicle);
};

export const initiateVehicle = () => {
  return new Vehicle(vehicles.length + 1);
};

export const createVehicle = async (vehicle, plateNumber) => {
  vehicle.plateNumber = plateNumber;
  vehicles.push(vehicle);
};

export const parkVehicle = async (vehicle: Vehicle, location) => {
  const parkedVehicle = vehicles.find(
    (vehicle) => vehicle.vehicleId === vehicle.vehicleId
  );
  if (!parkedVehicle) {
    throw new Error("Fleet not found");
  }
  parkedVehicle.location = location;
};
