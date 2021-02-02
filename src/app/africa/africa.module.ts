import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfricaRoutingModule } from './africa-routing.module';
import { CountriesAfricaComponent } from './components/countries-africa/countries-africa.component';
import { CountryAfricaComponent } from './components/country-africa/country-africa.component';
import{SharedModule} from './../shared/shared.module';
import { AfricaDetailComponent } from './components/africa-detail/africa-detail.component'
 @NgModule({
  declarations: [CountriesAfricaComponent, CountryAfricaComponent, AfricaDetailComponent],
  imports: [
    CommonModule,
    AfricaRoutingModule,
    SharedModule
  ]
})
export class AfricaModule { }
