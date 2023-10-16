import { Fleet } from "@/Domain/Entities/fleets.models";
import { db } from "@/Infra/db";

export const fetchFleetById = (fleetId) => {
  return Fleet(db).fetchFleetById(fleetId);
};
