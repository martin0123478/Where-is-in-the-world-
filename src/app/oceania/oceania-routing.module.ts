import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountriesOceaniaComponent } from './components/countries-oceania/countries-oceania.component';
import {OceaniaDetailComponent} from './components/oceania-detail/oceania-detail.component'
const routes: Routes = [
  {
    path:'',
    component:CountriesOceaniaComponent
  },
  {
    path:':id',
    component:OceaniaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OceaniaRoutingModule { }
