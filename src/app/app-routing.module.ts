import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PortfoleoComponent } from './components/portfoleo/portfoleo.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  // {path:'home',component:HomeComponent},
  {path:'portfoleo', component:PortfoleoComponent},
  {path:'about' ,component:AboutComponent },
  {path:'contact' , component:ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
