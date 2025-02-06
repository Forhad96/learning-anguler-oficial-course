import { Injectable } from "@angular/core";
import { HousingLocation } from "./housinglocation";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  baseUrl = "http://localhost:3000/locations";

  constructor() {}
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.baseUrl);
    return data.json();
  }
  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.baseUrl}/${id}`);
    return await data.json();
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
