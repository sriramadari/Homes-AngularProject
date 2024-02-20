import { Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";

@Injectable({
    providedIn: "root", 
})

export class HousingService {
    housingLocation:HousingLocation[]=[];
    async getHousingLocation():Promise<HousingLocation[]>{
        const data=await fetch("http://localhost:3000/location");
        return this.housingLocation=await data.json()??[];
    }
    async getHousingLocationById(id:number):Promise<HousingLocation|undefined>{
        const data=await fetch(`http://localhost:3000/location/${id}`);
        return await data.json()??{};
    }
    submitApplication(firstName:string,lastName:string,email:string){
        console.log(firstName,lastName,email);  
    }
    constructor(){}
}