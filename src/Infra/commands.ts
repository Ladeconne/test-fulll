#!/usr/bin/env node
import * as fleetCommands from "@/App/Commands/fleets.commands";
import { Command } from "commander";
import mongoLoader from "@/Infra/db/mongodb/loader";

const program = new Command();

program
  .command("create <value>")
  .description("Create user")
  .action(async (value) => {
    const mongo = await mongoLoader();
    const fleetId = await fleetCommands.createFleet(value);
    console.log(`FleetId: ${fleetId}`);
    setTimeout(() => {
      mongo.disconnect();
    }, 100);
  });

program
  .command("register-vehicle <fleetId> <vehiclePlateNumber>")
  .description("Register a vehicle in a fleet")
  .action(async (fleetId, vehiclePlateNumber) => {
    const mongo = await mongoLoader();
    const vehicleId = await fleetCommands.registerVehicle(
      fleetId,
      vehiclePlateNumber
    );
    console.log(`Vehicle ${vehicleId} registered in fleet ${fleetId}`);
    setTimeout(() => {
      mongo.disconnect();
    }, 100);
  });

program
  .command("localize-vehicle <fleetId> <vehiclePlateNumber> <lat> <lng> [alt]")
  .description("Localize a vehicle in a fleet")
  .action(async (fleetId, vehiclePlateNumber, lat, lng, alt = null) => {
    const mongo = await mongoLoader();
    const vehicleId = await fleetCommands.parkVehicle(
      fleetId,
      vehiclePlateNumber,
      {
        lat,
        lng,
        alt,
      }
    );
    console.log(
      `Vehicle ${vehicleId} parked in location ${lat}, ${lng}, ${alt} `
    );
    setTimeout(() => {
      mongo.disconnect();
    }, 100);
  });

program.parse(process.argv);
