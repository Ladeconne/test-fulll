import { Fleet } from "@/Domain/Entities/fleets.models";
import * as fleetHandler from "@/App/Handlers/fleets.handlers";
import * as vehicleHandler from "@/App/Handlers/vehicles.handlers";
import * as userHandler from "@/App/Handlers/users.handlers";
import * as userCommands from "@/App/Commands/users.commands";
import * as vehicleCommands from "@/App/Commands/vehicles.commands";
import { db } from "@/Infra/db";

export const createFleet = async (userId) => {
  const user = await userHandler.getUserById(userId);

  const fleet = Fleet(db).initiateFleet(
    user ? user.id : userCommands.createUser().id
  );

  fleetHandler.handleCreateFleetCommand(fleet);

  return fleet.id;
};

export const registerVehicle = async (fleetId, vehiclePlateNumber) => {
  const fleet = await fleetHandler.fetchFleetById(fleetId);

  if (!fleet) return console.error(`Fleet ${fleetId} does not exist`);

  const fetchedVehicle = await vehicleHandler.getVehicleByPlateNumber(
    vehiclePlateNumber
  );
  const vehicle = fetchedVehicle
    ? fetchedVehicle
    : vehicleCommands.createVehicle(vehiclePlateNumber, fleet);

  fleetHandler.handleRegisterVehicleCommand(fleet, vehicle);

  return vehicle.id;
};

export const parkVehicle = async (fleetId, vehiclePlateNumber, location) => {
  const fleet = await fleetHandler.fetchFleetById(fleetId);
  if (!fleet) return console.error(`Fleet ${fleetId} does not exist`);

  const vehicle = await vehicleHandler.getVehicleByPlateNumber(
    vehiclePlateNumber
  );

  if (!vehicle)
    return console.error(`Vehicle ${vehiclePlateNumber} does not exist`);

  if (vehicle && vehicle.fleetId.toString() !== fleet.id.toString())
    return console.error(
      `Vehicle with plate number ${vehiclePlateNumber} is not register in your fleet`
    );

  vehicleHandler.handleParkVehicleCommand({ vehicle, location });

  return vehicle.id;
};
