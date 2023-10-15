import { Vehicle } from "../../Domain/Entities/vehicles.models"

export const fetchVehicleByPlateNumber = (plateNumber) => {
    return Vehicle.vehicles.find((vehicle) => vehicle.plateNumber === plateNumber);
};