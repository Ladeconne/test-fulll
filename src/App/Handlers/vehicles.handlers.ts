import { PlateNumber } from "@/Domain/valueObjects/plateNumbers";
import { Vehicle } from "../../Domain/Entities/vehicles.models";
import Location from "@/Domain/valueObjects/locations";
export const getVehicleByPlateNumber = (plateNumber) => {
    return Vehicle.vehicles.find((vehicle) => vehicle.plateNumber === plateNumber);
}

export const handleCreateVehicleCommand = ({vehicleId, plateNumber}: {vehicleId: number, plateNumber: PlateNumber}) => {
    try {
        Vehicle.createVehicle({vehicleId, plateNumber})
    } catch (error: any) {
        console.error(`Error creating fleet: ${error.message}`);
    }
}

export const handleParkVehicleCommand = ({vehicle, location}: { vehicle: Vehicle, location: {lat: number, lng: number, alt: number | null}}) => {
    try {
        if (vehicle.location?.equals(location)) return console.log(`Vehicle ${vehicle.plateNumber} is already parked in this location`);
        
        vehicle.parkVehicle(location.lat, location.lng, location.alt);
    } catch (error: any) {
        console.error(`Error localizing vehicle: ${error.message}`);
    }
}