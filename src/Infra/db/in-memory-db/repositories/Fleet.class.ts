import { User } from "./User.class";
import { Vehicle } from "./Vehicle.class";

export class Fleet {
  fleetId: string;
  userId?: User;
  vehicles: Vehicle[];

  constructor(fleetId) {
    this.fleetId = fleetId;
    this.vehicles = [];
  }
}
