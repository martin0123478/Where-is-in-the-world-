import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountryService } from './services/country/country.service'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    CountryService
  ]
})
export class CoreModule { }
