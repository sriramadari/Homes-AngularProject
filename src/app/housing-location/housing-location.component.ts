import { Component,Input,OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation} from "../housing-location";
import { RouterModule } from "@angular/router";
@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="{{housingLocation.name}}"/>
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}},{{housingLocation.state}}</p>
      <a [routerLink]="['/details',housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent implements OnInit{
  @Input() housingLocation!:HousingLocation;
  constructor() {}
  ngOnInit(): void {
  }
}
