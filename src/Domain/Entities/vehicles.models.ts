import { PlateNumber } from "../valueObjects/plateNumbers";
import Location from '../valueObjects/locations'

export class Vehicle {
    vehicleId: number;
    plateNumber: PlateNumber;
    location: Location | null;

    static vehicles: Vehicle[] = [];

    constructor(vehicleId: number, plateNumber: PlateNumber) {
        this.vehicleId = vehicleId;
        this.plateNumber = plateNumber;
        this.location = null;
    }

    static createVehicle({vehicleId, plateNumber}: {vehicleId: number, plateNumber: PlateNumber}) {
        const vehicle = new Vehicle(vehicleId, plateNumber);
        this.vehicles.push(vehicle);
    }

    static generateVehicleId() {
        // Implement logic to generate a unique vehicle id
        return this.vehicles.length + 1;
    }

    parkVehicle(lat, lng, alt) {
        this.location = new Location(lat, lng, alt);
    }
}
