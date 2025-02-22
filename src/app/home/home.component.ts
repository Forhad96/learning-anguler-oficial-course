import { Component,inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housinglocation";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingService } from "../housing.service";
@Component({
  selector: "app-home",
  standalone: true,

  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button type="button" class="primary">Search</button>
      </form>
      <section class="results">
        <app-housing-location
          *ngFor="let housingLocation of housingLocationList"
          [housingLocation]="housingLocation"
        ></app-housing-location>
      </section>
    </section>
  `,
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  
  housingLocationList: HousingLocation[]= []
  housingService = inject(HousingService)


  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => this.housingLocationList = housingLocationList)
    console.log(this.housingLocationList);
  }


}
