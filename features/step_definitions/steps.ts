import { Given, When, Then } from '@cucumber/cucumber';
import * as userCommands from '../../src/App/Commands/users.commands';
import * as fleetCommands from '../../src/App/Commands/fleets.commands';
import * as vehicleCommands from '../../src/App/Commands/vehicles.commands';
import * as fleetQueries from '../../src/App/Queries/fleets.queries';
import * as vehicleQueries from '../../src/App/Queries/vehicles.queries';
import assert from 'assert';
import Location from '../../src/Domain/valueObjects/locations'

Given('my fleet', function () {
  const userId = userCommands.createUser();

  fleetCommands.createFleet(userId);
});

Given('a vehicle', function () {
  vehicleCommands.createVehicle('ABC123');
});


When('I register this vehicle into my fleet', function () {
  fleetCommands.registerVehicle(1, 'ABC123');
});

Then('this vehicle should be part of my vehicle fleet', function () {
  const fleet = fleetQueries.fetchFleetById(1);
  const vehicle = vehicleQueries.fetchVehicleByPlateNumber('ABC123');
  assert(fleet?.vehicles.find((vehicle) => vehicle.plateNumber.toString() === 'ABC123') === vehicle);
});

Given('the fleet of another user', function () {
  const userId = userCommands.createUser();
  fleetCommands.createFleet(userId);
})

Given('this vehicle has been registered into the other user\'s fleet', function () {
  fleetCommands.registerVehicle(2, 'ABC123');
})

Given('I have registered this vehicle into my fleet', function () {
  fleetCommands.registerVehicle(1, 'ABC123');
})

When('I try to register this vehicle into my fleet', function () {
  fleetCommands.registerVehicle(1, 'ABC123');
})

Then('I should be informed this this vehicle has already been registered into my fleet', function () {})

Given('a location', function () {
  new Location(1, 1);
})

When('I park my vehicle at this location', function () {
  fleetCommands.parkVehicle(1, 'ABC123', {lat: 1, lng: 1, alt: 2});
})

Then('the known location of my vehicle should verify this location', function () {
  const vehicle = vehicleQueries.fetchVehicleByPlateNumber('ABC123');

  assert(vehicle?.location?.lat === 1 && vehicle?.location?.lng === 1 && vehicle?.location?.alt === 2);
})

Given('my vehicle has been parked into this location', function () {
  fleetCommands.parkVehicle(1, 'ABC123', {lat: 1, lng: 1, alt: 2});
})

When('I try to park my vehicle at this location', function () {
  fleetCommands.parkVehicle(1, 'ABC123', {lat: 1, lng: 1, alt: 2});
})

Then('I should be informed that my vehicle is already parked at this location', function () {})