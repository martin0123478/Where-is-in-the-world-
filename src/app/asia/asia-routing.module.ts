import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountriesAsiaComponent} from './components/countries-asia/countries-asia.component';
import {AsiaDetailComponent} from './components/asia-detail/asia-detail.component'
const routes: Routes = [
  {
    path:'',
    component:CountriesAsiaComponent
  },
  {
    path:':id',
    component:AsiaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsiaRoutingModule { }
