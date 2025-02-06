import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housinglocation";

@Component({
  selector: "app-details",
  imports: [],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
      />
      <div class="listing-heading">{{ housingLocation?.name }}</div>
      <p class="listing-location">
        ,{{ housingLocation?.city }},{{ housingLocation?.state }}
      </p>
      <section class="listing-features">
        <h2 class="section-heading">About this house location</h2>
        <ul>
          <li>Units available:{{housingLocation?.availableUnits}}
          </li>
          <li>Dose this location have wifi{{housingLocation?.wifi}}</li>
          <li>Dose this location have laundry{{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">

      <h2 class="section-heading">Apply now to live here</h2>
      <button class="primary">Apply Now</button>
      </section>
    </article>
  `,
  styleUrl: `./details.component.css`, 
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
