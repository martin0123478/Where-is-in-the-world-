import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfricaDetailComponent} from './components/africa-detail/africa-detail.component'
import {CountriesAfricaComponent} from './components/countries-africa/countries-africa.component'
const routes: Routes = [
  {
    path:'',
    component:CountriesAfricaComponent
  },
  {
    path:':id',
    component:AfricaDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfricaRoutingModule { }
