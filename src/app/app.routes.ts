import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";

export const ROUTES: Routes = [
   {
    path: 'home', 
    component: HomeComponent, 
   },
   {
    path: 'me',
    component: UserInfoComponent, 
   },
   {
     path: '',
     component: HomeComponent,
   }
];