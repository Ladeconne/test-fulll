import { Fleet } from "./Fleet.class";

export class User {
  userId: string;
  fleets: Fleet[];

  constructor(userId) {
    this.userId = userId;
    this.fleets = [];
  }
}
