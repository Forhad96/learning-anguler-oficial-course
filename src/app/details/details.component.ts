import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housinglocation";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-details",
  imports: [CommonModule, ReactiveFormsModule],
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
          <li>Units available:{{ housingLocation?.availableUnits }}</li>
          <li>Dose this location have wifi{{ housingLocation?.wifi }}</li>
          <li>Dose this location have laundry{{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name " formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" formControlName="lastName" />
          <label for="email">Email</label>
          <input type="email" id="email" formControlName="email" />
          <button type="submit" class="primary">Submit</button>
        </form>
      </section>
    </article>
  `,
  styleUrl: `./details.component.css`,
})
export class DetailsComponent {
  routeParams: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(" "),
    email: new FormControl(" "),
  });

  constructor() {
    const houseLocationId = Number(this.routeParams.snapshot.params["id"]);
    this.housingLocation =
      this.housingService.getHousingLocationById(houseLocationId);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? ""
    );
  }
}
