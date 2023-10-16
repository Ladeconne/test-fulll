import { ILocation } from "@/Domain/Types/models";

export class Vehicle {
  vehicleId: number;
  plateNumber?: string;
  location: ILocation | null;

  constructor(vehicleId: number) {
    this.vehicleId = vehicleId;
    this.location = null;
  }
}
