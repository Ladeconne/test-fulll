import { IVehicle } from "@/Domain/Types/models";
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

export const createFleet = async (fleet: Fleet, userId: any) => {
  fleet.userId = userId;
  fleets.push(fleet);
};

export const registerVehicleToFleet = async (fleetId, vehicle: Vehicle) => {
  const fleet = fleets.find((fleet) => fleet.id === fleetId);
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
  const parkedVehicle = vehicles.find((vhc) => vhc.id === vehicle.id);
  if (!parkedVehicle) {
    throw new Error("Fleet not found");
  }
  parkedVehicle.location = location;
};

export const getUserById = async (userId) =>
  users.find((user) => user.id === userId);

export const fetchFleetById = async (fleetId) =>
  fleets.find((fleet) => fleet.id === fleetId);

export const getVehicleByPlateNumber = async (plateNumber) =>
  vehicles.find((vehicle) => vehicle.plateNumber === plateNumber);

export const addFleetIdToVehicle = async (vehicle: IVehicle, fleetId: any) => {
  const vehicleToBeUpdated = vehicles.find((vhc) => vhc.id === vehicle.id);
  if (!vehicleToBeUpdated) return console.error("Vehicle not found");
  vehicleToBeUpdated.id = fleetId;
};
