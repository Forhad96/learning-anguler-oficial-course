import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";

import { HousingLocation } from "./housinglocation";

@Component({
  selector: "app-root",
  imports: [HomeComponent],
  template: `
    <main>
      <header>
        <img src="assets/logo.svg" alt="Angular Logo" />
      </header>
      <Section class="content">
        <app-home></app-home>
      </Section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";
  housingLocation: HousingLocation = {
    id: 9999,
    name: "Test Home",
    city: "Test city",
    state: "ST",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
