import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const RoutesConfig: Routes = [
    {
        path: "",
        title: "Home",
        component: HomeComponent,
    },
    {
        path: "details/:id",
        title: "detailspage",
        component: DetailsComponent,
    }
]

export default RoutesConfig;