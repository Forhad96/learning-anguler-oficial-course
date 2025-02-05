import { Component ,inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <p>
      details works! {{houseLocationId}}
    </p>
  `,
  styles: ``
})
export class DetailsComponent {
routeParams:ActivatedRoute = inject(ActivatedRoute)
houseLocationId = 0;
constructor(){
  this.houseLocationId = Number(this.routeParams.snapshot.params['id']);
}
}
