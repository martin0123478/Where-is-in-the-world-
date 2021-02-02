import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountriesEuropaComponent} from './components/countries-europa/countries-europa.component';
import {EuropaDetailComponent} from './components/europa-detail/europa-detail.component'
const routes: Routes = [
  {
    path:'',
    component:CountriesEuropaComponent
  },
  {
    path:':id',
    component:EuropaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuropaRoutingModule { }
