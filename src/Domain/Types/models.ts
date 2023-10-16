export type ILocation = {
  lat: number;
  lng: number;
  alt?: number;
};

export type IVehicle = {
  id: any;
  location: ILocation;
  plateNumber: string;
};

export type IFleet = {
  id: any;
  vehicles: IVehicle[];
};

export type IUser = {
  id: any;
  fleets: IFleet[];
};
