import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from './../shared/shared.module'
import { HomeRoutingModule } from './home-routing.module';
// import { HeaderComponent } from '../shared/components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import {MaterialModule} from './../material/material.module'
// import {MenuComponent} from './../shared/components/menu/menu.component'
@NgModule({
  declarations: [ HomeComponent, CountriesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HomeModule { }
