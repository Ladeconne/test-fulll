import * as fleetCommands from '../App/Commands/fleets.commands';
import { Command } from 'commander';

const program = new Command();

program
  .command('create <value>')
  .description('Create user')
  .action((value) => {
    const fleetId = fleetCommands.createFleet(value);
    console.log(`FleetId: ${fleetId}`);
  });

program
  .command('register-vehicle <fleetId> <vehiclePlateNumber>')
  .description('Register a vehicle in a fleet')
  .action((fleetId, vehiclePlateNumber) => {
    const vehicleId = fleetCommands.registerVehicle(fleetId, vehiclePlateNumber);
    console.log(`Vehicle ${vehicleId} registered in fleet ${fleetId}`);
  });

program
  .command('localize-vehicle <fleetId> <vehiclePlateNumber> <lat> <lng> <alt>')
  .description('Create user')
  .action((fleetId, vehiclePlateNumber, lat, lng, alt) => {
    const vehicleId = fleetCommands.parkVehicle(fleetId, vehiclePlateNumber, { lat, lng, alt });
    console.log(`Vehicle ${vehicleId} parked in location ${lat}, ${lng}, ${alt} `);
  });

program.parse(process.argv);
