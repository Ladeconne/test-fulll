import { ILocation } from "@/Domain/Types/models";

export class Vehicle {
  id: number;
  plateNumber?: string;
  location: ILocation | null;
  fleetId: number | null;

  constructor(vehicleId: number) {
    this.id = vehicleId;
    this.fleetId = null;
    this.location = null;
  }
}
