import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {CartComponent} from "./cart/cart.component";
import {DetailsComponent} from "./details/details.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'cart', component:CartComponent},
  {path: 'details', component:DetailsComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
