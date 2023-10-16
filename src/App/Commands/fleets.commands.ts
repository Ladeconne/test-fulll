import { Fleet } from "@/Domain/Entities/fleets.models";
import * as fleetHandler from "@/App/Handlers/fleets.handlers";
import * as vehicleHandler from "@/App/Handlers/vehicles.handlers";
import { db } from "@/Infra/db";

export const createFleet = (userId) => {
  const fleetId = Fleet(db).initiateFleet();

  fleetHandler.handleCreateFleetCommand({ fleetId, userId });

  return fleetId;
};

export const registerVehicle = async (fleetId, vehiclePlateNumber) => {
  const fleet = await fleetHandler.fetchFleetById(fleetId);
  if (!fleet) return console.log(`Fleet ${fleetId} does not exist`);

  const vehicle = await vehicleHandler.getVehicleByPlateNumber(
    vehiclePlateNumber
  );
  if (!vehicle)
    return console.log(
      `Vehicle with plate number ${vehiclePlateNumber} does not exist`
    );
  const isAlreadyRegistered = fleet.vehicles.find(
    (vehicle) => vehicle.plateNumber === vehiclePlateNumber
  );
  if (isAlreadyRegistered)
    return console.log(
      `Vehicle ${vehiclePlateNumber} is already registered in fleet ${fleetId}`
    );

  fleetHandler.handleRegisterVehicleCommand({ fleet, vehicle });
  return vehicle.id;
};

export const parkVehicle = async (fleetId, vehiclePlateNumber, location) => {
  const fleet = await fleetHandler.fetchFleetById(fleetId);
  if (!fleet) return console.log(`Fleet ${fleetId} does not exist`);

  const vehicle = await vehicleHandler.getVehicleByPlateNumber(
    fleet.vehicles.find((vehicle) => vehicle.plateNumber === vehiclePlateNumber)
  );

  if (!vehicle)
    return console.log(
      `Vehicle with plate number ${vehiclePlateNumber} is not register in your fleet`
    );

  vehicleHandler.handleParkVehicleCommand({ vehicle, location });

  return vehicle.id;
};
