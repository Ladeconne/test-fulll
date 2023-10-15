import { Vehicle } from "../../Domain/Entities/vehicles.models"
import { handleCreateVehicleCommand } from "../Handlers/vehicles.handlers";

export const createVehicle = (plateNumber) => {
    const vehicleId = Vehicle.generateVehicleId();

    handleCreateVehicleCommand({vehicleId, plateNumber})
    
    return vehicleId;
}
