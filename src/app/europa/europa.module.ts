import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from './../shared/shared.module'
import { EuropaRoutingModule } from './europa-routing.module';
import { CountriesEuropaComponent } from './components/countries-europa/countries-europa.component';
import { EuropaCountryComponent } from './components/europa-country/europa-country.component';
import { EuropaDetailComponent } from './components/europa-detail/europa-detail.component';


@NgModule({
  declarations: [CountriesEuropaComponent, EuropaCountryComponent, EuropaDetailComponent],
  imports: [
    CommonModule,
    EuropaRoutingModule,
    SharedModule
  ]
})
export class EuropaModule { }
