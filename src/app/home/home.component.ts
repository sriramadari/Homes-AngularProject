import { Component,inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import { HousingLocation} from "../housing-location";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterResult(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let location of FilteredHousingLocation"
        [housingLocation]="location" >
      </app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingService=inject(HousingService);
  housingLocation:HousingLocation[]=[];
  FilteredHousingLocation:HousingLocation[]=[];

  constructor() {
    this.housingService.getHousingLocation().then((data)=>{
      this.housingLocation=data;
      this.FilteredHousingLocation=data;
    });
  }

  filterResult(city:string){
    this.FilteredHousingLocation=this.housingLocation.filter((location)=>{
      return location.city.toLowerCase().includes(city.toLowerCase());
    });
  }

}
