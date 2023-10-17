import { Vehicle } from "./Vehicle.class";

export class Fleet {
  id: string;
  userId: any;
  vehicles: Vehicle[];

  constructor(fleetId) {
    this.id = fleetId;
    this.userId = null;
    this.vehicles = [];
  }
}
