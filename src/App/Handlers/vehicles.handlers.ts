import { Vehicle } from "@/Domain/Entities/vehicles.models";
import { IVehicle } from "@/Domain/Types/models";
import { db } from "@/Infra/db";

export const getVehicleByPlateNumber = (plateNumber) => {
  return Vehicle(db).getVehicleByPlateNumber(plateNumber);
};

export const handleCreateVehicleCommand = ({
  vehicleId,
  plateNumber,
}: {
  vehicleId: number;
  plateNumber: string;
}) => {
  try {
    Vehicle(db).createVehicle(vehicleId, plateNumber);
  } catch (error: any) {
    console.error(`Error creating fleet: ${error.message}`);
  }
};

export const handleParkVehicleCommand = ({
  vehicle,
  location,
}: {
  vehicle: IVehicle;
  location: { lat: number; lng: number; alt: number | null };
}) => {
  try {
    if (
      vehicle.location?.lat === location.lat &&
      vehicle.location?.lng === location.lng &&
      vehicle.location?.alt === location.alt
    )
      return console.log(
        `Vehicle ${vehicle.plateNumber} is already parked in this location`
      );

    Vehicle(db).parkVehicle(vehicle, {
      lat: location?.lat,
      lng: location?.lng,
      alt: location?.alt ?? undefined,
    });
  } catch (error: any) {
    console.error(`Error localizing vehicle: ${error.message}`);
  }
};
