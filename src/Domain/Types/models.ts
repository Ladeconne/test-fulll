import { Types } from "mongoose";

export type ILocation = {
  lat: number;
  lng: number;
  alt?: number;
};

export type IVehicle = {
  equals(arg0: Types.ObjectId): unknown;
  id: any;
  location: ILocation;
  plateNumber: string;
  fleetId: any | null;
};

export type IFleet = {
  id: any;
  vehicles: IVehicle[];
  userId: any;
};

export type IUser = {
  id: any;
  fleets: IFleet[];
};
