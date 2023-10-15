import { User } from "./users.models";
import { Vehicle } from "./vehicles.models";

export class Fleet {

    fleetId: string;
    userId: User;
    vehicles: Vehicle[];

    static fleets: Fleet[] = [];

    constructor(fleetId, userId) {
        this.fleetId = fleetId;
        this.userId = userId;
        this.vehicles = [];
    }

    static generateFleetId() {
        // Implement logic to generate a unique fleet id
        return this.fleets.length + 1;
    }

    static createFleet({fleetId, userId}: {fleetId: number, userId: number}) {
        const fleet = new Fleet(fleetId, userId);
        this.fleets.push(fleet);
        return fleet;
    }
    
    static fetchFleetById(fleetId) {
        return Fleet.fleets.find((fleet) => fleet.fleetId === fleetId);
    }
    
    registerVehicle(vehicle: Vehicle) {
        this.vehicles.push(vehicle);
    }

    parkVehicle(vehicle, location) {
        // Implement logic to park a vehicle at a location
    }

    getVehicleByPlateNumber(vehiclePlateNumber) {
        return this.vehicles.find((vehicle) => vehicle.plateNumber === vehiclePlateNumber);
    }

}
