import { Fleet } from "./fleets.models";

export class User {
    userId: string;
    fleets: Fleet[];

    static users: User[] = [];

    constructor(userId) {
        this.userId = userId;
        this.fleets = [];
    }

    static generateUserId() {
        // Implement logic to generate a unique user id
        return this.users.length + 1;
    }

    static createUser(userId: number) {
        const user = new User(userId);
        this.users.push(user);
    }

    static registerVehicle(fleet, vehicle) {
        if (!fleet.hasVehicle(vehicle)) {
            fleet.registerVehicle(vehicle);
        } else {
            throw new Error("Vehicle already registered in this fleet");
        }
    }
}
