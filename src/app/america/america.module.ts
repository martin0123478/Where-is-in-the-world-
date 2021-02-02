import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from './../shared/shared.module'
import { AmericaRoutingModule } from './america-routing.module';
import { CountriesAmericaComponent } from './components/countries-america/countries-america.component';
import { AmericaCountryComponent } from './components/america-country/america-country.component';
import { AmericaDetailComponent } from './components/america-detail/america-detail.component';


@NgModule({
  declarations: [CountriesAmericaComponent, AmericaCountryComponent, AmericaDetailComponent],
  imports: [
    CommonModule,
    AmericaRoutingModule,
    SharedModule
  ]
})
export class AmericaModule { }
