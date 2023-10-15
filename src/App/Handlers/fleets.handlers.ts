import { Fleet } from "../../Domain/Entities/fleets.models"

export const handleCreateFleetCommand = ({userId, fleetId}) => {
    try {
        Fleet.createFleet({userId, fleetId})
        return fleetId;
    } catch (error: any) {
        console.error(`Error creating fleet: ${error.message}`);
    }
}

export const handleRegisterVehicleCommand = ({fleet, vehicle}) => {
    try {
        fleet.registerVehicle(vehicle);
    } catch (error: any) {
        console.error(`Error registering vehicle: ${error.message}`);
    }
}

export const getFleetById = (fleetId) => {
    return Fleet.fleets.find((fleet) => fleet.fleetId === fleetId);
}
