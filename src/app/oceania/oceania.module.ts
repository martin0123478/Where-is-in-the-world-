import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from './../shared/shared.module'
import { OceaniaRoutingModule } from './oceania-routing.module';
import { CountriesOceaniaComponent } from './components/countries-oceania/countries-oceania.component';
import { OceaniaCountryComponent } from './components/oceania-country/oceania-country.component';
import { OceaniaDetailComponent } from './components/oceania-detail/oceania-detail.component';


@NgModule({
  declarations: [CountriesOceaniaComponent, OceaniaCountryComponent, OceaniaDetailComponent],
  imports: [
    CommonModule,
    OceaniaRoutingModule,
    SharedModule
  ]
})
export class OceaniaModule { }
