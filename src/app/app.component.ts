import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";

import { HousingLocation } from "./housinglocation";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <header>
        <img src="assets/logo.svg" alt="Angular Logo" />
      </header>
      <Section class="content">
        <router-outlet></router-outlet>
      </Section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
}
