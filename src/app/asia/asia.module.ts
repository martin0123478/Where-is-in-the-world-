import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from './../shared/shared.module' 
import { AsiaRoutingModule } from './asia-routing.module';
import { CountriesAsiaComponent } from './components/countries-asia/countries-asia.component';
import { AsiaCountryComponent } from './components/asia-country/asia-country.component';
import { AsiaDetailComponent } from './components/asia-detail/asia-detail.component';

@NgModule({
  declarations: [CountriesAsiaComponent, AsiaCountryComponent, AsiaDetailComponent],
  imports: [
    CommonModule,
    AsiaRoutingModule,
    SharedModule
  ]
})
export class AsiaModule { }
