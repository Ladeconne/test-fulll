import { Fleet } from "../../Domain/Entities/fleets.models"

export const fetchFleetById = (fleetId) => {
    return Fleet.fetchFleetById(fleetId);
};