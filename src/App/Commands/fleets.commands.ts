import { Fleet } from "../../Domain/Entities/fleets.models"
import * as fleetHandler from "../Handlers/fleets.handlers";
import * as vehicleHandler from "../Handlers/vehicles.handlers";

export const createFleet = (userId) => {
    const fleetId = Fleet.generateFleetId();
    
    fleetHandler.handleCreateFleetCommand({fleetId, userId})
    
    return fleetId;
}

export const registerVehicle = (fleetId, vehiclePlateNumber) => {
    const fleet = fleetHandler.getFleetById(fleetId);
    if(!fleet) return console.log(`Fleet ${fleetId} does not exist`);
    
    const vehicle = vehicleHandler.getVehicleByPlateNumber(vehiclePlateNumber);
    if(!vehicle) return console.log(`Vehicle with plate number ${vehiclePlateNumber} does not exist`);

    const isAlreadyRegistered = fleet.vehicles.find((vehicle) => vehicle.plateNumber === vehiclePlateNumber);
    if(isAlreadyRegistered) return console.log(`Vehicle ${vehiclePlateNumber} is already registered in fleet ${fleetId}`);

    fleetHandler.handleRegisterVehicleCommand({fleet, vehicle});    
    return vehicle.vehicleId;
}

export const parkVehicle = (fleetId, vehiclePlateNumber, location) => {
    const fleet = fleetHandler.getFleetById(fleetId);
    if(!fleet) return console.log(`Fleet ${fleetId} does not exist`);
    
    const vehicle = fleet.getVehicleByPlateNumber(vehiclePlateNumber)

    if(!vehicle) return console.log(`Vehicle with plate number ${vehiclePlateNumber} does not exist`);

    vehicleHandler.handleParkVehicleCommand({vehicle, location});

    return vehicle.vehicleId;
};
