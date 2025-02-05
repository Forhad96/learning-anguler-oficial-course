import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housinglocation";

@Component({
  selector: "app-details",
  imports: [],
  template: ` <p>details works! {{ housingLocation?.id }},{{ housingLocation?.name }}</p> `,
  styles: ``,
})
export class DetailsComponent {
  routeParams: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  constructor() {
    const houseLocationId = Number(this.routeParams.snapshot.params["id"]);
    this.housingLocation =
      this.housingService.getHousingLocationById(houseLocationId);
  }
}
