import { Fleet } from "./Fleet.class";

export class User {
  id: string;
  fleets: Fleet[];

  constructor(userId) {
    this.id = userId;
    this.fleets = [];
  }
}
